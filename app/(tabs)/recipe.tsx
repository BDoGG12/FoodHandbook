import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


// Saved Recipes
const RecipeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saved Recipes</Text>
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

export default RecipeScreen;
