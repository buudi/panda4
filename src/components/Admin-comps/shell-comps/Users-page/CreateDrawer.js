import { useState } from "react";
import axios from "axios";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  FormLabel,
  Select,
  FormControl,
  Alert,
  AlertIcon,
  Link,
} from "@chakra-ui/react";

function CreateDrawer({ isOpen, firstField, onClose, onOpen }) {
  const [show, setShow] = useState(false);
  const [spin, setSpin] = useState(false);
  const [alertCard, setAlertCard] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [networkError, setNetworkError] = useState(false);

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
          setAlertCard(true);
          setErrorStatus(true);
        } else {
          setAlertCard(true);
          setErrorStatus(false);
        }
        setName("");
        setEmail("");
        setRole("");
        setPassword("");
        setSpin(false);
      })
      .catch((err) => {
        setAlertCard(true);
        setNetworkError(true);
        setSpin(false);
      });
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay>
          {(() => {
            if (alertCard) {
              if (networkError) {
                return (
                  <div>
                    <Alert borderRadius="20px" status="error">
                      <AlertIcon />
                      <span>networkError! Try Again Later</span>
                    </Alert>
                    <br />
                  </div>
                );
              }
              if (errorStatus) {
                return (
                  <div>
                    <Alert borderRadius="20px" status="error">
                      <AlertIcon />
                      <span>This email already exists!</span>
                    </Alert>
                    <br />
                  </div>
                );
              } else if (!errorStatus) {
                return (
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
                );
              }
            }
          })()}

          <form onSubmit={handleSubmit}>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                Create a new user
              </DrawerHeader>
              <DrawerBody>
                <Stack spacing="24px">
                  <FormControl mt={4} isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      ref={firstField}
                      placeholder="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="username">Email</FormLabel>
                    <Input
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Role</FormLabel>
                    <Select
                      id="owner"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="Select value"
                    >
                      <option value="1">Admin</option>
                      <option value="2">Moderator</option>
                      <option value="3">Reviewer</option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel htmlFor="username">Password</FormLabel>
                    <InputGroup size="md">
                      <Input
                        bg="white"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          onClick={() => setShow(!show)}
                        >
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                </Stack>
              </DrawerBody>

              <DrawerFooter borderTopWidth="1px">
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" colorScheme="blue">
                  Create User
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </form>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default CreateDrawer;
