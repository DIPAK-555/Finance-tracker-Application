import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Picker, TextInput, View } from "react-native";

export default function AddTransactionScreen() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const router = useRouter();

  const addTransaction = async () => {
    if (!description || !amount) return alert("Enter valid details");

    const newTransaction = { description, amount: parseFloat(amount), category };
    const storedTransactions = await AsyncStorage.getItem("transactions");
    const transactions = storedTransactions ? JSON.parse(storedTransactions) : [];

    transactions.push(newTransaction);
    await AsyncStorage.setItem("transactions", JSON.stringify(transactions));

    router.back();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Description" style={styles.input} value={description} onChangeText={setDescription} />
      <TextInput placeholder="Amount" style={styles.input} keyboardType="numeric" value={amount} onChangeText={setAmount} />
      <Picker selectedValue={category} onValueChange={setCategory}>
        <Picker.Item label="Food" value="Food" />
        <Picker.Item label="Transport" value="Transport" />
        <Picker.Item label="Shopping" value="Shopping" />
      </Picker>
      <Button title="Add Transaction" onPress={addTransaction} />
    </View>
  );
}
