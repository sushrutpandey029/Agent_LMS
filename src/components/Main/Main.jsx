import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";
import notification from "../../assets/notification.png";
import chat from "../../assets/chat.png";
import Cookies from "js-cookie";
import Sidebars from "../Sidebars/Sidebars";
import Columns from "../Columns/Columns";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  const [cookieValue, setCookieValue] = useState("");
  const navigate = useNavigate();
  const [excel, setExcel] = useState(false);
  const [csv, setCsv] = useState(false);
  const [popup, setPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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

  const toggleExcel = () => {
    setExcel(!excel);
  };
  const toggleCsv = () => {
    setCsv(!csv);
  };
  const togglePopup = () => {
    setPopup(!popup);
  };

  const handleSelectItem = (element) => {
    togglePopup();
    setSelectedItem(element);
  };

  // let array = [];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        fontFamily: '"Roboto", sans-serif',
      }}
    >
      <Navbar />
      <Sidebars />
      <Columns />
    </div>
  );
};

export default Main;
