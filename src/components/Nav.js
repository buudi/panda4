import { useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Heading, Flex, Button, Spacer } from "@chakra-ui/react";
import { LoggedContext } from "../contexts/LoggedContext";
import axios from "axios";

const colors = {
  bgColor: "#283747",
  btnBg: "#524D1C",
};


const Nav = () => {
  const { logged, setLogged } = useContext(LoggedContext);
  useEffect(async () => {
    const userData = localStorage.getItem("user-data");
    await axios
      .post('/api/check', {
        data: userData
      })
      .then(res => {
        if (res.data.success === true) {
          setLogged(true);
        } else {
          setLogged(false);
        }
      })
      .catch(err => {
        setLogged(false);
      });
  }, [logged]);

  const router = useRouter();

  const handleLogout = async () => {
    await axios
      .get('/api/logout')
      .then(res => {
        if (res.data.success === true) {
          localStorage.removeItem("user-data");
          setLogged(false);
          router.push('/');
        }
      })
      .catch(err => {
        console.log('you should not be able to see this');
      });
  };
  return (
    <Box bg={colors.bgColor} w="100%" p={4} color="white">
      <Flex>
        <Box p="2">
          <Link href="/">
            <a>
              <Heading size="md">Panda CMS</Heading>
            </a>
          </Link>
        </Box>
        <Spacer />
        {logged ? (
          <Box>
            <Button
              color="#D6C21D"
              border={0}
              _hover={{ background: "#D6C21D", color: colors.btnBg }}
              mr={4}
              variant="outline"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        ) : (
          <Box>
            <Link href="/login">
              <Button
                color="#D6C21D"
                border={0}
                _hover={{ background: "#D6C21D", color: colors.btnBg }}
                mr={4}
                variant="outline"
              >
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button bg="#D6C21D" color={colors.btnBg}>
                Register
              </Button>
            </Link>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Nav;
