import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, StyleSheet, View } from "react-native";

export default function SettingsScreen() {
  const clearTransactions = async () => {
    await AsyncStorage.removeItem("transactions");
    alert("Transactions cleared!");
  };

  return (
    <View style={styles.container}>
      <Button title="Clear Transactions" onPress={clearTransactions} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
