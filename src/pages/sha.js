import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/sha-comps/Sidebar";
import Shell from "../components/sha-comps/Shell";
import ShellContext from "../contexts/ShellContext";

const sha = () => {
    const [page, setPage] = useState("dashboard");
    return (
        <ShellContext.Provider value={{ page, setPage }}>
            <Grid h="100vh" templateColumns="repeat(16, 1fr)">
                {/* Sidebar */}
                <GridItem colSpan={2} bg="#6A75CA">
                    <Sidebar />
                </GridItem>
                {/* Page Shell */}
                <GridItem colSpan={14} bg="#F6F7FC">
                    <Shell />
                </GridItem>
            </Grid>
        </ShellContext.Provider>
    );
};

export default sha;