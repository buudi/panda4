import ShellLayout from "./ShellLayout";
import { useState, useContext } from "react";
import ShellContext from "../../contexts/ShellContext";
import UserShell from "../sha-comps/Users-Comps/UserShell";

const Shell = () => {
    const { page, setPage } = useContext(ShellContext);
    if (page === "dashboard") {
        return (<ShellLayout>dashboard</ShellLayout>);
    } else if (page === "users") {
        return (<UserShell />);
    }
};

export default Shell;