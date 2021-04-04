import { useState, useContext } from "react";
import { Box } from "@chakra-ui/react";
import Users from "./Users-page/Users";
import Products from "./products-page/Products";
import { PageContext } from "../../../contexts/PageContext";

const ToRender = () => {
    const { page, setPage } = useContext(PageContext);
    if (page === "users") {
        return (<Users />);
    } else if (page === "products") {
        return (<Products />);
    }
};

const ShellMain = () => {
    return (
        <Box w="100%" h="80vh" borderRadius={20}>
            <ToRender />
        </Box>
    );
};

export default ShellMain;