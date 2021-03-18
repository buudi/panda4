import { Center } from "@chakra-ui/react";
import Main from "../components/Main";
import LoginForm from "../components/login-comps/LoginForm";
const Login = () => {
  return (
    <>
      <Main />
      <Center h="100vh">
        <LoginForm />
      </Center>
    </>
  );
};

export default Login;
