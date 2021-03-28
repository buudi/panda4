import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Box, Heading, Flex, Button, Spacer } from "@chakra-ui/react";

const colors = {
  bgColor: "#283747",
  btnBg: "#524D1C",
};

const Nav = () => {
  const [logged, setLogged] = useState(false);

  useEffect(async () => {
    await axios
      .get("/api/check")
      .then((res) => {
        if (res.data.isLogged) {
          setLogged(true);
        } else {
          setLogged(false);
        }
      })
      .catch((err) => {
        console.log(`axios nav error: ${err}`);
      });
  }, [logged]);

  const handleLogout = async () => {
    await axios
      .get("/api/logout")
      .then((res) => {
        if (res.data.success) {
          setLogged(false);
        }
      })
      .catch((err) => console.log(`axios handle Logout error: ${err}`));
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
