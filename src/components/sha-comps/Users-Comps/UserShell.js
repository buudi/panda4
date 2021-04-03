import { Box, Heading, Center } from "@chakra-ui/react";

const UserShell = () => {
    return (
        <Box bg="purple.50" h="100vh">
            <Box m={6} bg="purple.100" borderRadius="10px" h="100vh">
                <Center><Heading>USERS SHELL</Heading></Center>

            </Box>
        </Box>
    );

};

export default UserShell;