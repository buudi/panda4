import { useState } from "react";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Admin-comps/sidebar-comps/Sidebar";
import Shell from "../components/Admin-comps/shell-comps/Shell";
import { PageContext } from "../contexts/PageContext";

const colors = {
    bg: "#3D41D7"
};

const Admin = () => {
    const [page, setPage] = useState("users");
    return (
        <PageContext.Provider value={{ page, setPage }}>
            <SimpleGrid mt={4} columns={13} spacing={10}>
                <GridItem
                    ml={2}
                    bg={colors.bg}
                    height="97vh"
                    borderRadius={20}
                    boxShadow="dark-lg"
                    colSpan={2}
                >
                    <Sidebar />
                </GridItem>
                <GridItem
                    mr={10}
                    height="97vh"
                    colSpan={11}
                >
                    <Shell />
                </GridItem>
            </SimpleGrid>
        </PageContext.Provider>
    );
};

export default Admin;