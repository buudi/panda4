import { Box, Center, Heading } from "@chakra-ui/react";

const ShellLayout = ({ children }) => {
    return (
        <Box m={6} h="85vh" bg="#E9D8FD" >
            <Center h="100%">
                <Heading>{children}</Heading>
            </Center>
        </Box>
    );
};

export default ShellLayout;