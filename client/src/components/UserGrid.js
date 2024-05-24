import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";

const UserGrid = ({ users, onEdit }) => {
  return (
    <Grid container spacing={3}>
      {users.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body1">{user.email}</Typography>
            <div style={{ marginTop: 16 }}>
              <Button variant="contained" color="primary" onClick={onEdit}>
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
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
