import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookmarkScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bookmark Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
});

export default BookmarkScreen;
