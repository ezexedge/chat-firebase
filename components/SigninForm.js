import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
const SigninForm = () => {
  return (
    <>
      <Input label="email" />
      <Input label="password" />
      <SubmitButton
        disabled={false}
        title={"Sign in"}
        onPress={() => console.warn("pepaaaa")}
      />
    </>
  );
};

export default SigninForm;
