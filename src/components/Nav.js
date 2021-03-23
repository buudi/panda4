import Link from "next/link";
import { Box, Heading, Flex, Button, Spacer } from "@chakra-ui/react";

const colors = {
  bgColor: "#283747",
  btnBg: "#524D1C",
};

const Nav = () => {
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
      </Flex>
    </Box>
  );
};

export default Nav;
