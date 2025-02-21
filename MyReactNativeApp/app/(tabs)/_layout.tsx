import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <NavigationContainer>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="add-transaction" options={{ title: "Add Transaction" }} />
        <Stack.Screen name="transactions" options={{ title: "Transaction History" }} />
        <Stack.Screen name="settings" options={{ title: "Settings" }} />
      </Stack>
    </NavigationContainer>
  );
}
