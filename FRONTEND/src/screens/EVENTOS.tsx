import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/styles';

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

  const addEvent = () => {
    if (!name || !date) return;

    const newEvent: Event = {
      id: Math.random().toString(),
      name,
      date,
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setName('');
    setDate('');
  };

  const updateEvent = () => {
    if (!name || !date || !editingEvent) return;

    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === editingEvent.id ? { ...event, name, date } : event
      )
    );

    setEditingEvent(null);
    setName('');
    setDate('');
  };

  const deleteEvent = (id: string) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
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
    <View style={globalStyles.container}>
      <Text style={globalStyles.mainTitle}>Gerenciamento de Eventos</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Nome do Evento"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Data do Evento"
        value={date}
        onChangeText={setDate}
      />
      {editingEvent ? (
        <View style={globalStyles.buttonContainer}>
          <Button title="Atualizar" onPress={updateEvent} />
          <Button title="Cancelar" onPress={cancelEditing} color="red" />
        </View>
      ) : (
        <Button title="Adicionar" onPress={addEvent} />
      )}
      <FlatList
        data={events}
        keyExtractor={(event) => event.id}
        renderItem={({ item }) => (
          <View style={globalStyles.itemContainer}>
            <Text style={globalStyles.itemText}>{item.name}</Text>
            <Text style={globalStyles.itemText}>{item.date}</Text>
            <View style={globalStyles.itemButtons}>
              <Button title="Editar" onPress={() => startEditing(item)} />
              <Button title="Excluir" onPress={() => deleteEvent(item.id)} color="red" />
            </View>
          </View>
        )}
      />
    </View>
  );
}
