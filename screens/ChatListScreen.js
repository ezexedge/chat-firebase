import { View, Text, StyleSheet, Button } from "react-native";

const ChatListScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>ChatList Screen</Text>
      <Button
        title="pruebaa"
        onPress={() => props.navigation.navigate("ChatScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatListScreen;
