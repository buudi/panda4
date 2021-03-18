import { useState } from "react";
import {
  Input,
  Heading,
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
  Select,
} from "@chakra-ui/react";

const LoginForm = () => {
  const [show, setShow] = useState(false);
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
      <FormControl isRequired>
        <FormLabel>email</FormLabel>
        <Input bg="white" type="email" placeholder="email"></Input>
        <FormLabel mt={3}>password</FormLabel>
        <InputGroup size="md">
          <Input
            bg="white"
            type={show ? "text" : "password"}
            placeholder="Enter password"
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
    </Box>
  );
};

export default LoginForm;
