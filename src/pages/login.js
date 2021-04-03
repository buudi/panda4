import { Center } from "@chakra-ui/react";
import Main from "../components/Main";
import LoginForm from "../components/login-comps/LoginForm";
import NewNav from "../components/NewNav";
const Login = () => {
  return (
    <>
      <NewNav />
      <Center h="100vh">
        <LoginForm />
      </Center>
    </>
  );
};

export default Login;
