import { useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Heading, Flex, Button, Spacer, ColorModeScript } from "@chakra-ui/react";
import { LoggedContext } from "../contexts/LoggedContext";
import axios from "axios";

const colors = {
  bgColor: "white",
  btnBg: "purple.700",
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
    <Box bg={colors.bgColor} h="60px" w="100%" p={4} color={colors.btnBg}>
      <Flex>
        <Box p="2">
          <Link href="/">
            <a>
              <Heading size="sm">Panda CMS</Heading>
            </a>
          </Link>
        </Box>
        <Spacer />
        {logged ? (
          <Box>
            <Button
              size="sm"
              color={colors.btnBg}
              border={0}
              _hover={{ background: "#6A75CA", color: "white" }}
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
                size="sm"
                color={colors.btnBg}
                border={0}
                _hover={{ background: "#6A75CA", color: "white" }}
                mr={4}
                variant="outline"
              >
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" bg="#6A75CA" color="white">
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
