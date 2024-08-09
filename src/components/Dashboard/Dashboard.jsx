import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";
import notification from "../../assets/notification.png";
import chat from "../../assets/chat.png";
import Popups from "reactjs-popup";
import Popup from "../Popup/Popup";
import Cookies from "js-cookie";
import axios from "axios";
import Sidebars from "../Sidebars/Sidebars";
import FollowUpdate from "../FollowUpdate/FollowUpdate";

const Dashboard = () => {
  const [followUpDate, setFollowUpDate] = useState(false);
  const [cookieValue, setCookieValue] = useState("");
  const navigate = useNavigate();
  const [apiValue, setApiValue] = useState([]);

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
        console.log(res.data.data);
        setApiValue(res.data.data);
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

  const fol=()=>{
    setFollowUpDate(!followUpDate)
  }

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
        <h2>Milleniance LMS</h2>
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
        </ul>
      </nav>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Sidebars />

        <div
          style={{
            display: "flex",
            width: "90%",
          }}
        >
          <div
            style={{
              border: "solid",
              // width: "100%",
            }}
          >
            <table border="solid" class="table" >
              <thead>
                <tr>
                  <th scope="col">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                  </th>
                  <th scope="col">companyName</th>
                  <th scope="col">action</th>
                  <th scope="col">createdAt</th>
                  <th scope="col">email</th>
                  <th scope="col">followUpDate</th>
                  <th scope="col">lead_id</th>
                  <th scope="col">location</th>
                  <th scope="col">message</th>
                  <th scope="col">mobileNumber</th>
                  <th scope="col">name</th>
                  <th scope="col">service</th>
                  <th scope="col">status</th>
                  <th scope="col">updatedAt</th>
                </tr>
              </thead>
              {apiValue.map((element) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td>{element.companyName}</td>
                      <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHB6Tu_jYfNVdP4_4kwZyRgzjQYQq4P3eeLA&s" alt="" width='30px' onClick={fol}/></td>
                      <td>{element.createdAt}</td>
                      <td>{element.email}</td>
                      <td>{element.followUpDate}</td>
                      <td>{element.lead_id}</td>
                      <td>{element.location}</td>
                      <td>{element.message}</td>
                      <td>{element.mobileNumber}</td>
                      <td>{element.name}</td>
                      <td>{element.service}</td>
                      <td>{element.status}</td>
                      <td>{element.updatedAt}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            {followUpDate?<FollowUpdate/>:null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
