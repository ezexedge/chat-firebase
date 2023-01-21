import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../constants/colors";

const Input = (props) => {
  const onChangeText = (text) => {
    props.onInputChanged(props.id, text);
  };

  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={onChangeText} />
      </View>
      {props.errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    marginVertical: 0,
    fontFamily: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.3,
    color: colors.textColor,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 2,
    backgroundColor: colors.nearlyWhite,
  },
  input: {
    color: colors.textColor,
    flex: 1,
    fontFamily: "regular",
    letterSpacing: 0.3,
    paddingTop: 0,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "red",
    fontSize: 13,
    fontFamily: "bold",
    letterSpacing: 0.3,
  },
});

export default Input;
