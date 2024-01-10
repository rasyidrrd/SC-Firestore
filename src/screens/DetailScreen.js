// DetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { noteText } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>{noteText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFE0',
  },
  detailText: {
    fontSize: 18,
    color: '#000',
  },
});

export default DetailScreen;
