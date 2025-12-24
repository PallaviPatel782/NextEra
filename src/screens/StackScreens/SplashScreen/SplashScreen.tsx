import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const SplashScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Top Illustration / Image */}
      <Image
        source={require("../../../assets/Images/Splash1.jpg")}
        style={styles.splashImage}
        resizeMode="contain"
      />

      {/* App Text */}
      <Text style={styles.title}>Welcome to NextEra</Text>
      <Text style={styles.subtitle}>
        Manage your brokerage, partners & earnings seamlessly
      </Text>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>Login to your account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupBtn}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.signupText}>Create new broker account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
