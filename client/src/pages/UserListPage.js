import React, { useEffect } from "react";
import UserGrid from "../components/UserGrid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { fetchUsers } from "../api/userReducer";
import { getUser } from "../api/userReducer";
import axios from "axios";

const UserListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers1 = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/users");
        dispatch(getUser(response.data));
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchUsers1();
  });

  const users = useSelector((state) => state.users.users);

  // console.log(users);

  return <UserGrid users={users} />;
};

export default UserListPage;
