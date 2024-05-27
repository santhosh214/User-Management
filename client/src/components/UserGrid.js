import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteUser } from "../api/userReducer";

const UserGrid = ({ users }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleEditChange = (id) => {
    navigate(`/home/edit/${id}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/v1/users/${id}`)
      .then((res) => {
        dispatch(deleteUser(id));
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <Grid container spacing={3}>
      {users.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user._id}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="body1">{user.email}</Typography>
            <Typography variant="body2">{user.phone}</Typography>
            <div style={{ marginTop: 16 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleEditChange(user._id)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDelete(user._id)}
                style={{ marginLeft: 8 }}
              >
                Delete
              </Button>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserGrid;
