import {
  Box,
  SimpleGrid,
  GridItem,
  Text,
  Avatar,
  Center,
} from "@chakra-ui/react";
import { BsBell } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import styles from "../../../styles/Home.module.css";

const ShellNav = () => {
  return (
    <SimpleGrid w="100%" h="120px" columns={6}>
      <GridItem colSpan={4}>
        <Box w="100%" h="100%">
          <div className={styles.apply_font}>
            <Text pt={4}>Hello Abdullah, Welcome Back</Text>
            <Text mb={4} fontWeight="hairline" fontSize="5xl">
              Your Dashboard is updated
            </Text>
          </div>
        </Box>
      </GridItem>
      <GridItem colSpan={2}>
        <Box w="100%" h="100%">
          <SimpleGrid columns={20}>
            <GridItem colSpan={12}></GridItem>
            <GridItem mt={10} colSpan={8}>
              <SimpleGrid columns={9}>
                <GridItem m={3} colSpan={3}>
                  <Box>
                    <BsBell />
                  </Box>
                </GridItem>
                <GridItem m={3} colSpan={3}>
                  <Box>
                    <FiSettings />
                  </Box>
                </GridItem>
                <GridItem colSpan={3}>
                  <Box>
                    <Avatar src="https://bit.ly/broken-link" />
                  </Box>
                </GridItem>
              </SimpleGrid>
            </GridItem>
          </SimpleGrid>
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default ShellNav;
