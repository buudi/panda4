import { useState, useContext } from "react";
import { Heading, Center, Box } from "@chakra-ui/react";
import Button from "./Button";
import { FaUsers } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { PageContext } from "../../../contexts/PageContext";

const Sidebar = () => {
    const { page, setPage } = useContext(PageContext);
    const [userActive, setUserActive] = useState(true);
    const [prodActive, setProdActive] = useState(false);

    const setPageUser = () => {
        setPage("users");
        setUserActive(true);
        setProdActive(false);
    };
    const setPageProducts = () => {
        setPage("products");
        setProdActive(true);
        setUserActive(false);
    };

    return (
        <>
            <Center mb={10} mt={6}>
                <Heading fontSize="2xl" color="white">Panda CMS</Heading>
            </Center>
            <Box onClick={setPageUser} mt={4}>
                <Button active={userActive}>
                    <Center>
                        <FaUsers />
                        <Box ml={2}>Users</Box>
                    </Center>
                </Button>
            </Box>
            <Box onClick={setPageProducts} mt={4}>
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