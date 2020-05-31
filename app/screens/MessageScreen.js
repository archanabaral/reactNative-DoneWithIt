import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screen from "../components/Screen";
const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/photo.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/photo.jpg"),
  },
];
const MessageScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessage = messages.filter((m) => m.id !== message.id);
    setMessages(newMessage);
  
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("messege selected")}
            
            renderRightActions={() => {
              console.log("hello")
              //<ListItemDeleteAction onPress={() => handleDelete(item)} />
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/photo.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
