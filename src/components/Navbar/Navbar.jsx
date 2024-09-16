import React from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";
import notification from "../../assets/notification.png";
import chat from "../../assets/chat.png";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();
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
      <header
        style={{
          backgroundColor: "darkcyan",
          color: "#ffffff",
          // padding: "10px 15px",
          borderBottom: "2px solid #6c757d",
          position: "fixed",
          width: "100%",
          zIndex: "1",
        }}
      >
        {/* <h2 style={{ margin: "0" }}>Seller Dashboard</h2>
    <h3 style={{ margin: "0" }}>Welcome {cookieValue}!</h3> */}
        {
          <nav
            style={{
              backgroundColor: "darkcyan",
              color: "#ffffff",
              padding: "10px 15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "2px solid",
              position: "fixed",
              width: "100%",
            }}
          >
            <h2 style={{ margin: "0" }}>Milleniance LMS</h2>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "10px",
                margin: "0",
                padding: "0",
              }}
            >
              <li>
                <img
                  src={chat}
                  alt="Chat"
                  height="30px"
                  style={{ cursor: "pointer" }}
                />
              </li>
              <li>
                <img
                  src={notification}
                  alt="Notification"
                  height="30px"
                  style={{ cursor: "pointer" }}
                />
              </li>
              <li>
                <div className="dropdown" style={{ position: "relative" }}>
                  <img
                    src={profile}
                    alt="Profile"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    height="30px"
                    style={{ cursor: "pointer" }}
                  />
                  <ul
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #dee2e6",
                      padding: "0",
                      margin: "0",
                      position: "absolute",
                      top: "100%",
                      right: "0",
                      width: "150px",
                    }}
                    className="dropdown-menu"
                  >
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "darkcyan" }}
                    >
                      <li style={{ padding: "10px", cursor: "pointer" }}>
                        Profile
                      </li>
                    </Link>
                    <li
                      onClick={logout}
                      style={{
                        padding: "10px",
                        cursor: "pointer",
                        color: "darkcyan",
                      }}
                    >
                      Logout
                    </li>
                    <Link
                      to="setting"
                      style={{ textDecoration: "none", color: "darkcyan" }}
                    >
                      <li style={{ padding: "10px", cursor: "pointer" }}>
                        Setting
                      </li>
                    </Link>
                    <Link
                      to="automation"
                      style={{ textDecoration: "none", color: "darkcyan" }}
                    >
                      <li style={{ padding: "10px", cursor: "pointer" }}>
                        Automation Setting
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        }
      </header>
    </div>
  );
};

export default Navbar;
