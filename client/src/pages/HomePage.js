import React from "react";
import Sidebar from "../components/Sidebar";
import { CssBaseline, Container } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleShowUsers = () => {
    navigate("/home/list");
  };

  const handleAddUser = () => {
    navigate("/home/add");
  };

  const handleLogOut = () => {
    navigate("/login");
  };

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar
        onShowUsers={handleShowUsers}
        onAddUser={handleAddUser}
        onLogout={handleLogOut}
      />
      <Container style={{ marginLeft: 220, padding: 16 }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default HomePage;
