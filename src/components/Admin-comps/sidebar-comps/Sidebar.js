import { useState } from "react";
import { Heading, Center, Box } from "@chakra-ui/react";
import Button from "./Button";
import { FaUsers } from "react-icons/fa";

const Sidebar = () => {
    const [userActive, setUserActive] = useState(false);
    const [prodActive, setProdActive] = useState(false);
    return (
        <>
            <Center mt={6}>
                <Heading fontSize="2xl" color="white">Panda CMS</Heading>
            </Center>
            <Box onClick={() => setUserActive(!userActive)} mt={4}>
                <Button active={userActive}>
                    <Center>
                        <FaUsers />
                        <Box ml={2}>Users</Box>
                    </Center>
                </Button>
            </Box>
            <Box onClick={() => setProdActive(!prodActive)} mt={4}>
                <Button active={prodActive}>
                    <Center>
                        <FaUsers />
                        <Box ml={2}>Products</Box>
                    </Center>
                </Button>
            </Box>
        </>
    );
};

export default Sidebar;