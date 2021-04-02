import ShellLayout from "./ShellLayout";
import { useState, useContext } from "react";
import ShellContext from "../../contexts/ShellContext";

const Shell = () => {
    const { page, setPage } = useContext(ShellContext);
    if (page === "dashboard") {
        return (<ShellLayout>dashboard</ShellLayout>);
    } else if (page === "users") {
        return (<ShellLayout>Users</ShellLayout>);
    }
};

export default Shell;