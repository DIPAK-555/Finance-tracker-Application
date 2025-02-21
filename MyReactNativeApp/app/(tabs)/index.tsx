import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [transactions, setTransactions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loadTransactions = async () => {
      const storedTransactions = await AsyncStorage.getItem("transactions");
      if (storedTransactions) {
        setTransactions(JSON.parse(storedTransactions));
      }
    };
    loadTransactions();
  }, []);

  const calculateBalance = () => {
    return transactions.reduce((total, t) => total + t.amount, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.balance}>Balance: ₹{calculateBalance()}</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={item.amount > 0 ? styles.income : styles.expense}>
            {item.description}: ₹{item.amount}
          </Text>
        )}
      />
      <Button title="Add Transaction" onPress={() => router.push("/add-transaction")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  balance: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  income: { color: "green", fontSize: 16 },
  expense: { color: "red", fontSize: 16 },
});
