import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import PageContainer from "../components/PageContainer";
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";
import SubmitButton from "../components/SubmitButton";
import colors from "../constants/colors";

import logo from "../assets/logo.png";

const AuthScreen = (props) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={logo} />
          </View>

          {isSignup ? <SignupForm /> : <SigninForm />}

          <TouchableOpacity
            onPress={() => setIsSignup((prevState) => !prevState)}
            style={styles.linkContainer}
          >
            <View style={{ flexDirection: "row" }}>
              <Text>Switch to </Text>
              <Text style={styles.link}>{`${
                isSignup ? " sign in" : " sign up"
              }`}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  link: {
    color: colors.blue,
    letterSpacing: 0.3,
  },
  image: {
    width: "80%",
    resizeMode: "contain",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AuthScreen;
