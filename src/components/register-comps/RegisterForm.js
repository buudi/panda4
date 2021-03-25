import { useState } from "react";
import axios from "axios";
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
  Spinner,
  Alert,
  AlertIcon,
  Link,
} from "@chakra-ui/react";

const RegisterForm = () => {
  const [show, setShow] = useState(false);
  const [spin, setSpin] = useState(false);
  const [alertCard, setAlertCard] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSpin(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        name: name,
        email: email,
        role: parseInt(role),
        password: password,
      })
      .then((res) => {
        const daString = res.data;
        if (
          daString.indexOf("duplicate key value violates unique constraint") !=
          -1
        ) {
          setErrorStatus(true);
        }
        setName("");
        setEmail("");
        setRole("");
        setPassword("");
        setSpin(false);
        setAlertCard(true);
      })
      .catch((err) => console.log(`axios error: ${err}`));
  };
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
      {alertCard &&
        (errorStatus ? (
          <div>
            <Alert borderRadius="20px" status="error">
              <AlertIcon />
              <span>This email already exists!</span>
            </Alert>
            <br />
          </div>
        ) : (
          <div>
            <Alert borderRadius="20px" status="success">
              <AlertIcon />
              <span>
                Registred!{" "}
                <Link color="#6656CA" href="/login">
                  Log in here
                </Link>
              </span>
            </Alert>
            <br />
          </div>
        ))}

      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            bg="white"
            placeholder="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel mt={3}>Email</FormLabel>
          <Input
            bg="white"
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel mt={3}>Role</FormLabel>
          <Select
            bg="white"
            placeholder="Select role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="1">Admin</option>
            <option value="2">Moderator</option>
            <option value="3">Reviewer</option>
          </Select>
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

        {spin ? (
          <Button type="submit" mt={8} colorScheme="blue">
            <Spinner />
          </Button>
        ) : (
          <Button type="submit" mt={8} colorScheme="blue">
            Register
          </Button>
        )}
      </form>
    </Box>
  );
};

export default RegisterForm;
