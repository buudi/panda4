import { Box, SimpleGrid, GridItem, Text } from "@chakra-ui/react";
import styles from "../../../styles/Home.module.css";

const ShellNav = () => {
    return (
        <SimpleGrid w="100%" h="120px" columns={6}>
            <GridItem colSpan={4}>
                <Box w="100%" h="100%" bg="blue.100">
                    <div className={styles.apply_font}>
                        <Text pt={4}>Hello Abdullah, Welcome Back</Text>
                        <Text mb={4} fontWeight="hairline" fontSize="5xl">Your Dashboard is updated</Text>
                    </div>
                </Box>
            </GridItem>
            <GridItem colSpan={2}>
                <Box w="100%" h="100%" bg="teal.100">

                </Box>
            </GridItem>
        </SimpleGrid>
    );
};

export default ShellNav;