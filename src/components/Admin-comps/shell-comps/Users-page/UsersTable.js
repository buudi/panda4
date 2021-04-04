import { useEffect, useState } from "react";
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
    const [usersData, setUsersData] = useState();
    useEffect(async () => {
        await axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/api`)
            .then(res => {
                setUsersData(res.data);
            })
            .catch(err => {
                console.log("network error");
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
