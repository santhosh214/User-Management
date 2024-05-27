import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Grid,
  MenuItem,
  Divider,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";
import axios from "axios";
import { addUser } from "../api/userReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: null,
    userRole: "",
  });

  const handleCancel = () => {
    navigate("/home/list");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    axios
      .post("http://localhost:8080/api/v1/users", form)
      .then((res) => {
        dispatch(addUser(res.data));
        navigate("/home/list");
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography
            variant="h4"
            gutterBottom
            style={{ fontWeight: "600", fontSize: "32px" }}
          >
            New User
          </Typography>
        </div>
        <div>
          <Button
            variant="outlined"
            style={{ marginRight: "12px" }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Add User
          </Button>
        </div>
      </div>
      <Divider sx={{ mt: 1, mb: 3 }} />

      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography
            variant="h4"
            style={{ fontSize: "14px", fontWeight: "600" }}
          >
            Name
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="firstName"
            label="First Name"
            variant="outlined"
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="lastName"
            label="Last Name"
            autoComplete="off"
            variant="outlined"
            onChange={handleChange}
            required
          />
        </Grid>
        <Divider sx={{ mt: 3, mb: 3 }} />
        <Grid
          item
          xs={12}
          sm={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography
            variant="h4"
            style={{ fontSize: "14px", fontWeight: "600" }}
          >
            Email Address
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            name="email"
            label="Email Address"
            autoComplete="off"
            variant="outlined"
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography
            variant="h4"
            style={{ fontSize: "14px", fontWeight: "600" }}
          >
            Phone (Optional)
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            name="phone"
            label="Phone"
            autoComplete="off"
            placeholder="(000)-000-000"
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography
            variant="h4"
            style={{ fontSize: "14px", fontWeight: "600" }}
          >
            User Role
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <InputLabel id="select-option-label">Role</InputLabel>
            <Select
              name="userRole"
              labelId="select-option-label"
              id="select-option"
              value={form.selectedOption}
              onChange={handleChange}
              label="Option"
              required
            >
              <MenuItem value="ADMIN">Admin</MenuItem>
              <MenuItem value="USER">User</MenuItem>
              <MenuItem value="VIEWER">Viewer</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddUser;
