import { useState } from "react";
import { Alert, AlertIcon, Box, Grid, GridItem, SimpleGrid, Button } from "@chakra-ui/react";
import UsersTable from "./UsersTable";
import CreateButton from "./CreateButton";
import { UserDataContext } from "../../../../contexts/UserDataContext";

const Users = () => {
    const [usersData, setUsersData] = useState();
    const [networkError, setNetworkError] = useState(false);
    return (
        <UserDataContext.Provider value={{ usersData, setUsersData, setNetworkError }}>
            <Box>
                {networkError && (<Alert borderRadius={20} mt={6} status="warning">
                    <AlertIcon />
                    Network Error! cannot load data.
                </Alert>)}
                <Grid
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(4, 1fr)"
                    gap={4}
                >
                    <CreateButton />
                    <GridItem colSpan={4}>
                        <UsersTable />
                    </GridItem>
                </Grid>
            </Box >
        </UserDataContext.Provider >

    );
};

export default Users;