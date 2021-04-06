import { useEffect, useContext } from "react";
import { UserDataContext } from "../../../../contexts/UserDataContext";
import ActionButtons from "./ActionButtons";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Center,
} from "@chakra-ui/react";

const UsersTable = () => {
  const { usersData, setUsersData, setNetworkError, updateComp } = useContext(
    UserDataContext
  );
  useEffect(async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api`)
      .then((res) => {
        setUsersData(res.data);
      })
      .catch((err) => {
        setNetworkError(true);
      });
  }, [updateComp]);

  const returnRole = (user) => {
    if (user.role === 1) return "Admin";
    if (user.role === 2) return "Moderator";
    if (user.role === 3) return "Reviewer";
  };

  return (
    <Center h={250}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th isNumeric>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {usersData ? (
            usersData.map((user) => (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{returnRole(user)}</Td>
                <Th isNumeric>
                  <ActionButtons />
                </Th>
              </Tr>
            ))
          ) : (
            <Spinner />
          )}
        </Tbody>
      </Table>
    </Center>
  );
};

export default UsersTable;
