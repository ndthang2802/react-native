import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [curentUser, setCurentUser] = useState("test");

  return (
    <View style={styles.container}>
      {!isLoggedIn ? (
        <LoginPage
          setIsLoggedIn={setIsLoggedIn}
          setCurentUser={setCurentUser}
        />
      ) : (
        <MainPage curentUser={curentUser} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313c50",
  },
});
