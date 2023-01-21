import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
const SignupForm = () => {
  const inputChangeHandler = (id, text) => {
    console.log("here id", id);
    console.log("here text", text);
  };

  return (
    <>
      <Input
        id="firstName"
        label="first name"
        onInputChanged={inputChangeHandler}
      />
      <Input
        id="lastName"
        label="last name"
        onInputChanged={inputChangeHandler}
      />
      <Input id="email" label="email" onInputChanged={inputChangeHandler} />
      <Input
        id="password"
        label="password"
        onInputChanged={inputChangeHandler}
      />
      <SubmitButton
        disabled={false}
        title={"Sign up"}
        onPress={() => console.warn("pepaaaa")}
      />
    </>
  );
};

export default SignupForm;
