import Button from "./Button";
import { useContext, useState } from "react";
import ShellContext from "../../contexts/ShellContext";

const Sidebar = () => {
    const { page, setPage } = useContext(ShellContext);
    const [dash, setdash] = useState(false);
    const [users, setUsers] = useState(false);
    return (
        <>
            {dash ? (
                <Button active >Dashboard</Button>
            ) : (
                <Button onClick={() => {
                    setPage("dashboard");
                    setdash(true);
                    setUsers(false);
                }}>Dashboard</Button>
            )}

            {users ? (
                <Button active>Users</Button>
            ) : (
                <Button onClick={() => {
                    setPage("users");
                    setUsers(true);
                    setdash(false);
                }}>Users</Button>
            )}
        </>
    );
};

export default Sidebar;