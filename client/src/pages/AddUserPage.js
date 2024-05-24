import React from "react";
import AddUser from "../components/AddUser";
import { useNavigate } from "react-router-dom";

const AddUserPage = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/home/list");
  };

  return <AddUser onCancel={handleCancel} />;
};

export default AddUserPage;
