import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  button: {
    color: "#376274",
    fontSize: 16,
    marginTop: 6,
    padding: 6,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
});

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: "Ooops!! Not Found" }} />
      <View style={styles.container}>
        <Text style={styles.text}>Not Found</Text>
        <Link href="/(tabs)/index" style={styles.button}>
          <Text>Go to Home</Text>
        </Link>
      </View>
    </>
  );
}
