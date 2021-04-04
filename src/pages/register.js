import Main from "../components/Main";
import RegisterForm from "../components/register-comps/RegisterForm";
import { Center } from "@chakra-ui/react";
import NewNav from "../components/NewNav";

const Register = () => {
  return (
    <>
      <NewNav />
      <Center h="100vh">
        <RegisterForm />
      </Center>
    </>
  );
};

export default Register;
