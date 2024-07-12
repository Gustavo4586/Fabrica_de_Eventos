import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events';

interface Event {
  id: string;
  name: string;
  date: string;
}

export default function EVENTOS() {
  const [events, setEvents] = useState<Event[]>([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(API_URL);
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addEvent = async () => {
    if (!name || !date) return;

    try {
      const response = await axios.post(API_URL, { name, date });
      setEvents((prevEvents) => [...prevEvents, response.data]);
      setName('');
      setDate('');
    } catch (error) {
      console.error(error);
    }
  };

  const updateEvent = async () => {
    if (!name || !date || !editingEvent) return;

    try {
      const response = await axios.put(`${API_URL}/${editingEvent.id}`, { name, date });
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === editingEvent.id ? response.data : event
        )
      );
      setEditingEvent(null);
      setName('');
      setDate('');
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const startEditing = (event: Event) => {
    setEditingEvent(event);
    setName(event.name);
    setDate(event.date);
  };

  const cancelEditing = () => {
    setEditingEvent(null);
    setName('');
    setDate('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.eventBox}>
        <Text style={styles.title}>Gerenciamento de Eventos</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do Evento"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Data do Evento"
          value={date}
          onChangeText={setDate}
        />
        {editingEvent ? (
          <View style={styles.buttonContainer}>
            <Button title="Atualizar" onPress={updateEvent} />
            <Button title="Cancelar" onPress={cancelEditing} color="red" />
          </View>
        ) : (
          <Button title="Adicionar" onPress={addEvent} />
        )}
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer} key={item.id}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.date}</Text>
              <View style={styles.itemButtons}>
                <Button title="Editar" onPress={() => startEditing(item)} />
                <Button title="Excluir" onPress={() => deleteEvent(item.id)} color="red" />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFF0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  eventBox: {
    width: '90%',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#8B4513',
    borderTopWidth: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 18,
  },
  itemButtons: {
    flexDirection: 'row',
  },
});
