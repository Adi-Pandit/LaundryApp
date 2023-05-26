import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
//import * as Location from "expo-location";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import DressItem from "../components/DressItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../ProductReducer";

const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);

  // const [displayCurrentAddress, setDisplayCurrentAddress] = useState("We are loding your location");
  // const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

  // useEffect(() => {
  //   checkIfLocationEnabled();
  //   getCurrentLocation();
  // }, []);

  // const checkIfLocationEnabled = async () => {
  //   let enabled = await Location.hasServicesEnabledAsync();
  //   if(!enabled) {
  //     Alert.alert(
  //       'Location services are not enabled',
  //       'Please enabled location services',
  //       [
  //         {
  //           text: 'Cancel',
  //           onPress: () => console.log('Cancel Pressed'),
  //           style: 'cancel',
  //         },
  //         {
  //           text: 'OK',
  //           onPress: () => console.log('OK Pressed'),
  //         },
  //       ]
  //     );
  //   } else {
  //     setLocationServiceEnabled(enabled);
  //   }
  // }

  // const getCurrentLocation = async () => {
  //   const {status} = await Location.getBackgroundPermissionsAsync();

  //   if(status !== "granted") {
  //     Alert.alert(
  //       'Permission Denied',
  //       'Allow the app to use location services',
  //       [
  //         {
  //           text: 'Cancel',
  //           onPress: () => console.log('Cancel Pressed'),
  //           style: 'cancel',
  //         },
  //         {
  //           text: 'OK',
  //           onPress: () => console.log('OK Pressed')
  //         },
  //       ]
  //     );
  //   }

  //   const {coordinates} = await Location.getCurrentPositionAsync();
  //   console.log(coordinates);
  //   if(coordinates) {
  //     const {latitude, longitude} = coordinates;

  //     let response = await Location.reverseGeocodeAsync({latitude, longitude});
  //     console.log(response);
  //     for(let item in response) {
  //       let address = `${item.name} ${item.city} ${item.postalCode}`;
  //       setDisplayCurrentAddress(address);
  //     }
  //   }
  // }

  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;

    const fetchProducts = () => {
      services.map((service) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);
  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F0F0F0" }}>
        <ScrollView>
          {/* Location and Profile */}
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          >
            <MaterialIcons name="location-on" size={30} color="#FD5C63" />
            <View>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
              <Text>Dange Chowk, Thergaon 411033</Text>
            </View>

            <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={{
                  uri: "https://wallpapers-clan.com/wp-content/uploads/2023/02/anime-boy-black-pfp-33.jpg",
                }}
              />
            </Pressable>
          </View>

          {/* Search Bar */}
          <View
            style={{
              padding: 10,
              margin: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 0.8,
              borderColor: "#C0C0C0",
              borderRadius: 7,
            }}
          >
            <TextInput
              style={{ width: 175 }}
              placeholder="Search for items or more"
            ></TextInput>
            <Feather name="search" size={24} color="#FD5C63" />
          </View>

          {/* Image Carousel */}
          <Carousel />

          {/* Services Component */}
          <Services />

          {/* Render all the products */}
          {product.map((item, index) => (
            <DressItem item={item} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            padding: 10,
            marginBottom: 30,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              {cart.length} items | $ {total}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "white",
                marginVertical: 6,
              }}
            >
              extra charges might apply
            </Text>
          </View>

          <Pressable>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              Proceed to pickup
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

//  get ColorPropType(): $FlowFixMe {
//     return require('deprecated-react-native-prop-types').ColorPropType;
//   },

//   get EdgeInsetsPropType(): $FlowFixMe {
//     return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
//   },

//   get PointPropType(): $FlowFixMe {
//     return require('deprecated-react-native-prop-types').PointPropType;
//   },

//   get ViewPropTypes(): $FlowFixMe {
//     return require('deprecated-react-native-prop-types').ViewPropTypes;
//   },
