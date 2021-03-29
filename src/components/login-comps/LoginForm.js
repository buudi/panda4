import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {
  Input,
  Heading,
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [successStatus, setSuccessStatus] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setEmail("");
        setPassword("");

        if (res.data.res === "error") {
          setErrorStatus(true);
          setSuccessStatus(false);
        } else {
          setSuccessStatus(true);
          setErrorStatus(false);
          router.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box
      bg="#F7F9F9"
      boxShadow="md"
      width="25%"
      padding={8}
      borderRadius="20px"
    >
      <Heading>Login:</Heading>
      <br />
      {successStatus && (
        <div>
          <Alert borderRadius="20px" status="success">
            <AlertIcon />
            <span>Logged In!</span>
          </Alert>
          <br />
        </div>
      )}
      {errorStatus && (
        <div>
          <Alert borderRadius="20px" status="error">
            <AlertIcon />
            <span>Email or password Incorrect</span>
          </Alert>
          <br />
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>email</FormLabel>
          <Input
            bg="white"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel mt={3}>password</FormLabel>
          <InputGroup size="md">
            <Input
              bg="white"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button type="submit" mt={6} colorScheme="blue">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
