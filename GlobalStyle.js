import { StyleSheet, Platform, Dimensions } from "react-native";

export default StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    paddingTop: Platform.OS === "android" ? 0 : 0,
    //height: Dimensions.get("window").height,
  },
});
