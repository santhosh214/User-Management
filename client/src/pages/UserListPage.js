import React from "react";
import UserGrid from "../components/UserGrid";
import { useNavigate } from "react-router-dom";

const UserListPage = () => {
  const navigate = useNavigate();

  const handleEditUser = () => {
    navigate("/home/edit");
  };

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];

  return <UserGrid users={users} onEdit={handleEditUser} />;
};

export default UserListPage;
