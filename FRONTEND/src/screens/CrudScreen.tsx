import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert, TouchableOpacity } from 'react-native';

interface Item {
  id: string;
  name: string;
}

export default function CrudScreen() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState('');
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const addItem = () => {
    if (!name) return;

    const newItem: Item = {
      id: Math.random().toString(),
      name,
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setName('');
  };

  const updateItem = () => {
    if (!name || !editingItem) return;

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === editingItem.id ? { ...item, name } : item
      )
    );

    setEditingItem(null);
    setName('');
  };

  const deleteItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const startEditing = (item: Item) => {
    setEditingItem(item);
    setName(item.name);
  };

  const cancelEditing = () => {
    setEditingItem(null);
    setName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRUD Genérico</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      {editingItem ? (
        <View style={styles.buttonContainer}>
          <Button title="Atualizar" onPress={updateItem} />
          <Button title="Cancelar" onPress={cancelEditing} color="red" />
        </View>
      ) : (
        <Button title="Adicionar" onPress={addItem} />
      )}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <View style={styles.itemButtons}>
              <Button title="Editar" onPress={() => startEditing(item)} />
              <Button title="Excluir" onPress={() => deleteItem(item.id)} color="red" />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
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
