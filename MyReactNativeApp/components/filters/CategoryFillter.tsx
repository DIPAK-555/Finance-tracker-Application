import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <Button
          key={category}
          title={category}
          onPress={() => onSelectCategory(category)}
          color={selectedCategory === category ? "blue" : "gray"}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "center", marginVertical: 10 },
});
