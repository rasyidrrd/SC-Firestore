// components/NoteItem.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const NoteItem = ({ note, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete}>
      <View>
        <Text>{note.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NoteItem;
