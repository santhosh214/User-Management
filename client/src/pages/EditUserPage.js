import React from "react";
import EditUser from "../components/EditUser";
import { useNavigate } from "react-router-dom";

const EditUserPage = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/home/list");
  };

  return <EditUser onCancel={handleCancel} />;
};

export default EditUserPage;
