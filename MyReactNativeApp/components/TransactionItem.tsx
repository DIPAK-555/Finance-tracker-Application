import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TransactionItem({ transaction }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{transaction.description}</Text>
      <Text style={transaction.amount > 0 ? styles.income : styles.expense}>
        ₹{transaction.amount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: "row", justifyContent: "space-between", padding: 10, borderBottomWidth: 1 },
  text: { fontSize: 16 },
  income: { color: "green", fontSize: 16 },
  expense: { color: "red", fontSize: 16 },
});
