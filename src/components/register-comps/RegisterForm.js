import { useState } from "react";
import {
  Input,
  Heading,
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  Button,
  InputRightElement,
  Select,
} from "@chakra-ui/react";

const RegisterForm = () => {
  const [show, setShow] = useState(false);
  return (
    <Box
      bg="#F7F9F9"
      boxShadow="md"
      width="35%"
      padding={8}
      borderRadius="20px"
    >
      <Heading>Register:</Heading>
      <br />
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input bg="white" placeholder="name"></Input>

        <FormLabel mt={3}>Email</FormLabel>
        <Input bg="white" placeholder="email"></Input>
        <FormLabel mt={3}>Role</FormLabel>
        <Select bg="white" placeholder="Select role">
          <option value="1">Admin</option>
          <option value="2">Moderator</option>
          <option value="3">Reviewer</option>
        </Select>
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
      <Button type="submit" mt={8} colorScheme="blue">
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;
