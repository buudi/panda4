import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/sha-comps/Sidebar";
import Shell from "../components/sha-comps/Shell";
import ShellContext from "../contexts/ShellContext";

const sha = () => {
    const [page, setPage] = useState("dashboard");
    return (
        <ShellContext.Provider value={{ page, setPage }}>
            <Grid h="100vh" templateColumns="repeat(20, 1fr)">
                {/* Sidebar */}
                <GridItem colSpan={2} bg="blue.700">
                    <Sidebar />
                </GridItem>
                {/* Page Shell */}
                <GridItem colSpan={18} bg="#F0F5F9">
                    <Shell />
                </GridItem>
            </Grid>
        </ShellContext.Provider>
    );
};

export default sha;