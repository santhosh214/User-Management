import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";

const Sidebar = ({ onShowUsers, onAddUser, onLogout }) => {
  return (
    <Drawer variant="permanent" anchor="left">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            style={{
              padding: 16,
              background: "#0041d9",
              color: "white",
              fontSize: "20px",
            }}
          >
            User Management
          </Typography>
          <Divider />
          <List>
            <ListItem button onClick={onShowUsers}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Show Users" />
            </ListItem>
            <ListItem button onClick={onAddUser}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add User" />
            </ListItem>
          </List>
        </div>
        <div>
          <Divider />
          <List>
            <ListItem button onClick={onLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
