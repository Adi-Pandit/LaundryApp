import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);

  const navigation = useNavigation();

  return (
    <ScrollView style={{ marginTop: Platform.OS === "android" ? 0 : 50 }}>
      {total === 0 ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ marginTop: 40 }}>Your cart is empty</Text>
        </View>
      ) : (
        <>
          <View
            style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
          >
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
            <Text>Your Bucket</Text>
          </View>

          <Pressable
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              marginLeft: 10,
              marginRight: 10,
              padding: 14,
            }}
          >
            {cart.map((item, index) => (
              <View key={index}>
                <Text>{item.name}</Text>

                <Pressable></Pressable>

                <Text>{item.price * item.quantity}</Text>
              </View>
            ))}
          </Pressable>
        </>
      )}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
