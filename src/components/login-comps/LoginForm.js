import { useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { LoggedContext } from "../../contexts/LoggedContext";
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
  Spinner
} from "@chakra-ui/react";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [successStatus, setSuccessStatus] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const [spin, setSpin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logged, setLogged } = useContext(LoggedContext);

  const router = useRouter();

  const handleLogin = async (event) => {
    setSpin(true);
    event.preventDefault();
    await axios.post('/api/login', {
      email: email,
      password: password
    })
      .then(res => {
        if (res.data.success === true) {
          const userData = {
            email: res.data.email,
            session_id: res.data.session_id
          };
          localStorage.setItem("user-data", JSON.stringify(userData));
          setSuccessStatus(true);
          setErrorStatus(false);
          setNetworkError(false);
          setLogged(true);
          setEmail("");
          setPassword("");
          setSpin(false);
        } else if (res.data.msg === "falseCreds") {
          setErrorStatus(true);
          setSuccessStatus(false);
          setNetworkError(false);
          setSpin(false);
        } else {
          setNetworkError(true);
          setSuccessStatus(false);
          setErrorStatus(false);
          setSpin(false);

        }
      })
      .catch(err => {
        console.log("axios error");
        setSpin(false);
      });
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
      {networkError && (
        <div>
          <Alert borderRadius="20px" status="error">
            <AlertIcon />
            <span>Failed: Network Error!</span>
          </Alert>
          <br />
        </div>
      )}
      <form onSubmit={handleLogin}>
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
          {spin ? (<Spinner />) : (<>Login</>)}
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
