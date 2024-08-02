import React, { useState, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import profile from "../../assets/profile.png";
import notification from "../../assets/notification.png";
import chat from "../../assets/chat.png";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Popups from "reactjs-popup";
import Popup from "../Popup/Popup";
import Cookies from "js-cookie";
import axios from "axios";

// import Table from "react-bootstrap/Table";
// import * as React from "https://cdn.skypack.dev/react@17.0.1";
// import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
// import Dropdown from 'react-bootstrap/Dropdown';

const Dashboard = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [id, setId] = useState();
  const [cookieValue, setCookieValue] = useState("");
  const navigate = useNavigate();
  const [apiValue, setApiValue] = useState();
  const [customer1, setCustomer1] = useState({
    DateofLead: "5-Dec-20",
    Platform: "Google",
    CustomerName: "Customer 1",
    EmailAddress: "Customeremailaddress@domain.com",
    Service: "Remodel",
    Stage: "Paid",
    ClosedDate: "3-Jan-21",
    LeadTimeDay: "29",
    ConvertingStatus: "Yes",
    TotalRevenue: "$500",
  });

  //   function MenuHeadersExample() {
  //     return (
  //       <Dropdown.Menu show>
  //         <Dropdown.Header>Dropdown header</Dropdown.Header>
  //         <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  //         <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
  //       </Dropdown.Menu>
  //     );
  //   }

  useEffect(() => {
    const value = Cookies.get("fullName");
    setCookieValue(value);
    apiData();
  }, []);

  const apiData = async () => {
    const tokenValue = Cookies.get("accessToken");
    await axios
      .get("https://milleniance-lms.onrender.com/api/v1/agent/getLeads", {
        headers: {
          Authorization: `Bearer ${tokenValue}`,
        },
      })
      .then((res) => {
        console.log(res);
        setApiValue(res.data);
      })
      .catch((err) => console.log("error", err));
  };

  const logout = () => {
    Cookies.remove("_id");
    Cookies.remove("accessToken");
    Cookies.remove("address");
    Cookies.remove("agent_id");
    Cookies.remove("company_name");
    Cookies.remove("email");
    Cookies.remove("fullName");
    Cookies.remove("phone_number");
    Cookies.remove("refreshToken");
    navigate("/");
  };

  return (
    <div>
      <h2>Seller Dashboard</h2>
      <h3>{cookieValue}</h3>
      <br />
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "98%",
          margin: "auto",
        }}
      >
        <h1>Milleniance LMS</h1>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
          <li>
            <img src={chat} alt="" height="30px" />
          </li>
          <li>
            <img src={notification} alt="" height="30px" />
          </li>
          <li>
            <div class="dropdown">
              <img
                src={profile}
                alt=""
                class="dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                height="30px"
              />
              <ul style={{ textDecoration: "none" }} class="dropdown-menu ">
                <Link style={{ textDecoration: "none" }} to="/profile">
                  <li class="dropdown-item">Profile</li>
                </Link>
                <li onClick={logout} class="dropdown-item">
                  Logout{" "}
                </li>
                <Link style={{ textDecoration: "none" }} to="setting">
                  <li class="dropdown-item">Setting </li>
                </Link>
                <Link style={{ textDecoration: "none" }} to="automation">
                  <li class="dropdown-item">Automation Setting </li>
                </Link>
              </ul>
            </div>
          </li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Sidebar style={{ minWidth: "310px" }}>
          <Menu>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        </Sidebar>
        <div
          style={{
            display: "flex",
            // alignItems: "center",
            width: "90%",
          }}
        >
          <div
            style={{
              border: "solid",
              //   display: "flex",
              //   justifyContent: "center",
              width: "100%",
              //   margin: "auto",
            }}
          >
            <table border="solid" class="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                  </th>
                  <th scope="col">Platform</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Service</th>
                  <th scope="col">Stage</th>
                  <th scope="col">Closed Date</th>
                  <th scope="col">Lead Time(Day)</th>
                  <th scope="col">Converting Status</th>
                  <th scope="col">Total Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <input type="checkbox" name="" id="checkbox2" />
                  </th>
                  <td>Google</td>
                  <Popups
                    trigger={
                      <td style={{ cursor: "pointer" }}>
                        {customer1.CustomerName}
                      </td>
                    }
                    position=""
                  >
                    <Popup
                      DateofLead={customer1.DateofLead}
                      Platform={customer1.Platform}
                      CustomerName={customer1.CustomerName}
                      EmailAddress={customer1.EmailAddress}
                      Service={customer1.Service}
                      Stage={customer1.Stage}
                      ClosedDate={customer1.ClosedDate}
                      LeadTimeDay={customer1.LeadTimeDay}
                      ConvertingStatus={customer1.ConvertingStatus}
                      TotalRevenue={customer1.TotalRevenue}
                    />
                  </Popups>
                  <td>Customeremailaddress@domain.com</td>
                  <td>Remodel</td>
                  <td>Paid</td>
                  <td>3-Jan-21</td>
                  <td>29</td>
                  <td>Yes</td>
                  <td>$500</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input type="checkbox" name="" id="checkbox3" />
                  </th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input type="checkbox" name="" id="checkbox4" />
                  </th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
