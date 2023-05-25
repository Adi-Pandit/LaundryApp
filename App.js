import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [fontLoading] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
