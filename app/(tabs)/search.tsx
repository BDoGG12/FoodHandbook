import {useState} from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { fetchMealsByCategory } from "@/services/recipeServices";
import SearchBar from "@/components/search-bar/SearchBar";

// Objective: List all meals based by category
// Expected: User should see search result popuplate as they type and select the meal category

const SearchScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
    </SafeAreaView>
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

export default SearchScreen;
