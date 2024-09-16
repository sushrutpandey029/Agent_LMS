import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Sidebars = () => {
  const [dashboard, setDashboard] = useState(false);
  const toggleDashboard = () => {
    setDashboard(!dashboard);
  };
  return (
    <div>
      <Sidebar
        style={{
          backgroundColor: "white",
          position: "fixed",
          top: "58px",
          zIndex: "1",
          height: "100vh",
          // paddingTop: "100px",
        }}
      >
        <Menu style={{}}>
          <MenuItem>
            <Link style={{ textDecoration: "none", color: "black" }} to="/main">
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem onClick={toggleDashboard}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/leadlist"
            >
              Lead list
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ textDecoration: "none", color: "black" }}>
              Opportunity
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ textDecoration: "none", color: "black" }}>
              Proposal
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ textDecoration: "none", color: "black" }}>
              Products
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ textDecoration: "none", color: "black" }}>
              Finance
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ textDecoration: "none", color: "black" }}>
              Timesheet
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ textDecoration: "none", color: "black" }}>
              Report
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ textDecoration: "none", color: "black" }}>User</Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ textDecoration: "none", color: "black" }}>
              Trash
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Sidebars;
