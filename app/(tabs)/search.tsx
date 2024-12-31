import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import SearchBar from "@/components/search-bar/SearchBar";

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
