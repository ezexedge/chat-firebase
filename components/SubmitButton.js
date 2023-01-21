import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../constants/colors";

const SubmitButton = (props) => {
  const enabledBgColor = colors.primary;
  const disabledBgColor = colors.lightGrey;
  const bgcolor = props.disabled ? disabledBgColor : enabledBgColor;

  return (
    <TouchableOpacity
      style={{ ...styles.button, ...{ backgroundColor: bgcolor } }}
      onPress={props.disabled ? () => {} : props.onPress}
    >
      <Text style={{ color: props.disabled ? "grey" : "white" }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 30,
  },
});

export default SubmitButton;
