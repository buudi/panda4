import { useEffect, useState, useContext } from "react";
import { UserDataContext } from "../../../../contexts/UserDataContext";
import axios from "axios";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Spinner,
} from "@chakra-ui/react";


const UsersTable = () => {
    const { usersData, setUsersData, setNetworkError } = useContext(UserDataContext);
    useEffect(async () => {
        await axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/api`)
            .then(res => {
                setUsersData(res.data);
            })
            .catch(err => {
                setNetworkError(true);
            });
    }, []);

    return (
        <>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th isNumeric>Role</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {usersData ? (usersData.map(user => (
                        <Tr key={user.id}>
                            <Td>{user.name}</Td>
                            <Td>{user.email}</Td>
                            <Td isNumeric>{user.role}</Td>
                        </Tr>
                    ))) : (<Spinner />)}
                </Tbody>
            </Table>
        </>
    );
};

export default UsersTable;
