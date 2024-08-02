import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Profile = () => {
  const [cookieValue1, setCookieValue1] = useState("");
  const [cookieValue2, setCookieValue2] = useState("");
  const [cookieValue3, setCookieValue3] = useState("");
  const [cookieValue4, setCookieValue4] = useState("");
  const [cookieValue5, setCookieValue5] = useState("");
  const [cookieValue6, setCookieValue6] = useState("");
  const [cookieValue7, setCookieValue7] = useState("");
  const [cookieValue8, setCookieValue8] = useState("");
  const [cookieValue9, setCookieValue9] = useState("");

  useEffect(() => {
    const value1 = Cookies.get("_id");
    setCookieValue1(value1);
    const value2 = Cookies.get("accessToken");
    setCookieValue2(value2);
    const value3 = Cookies.get("address");
    setCookieValue3(value3);
    const value4 = Cookies.get("agent_id");
    setCookieValue4(value4);
    const value5 = Cookies.get("company_name");
    setCookieValue5(value5);
    const value6 = Cookies.get("email");
    setCookieValue6(value6);
    const value7 = Cookies.get("fullName");
    setCookieValue7(value7);
    const value8 = Cookies.get("phone_number");
    setCookieValue8(value8);
    const value9 = Cookies.get("refreshToken");
    setCookieValue9(value9);
  }, []);

  return (
    <div>
      <h2>{cookieValue1}</h2>
      <h2>{cookieValue2}</h2>
      <h2>{cookieValue3}</h2>
      <h2>{cookieValue4}</h2>
      <h2>{cookieValue5}</h2>
      <h2>{cookieValue6}</h2>
      <h2>{cookieValue7}</h2>
      <h2>{cookieValue8}</h2>
      <h2>{cookieValue9}</h2>
    </div>
  );
};

export default Profile;
