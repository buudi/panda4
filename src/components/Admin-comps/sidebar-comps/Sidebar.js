import { useState } from "react";
import { Heading, Center, Box } from "@chakra-ui/react";
import Button from "./Button";
import { FaUsers } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";


const Sidebar = () => {
    const [userActive, setUserActive] = useState(false);
    const [prodActive, setProdActive] = useState(false);
    return (
        <>
            <Center mb={10} mt={6}>
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
                        <ImPriceTags />
                        <Box ml={2}>Products</Box>
                    </Center>
                </Button>
            </Box>
        </>
    );
};

export default Sidebar;