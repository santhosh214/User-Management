import React from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Grid,
  MenuItem,
  Divider,
} from "@mui/material";

const AddUser = ({ onCancel }) => {
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
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary">
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
            label="First Name"
            autoComplete="off"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Last Name"
            autoComplete="off"
            variant="outlined"
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
            label="Email Address"
            autoComplete="off"
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
            Phone (Optional)
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="phone"
            autoComplete="off"
            placeholder="(000)-000-000"
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
          <TextField select fullWidth label="select Role" variant="outlined">
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="viewer">Viewer</MenuItem>
          </TextField>
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
            Facility Access
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField select fullWidth label="Customer" variant="outlined">
            <MenuItem value="customer">Yes</MenuItem>
            <MenuItem value="district">No</MenuItem>
          </TextField>
        </Grid>
        <Grid item sm={4} />
        <Grid item xs={8}>
          <TextField select fullWidth label="District" variant="outlined">
            <MenuItem value="customer">Yes</MenuItem>
            <MenuItem value="district">No</MenuItem>
          </TextField>
        </Grid>
        <Grid item sm={4} />
        <Grid item xs={8}>
          <TextField select fullWidth label="Facility" variant="outlined">
            <MenuItem value="customer">Yes</MenuItem>
            <MenuItem value="district">No</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddUser;
