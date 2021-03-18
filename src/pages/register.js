import Main from "../components/Main";
import RegisterForm from "../components/register-comps/RegisterForm";
import { Center } from "@chakra-ui/react";

const Register = () => {
  return (
    <>
      <Main />
      <Center h="100vh">
        <RegisterForm />
      </Center>
    </>
  );
};

export default Register;
