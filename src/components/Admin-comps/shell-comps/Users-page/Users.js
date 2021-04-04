import { useState } from "react";
import { Center, Alert, AlertIcon } from "@chakra-ui/react";
import UsersTable from "./UsersTable";
import { UserDataContext } from "../../../../contexts/UserDataContext";

const Users = () => {
    const [usersData, setUsersData] = useState();
    const [networkError, setNetworkError] = useState(false);
    return (
        <UserDataContext.Provider value={{ usersData, setUsersData, setNetworkError }}>
            {networkError && (<Alert borderRadius={20} mt={6} status="warning">
                <AlertIcon />
                Network Error! cannot load data.
            </Alert>)}


            <Center mb={12} h="80vh">
                <UsersTable />
            </Center>
        </UserDataContext.Provider>

    );
};

export default Users;