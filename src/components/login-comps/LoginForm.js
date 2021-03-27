import { useState } from "react";
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
} from "@chakra-ui/react";

const LoginForm = () => {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setEmail("");
        setPassword("");
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
