import React, { useState } from "react";
import {
  Stack,
  TextInput,
  IconButton,
  Avatar,
  VStack,
  Button,
  Text,
  HStack,
} from "@react-native-material/core";

import { StyleSheet, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 4,
    paddingTop: 75,
    height: "100vh",
  },
  input: {},
});
const LoginPage = (props) => {
  const { setIsLoggedIn, setCurentUser } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const Signin = () => {
    if (username == "test" && password == "test") {
      setIsLoggedIn(true);
      setCurentUser(username);
    } else {
      setHasError(true);
    }
  };
  return (
    <View>
      {/* <Stack fill center>
        <Button loading disabled />
      </Stack> */}
      <Stack spacing={2} style={styles.container}>
        <Avatar
          icon={(props) => (
            <FontAwesome5
              name="react"
              style={{ color: "#86bfe5" }}
              {...props}
            />
          )}
          style={{
            backgroundColor: "#d2dff2",
          }}
          size={200}
        />
        <Text
          style={{ marginTop: 15, color: "#d2dff2", fontWeight: "700" }}
          variant="h5"
        >
          Login
        </Text>
        <VStack style={{ marginTop: 20, width: "80%" }} spacing={10}>
          <TextInput
            name="username"
            value={username}
            onChange={(e) => {
              setHasError(false);
              setUsername(e.target.value);
            }}
            style={styles.input}
            label="Username"
            variant="standard"
            trailing={(props) => (
              <IconButton
                icon={(props) => <AntDesign name="user" {...props} />}
                {...props}
              />
            )}
          />
          <TextInput
            name="password"
            value={password}
            style={styles.input}
            label="Password"
            variant="standard"
            onChange={(e) => {
              setHasError(false);
              setPassword(e.target.value);
            }}
            trailing={(props) => (
              <IconButton
                icon={(props) => <Icon name="eye" {...props} />}
                {...props}
              />
            )}
          />
          <Button
            style={{ backgroundColor: "#56d5fc", padding: 5, marginTop: 15 }}
            onPress={Signin}
            title="Sign in"
          />
        </VStack>
        <Text
          variant="caption"
          style={{
            color: "red",
            marginTop: 10,
            display: hasError ? "flex" : "none",
          }}
        >
          Wrong username or password !
        </Text>
        <HStack
          style={{
            marginTop: 50,
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Text variant="overline">Forgot Password</Text>
          <Text variant="overline">Register</Text>
        </HStack>
      </Stack>
    </View>
  );
};

export default LoginPage;
