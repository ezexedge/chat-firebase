import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../assets/background.jpg";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import colors from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import { useCallback, useState } from "react";
const ChatScreen = (props) => {
  const [messageText, setMessageText] = useState("");
  const sendMessage = useCallback(() => {
    setMessageText("");
  }, [messageText]);
  console.log("msg text", messageText);
  return (
    <SafeAreaView edges={["right", "left", "bottom"]} style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={100}
      >
        <ImageBackground
          style={styles.backgroundImage}
          source={Background}
        ></ImageBackground>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() => console.log("press")}
          >
            <AntDesign name="plus" size={24} color={colors.blue} />
          </TouchableOpacity>

          <TextInput
            style={styles.textbox}
            value={messageText}
            onChangeText={(text) => setMessageText(text)}
            onSubmitEditing={sendMessage}
          />

          {messageText === "" && (
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => console.log("press")}
            >
              <Feather name="camera" size={24} color={colors.blue} />
            </TouchableOpacity>
          )}
          {messageText !== "" && (
            <TouchableOpacity
              style={{ ...styles.mediaButton, ...styles.sendButton }}
              onPress={sendMessage}
            >
              <FontAwesome name="send-o" size={20} color={"white"} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  mediaButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 5,
  },
});

export default ChatScreen;
