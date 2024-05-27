import React, { useEffect, useState } from "react";
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
import { updateUser } from "../api/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.users.users);
  const user = users.find((u) => u._id === id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: null,
    userRole: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        userRole: user.userRole,
      });
    }
  }, [user]);

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

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/v1/users/${id}`, form)
      .then((res) => {
        dispatch(updateUser(res.data));
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
            Update User
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
            onClick={handleUpdate}
          >
            Update
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
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="lastName"
            label="Last Name"
            value={form.lastName}
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
            value={form.email}
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
            value={form.phone}
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
              value={form.userRole}
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

export default EditUser;
