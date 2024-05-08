import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

const Welcome = ({ navigation }) => {
  const [api, setApi] = useState();
  return (
    <View>
    </View>
  );
};


const style = StyleSheet.create({
  input: {
    marginTop: 30,
    marginLeft: 30,
    backgroundColor: "#F8EDED",
    borderWidth: 1,
    width: 250,
    borderRadius: 15,
    padding: 10,
    color: "white",
  },
  background: {
    backgroundColor: "#ABDEEE",
    borderRadius: 20,
    width: "auto",
    height: 670,
    marginTop: 75,
  },
  nav: {
    width: "auto",
    backgroundColor: "#FFFFFF",
    height: 85,
    borderRadius:20,
    flexDirection:"row"
  },
  text: {
    marginLeft: 10,
    marginTop: 25,
    fontSize: 20,
    backgroundColor: "#93DEF6",
    width: 120,
    textAlign: "center",
    color: "white",
    height: 40,
    paddingTop: 6,
    borderRadius:20,
  },
});
export default Welcome;
