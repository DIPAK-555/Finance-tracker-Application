import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryFilter from "../../components/filters/CategoryFilter";
import TransactionItem from "../../components/TransactionItem";

export default function TransactionsScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const transactions = [
    { id: "1", description: "Groceries", amount: -500, category: "Food" },
    { id: "2", description: "Salary", amount: 10000, category: "Income" },
    { id: "3", description: "Electricity Bill", amount: -1200, category: "Utilities" },
  ];

  const categories = ["All", "Food", "Income", "Utilities"];

  const filteredTransactions =
    selectedCategory === "All" ? transactions : transactions.filter((t) => t.category === selectedCategory);

  return (
    <View style={styles.container}>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <FlatList
        data={filteredTransactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});
