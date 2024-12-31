import { Image, StyleSheet, Platform, FlatList, SafeAreaView } from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState, useEffect } from "react";
import { fetchCategories } from "@/services/recipeServices";
import Category from "@/components/category/Category";

export default function HomeScreen() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);
  return (
    <SafeAreaView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Featured Recipes</ThemedText>
      </ThemedView>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Category
            categoryName={item.strCategory}
            imageSource={item.strCategoryThumb}
          />
        )}
        style={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    margin: 'auto',
    color: 'black',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  listContainer: {
    marginBottom: 15
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
