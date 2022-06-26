import React, { useState } from "react";
import {
  ListItem,
  Box,
  VStack,
  Text,
  AppBar,
  Button,
  TextInput,
  HStack,
  FAB,
  IconButton,
  Stack,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
const todolist = [
  {
    id: "1",
    title: "Doing homework",
    timestart: "2022-06-21T14:00:00",
    timedone: "2022-06-21T21:00:00",
    description: "Do the homework with my friend",
    note: "Call Xuan Minh to help",
    done: false,
  },
  {
    id: "2",
    title: "Doing homework",
    timestart: "2022-06-21T14:00:00",
    timedone: "2022-06-21T21:00:00",
    description: "Do the homework with my friend",
    note: "Call Xuan Minh to help",
    done: false,
  },
  {
    id: "3",
    title: "Doing homework",
    timestart: "2022-06-21T14:00:00",
    timedone: "2022-06-21T21:00:00",
    description: "Do the homework with my friend",
    note: "Call Xuan Minh to help",
    done: false,
  },

  {
    id: "4",
    title: "Doing homework",
    timestart: "2022-06-21T14:00:00",
    timedone: "2022-06-21T21:00:00",
    description: "Do the homework with my friend",
    note: "Call Xuan Minh to help",
    done: false,
  },

  {
    id: "5",
    title: "Doing homework",
    timestart: "2022-06-21T14:00:00",
    timedone: "2022-06-21T21:00:00",
    description: "Do the homework with my friend",
    note: "Call Xuan Minh to help",
    done: false,
  },
];
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
  info: {
    marginLeft: 50,
  },
  header: {
    padding: 15,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: "95%",
  },
  modalView: {
    width: "95%",
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
const TodoList = (props) => {
  const { navigation, route } = props;
  const [idExpand, setIdExpand] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const setExpand = (id) => {
    if (idExpand.includes(id)) {
      setIdExpand(idExpand.filter((x) => x != id));
    } else {
      setIdExpand([...idExpand, id]);
    }
  };
  console.log(route.params.curentUser);
  return (
    <>
      <Modal
        style={{ width: "95%" }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <VStack style={{ marginTop: 20, width: "100%" }} spacing={10}>
              <TextInput
                name="username"
                // value={username}
                onChange={(e) => {}}
                style={styles.input}
                label="Title"
                variant="standard"
              />
              <TextInput
                name="password"
                //value={password}
                style={styles.input}
                label="Description"
                variant="standard"
                onChange={(e) => {}}
              />
              <TextInput
                name="password"
                //value={password}
                style={styles.input}
                label="Note"
                variant="standard"
                onChange={(e) => {}}
              />
            </VStack>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Đóng</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Box style={{ backgroundColor: "#fff", opacity: modalVisible ? 0.4 : 1 }}>
        <AppBar
          leading={(props) => (
            <IconButton
              icon={(props) => <Icon name="menu" {...props} />}
              {...props}
            />
          )}
          title="Your todolist"
        />
        {/* <HStack style={styles.header}>
          <Button
            title="Filter"
            trailing={(props) => <Icon name="send" {...props} />}
          />
          <Button
            title="Add"
            trailing={(props) => (
              <Entypo name="add-to-list" size={24} color="white" />
            )}
            style={{ margin: 16 }}
            onPress={() => setModalVisible(true)}
          />
        </HStack> */}
        {todolist.map((todo) => {
          return (
            <Box style={{ backgroundColor: "#fff" }} key={todo.id}>
              <ListItem
                onPress={() => setExpand(todo.id)}
                title={todo.title}
                leading={<Icon name="inbox" size={24} />}
                trailing={(props) => <Icon name="chevron-right" {...props} />}
                secondaryText={todo.timedone.replace("T", " ")}
              />
              <VStack
                style={{
                  margin: 3,
                  display: idExpand.includes(todo.id) ? "flex" : "none",
                }}
                spacing={20}
              >
                <Text style={styles.info} variant="overline">
                  <b>Description:&nbsp;&nbsp;</b>
                  {todo.description}
                </Text>
                <Text style={styles.info} variant="overline">
                  <b>Note:&nbsp;&nbsp;</b>
                  {todo.note}
                </Text>
                <Text style={styles.info} variant="overline">
                  <b>Time start:&nbsp;&nbsp;</b>
                  {todo.timestart.replace("T", " ")}
                </Text>
              </VStack>
            </Box>
          );
        })}
      </Box>
      <Stack
        fill
        style={{
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: 20,
        }}
        spacing={4}
      >
        <FAB
          style={{ backgroundColor: "#1890ff" }}
          icon={(props) => (
            <Entypo name="add-to-list" size={24} color="white" />
          )}
          visible={true}
        />
      </Stack>
    </>
  );
};

export default TodoList;
