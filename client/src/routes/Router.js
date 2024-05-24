import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  LoginPage,
  HomePage,
  AddUserPage,
  EditUserPage,
  UserListPage,
} from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/home" element={<HomePage />}>
        <Route path="list" element={<UserListPage />} />
        <Route path="*" element={<Navigate to="/list" replace />} />
        <Route path="add" element={<AddUserPage />} />
        <Route path="edit" element={<EditUserPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default Router;
