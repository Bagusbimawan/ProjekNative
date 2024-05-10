import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Myimage from "../Login/assets/course.png";
import { Button } from "react-native-paper";
import { useAuth } from "../../contexts/auth";
import { users } from "../../data/user";

const Login = () => {
  const InputNama = React.useRef("");
  const InputPassword = React.useRef("");
  const { login } = useAuth();

  const OnLogin = () => {
    const IsFound = users.find(
      (e) => e.nama === InputNama.current && e.password === InputPassword
    );
    login()
  };
  return (
    <>
      <ScrollView>
        <View>
          <Text style={style.text1}>Sign-in</Text>
          <Image source={Myimage} style={style.image} />
        </View>
        <View>
          <Text style={style.text2}>Email/Phone Number</Text>
          <TextInput style={style.input} />
        </View>
        <View>
          <Text style={style.text2}>Password</Text>
          <TextInput style={style.input} secureTextEntry />
        </View>
        <View>
          <TouchableOpacity>
            <Button
              style={{
                backgroundColor: "#93DEF6",
                width: "80%",
                marginLeft: 40,
                marginTop: 30,
                height: 50,
                borderWidth: 4,
              }}
              textColor="white"
              onPress={OnLogin}
            >
              Get started
            </Button>
          </TouchableOpacity>
        </View>
        <Text style={{ textAlign: "center", marginTop: 10 }}>Or</Text>
        <View>
          <TouchableOpacity>
            <Button
              style={{
                borderWidth: 1,
                width: "80%",
                marginLeft: 40,
                marginTop: 10,
                height: 50,
                backgroundColor: "white",
                borderColor: "black",
              }}
              textColor="black"
              mode="outlined"
            >
              Using social media accounts
            </Button>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  text1: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 60,
    fontWeight: "600",
  },
  image: {
    width: 260,
    height: 250,
    marginLeft: 55,
  },
  text2: {
    fontSize: 17,
    marginLeft: 40,
    marginTop: 18,
  },
  input: {
    width: "80%",
    height: 55,
    marginLeft: 35,
    marginTop: 10,
    borderRadius: 15,
    color: "black",
    fontSize: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
export default Login;
