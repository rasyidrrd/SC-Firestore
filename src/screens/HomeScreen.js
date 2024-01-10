// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNotes, addNote, deleteNote, updateNote } from '../config/db';

const HomeScreen = ({ navigation }) => {
  const [note, setNote] = useState('');
  const notes = useNotes();
  const [editingNoteId, setEditingNoteId] = useState(null);

  const handleAddNote = () => {
    addNote(note);
    setNote('');
  };

  const handleDeleteNote = (id) => {
    deleteNote(id);
    setEditingNoteId(null); // Stop editing if the deleted note is being edited
  };

  const handleEditNote = (id, text) => {
    setEditingNoteId(id);
    setNote(text);
  };

  const handleUpdateNote = (id) => {
    updateNote(id, note);
    setEditingNoteId(null);
    setNote('');
  };

  const navigateToDetail = (id, text) => {
    if (!editingNoteId) {
      navigation.navigate('DetailScreen', { id, noteText: text });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter note"
        placeholderTextColor="#FFD700"
        value={note}
        onChangeText={setNote}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddNote}>
        <Text style={styles.addButtonText}>Add Note</Text>
      </TouchableOpacity>

      <FlatList
        style={styles.list}
        data={notes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetail(item.id, item.text)}>
            <View style={styles.card}>
              {editingNoteId === item.id ? (
                <>
                  <TextInput
                    style={styles.editInput}
                    placeholder="Edit your note"
                    placeholderTextColor="#FFD700"
                    value={note}
                    onChangeText={setNote}
                  />
                  <TouchableOpacity onPress={() => handleUpdateNote(item.id)}>
                    <Text style={styles.updateButtonText}>Update</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text style={styles.cardText} numberOfLines={1}>
                    {item.text}
                  </Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.editButton}
                      onPress={() => handleEditNote(item.id, item.text)}
                    >
                      <Text style={styles.editButtonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => handleDeleteNote(item.id)}
                    >
                      <Text style={styles.deleteButtonText}>X</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFE0',
  },
  input: {
    height: 40,
    borderColor: '#FFD700',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  addButton: {
    backgroundColor: '#FFD700',
    width: '50%',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  list: {
    marginTop: 10,
  },
  card: {
    backgroundColor: '#FFD700',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    paddingRight: 40, // Add padding to the right for the edit button
  },
  cardText: {
    color: '#000',
    flex: 1,
  },
  editButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  deleteButtonText: {
    color: '#FF0000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  editInput: {
    height: 40,
    borderColor: '#FFD700',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  updateButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 5,
    right: 5,
  },
  editButton: {
    backgroundColor: '#FFD700',
    padding: 8,
    borderRadius: 8,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#FFD700',
    padding: 8,
    borderRadius: 8,
  },
});

export default HomeScreen;
