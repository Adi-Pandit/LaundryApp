import { StatusBar, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const [fontLoading] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontLoading) {
    return null;
  }

  return (
    <Provider store={store}>
      <HomeScreen />
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
