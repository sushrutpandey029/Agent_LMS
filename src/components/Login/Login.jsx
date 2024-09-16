import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Main from "../Main/Main";
import "./Login.css";

const Login = () => {
  const [old, setOld] = useState(true);
  const [value, setValue] = useState([]);
  let [tokens, setTokens] = useState({
    accessToken: "",
    refreshToken: "",
  });

  const toggleOld = () => {
    setOld(!old);
  };

  console.log(old);

  const [data, setData] = useState({
    id: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://milleniance-lms.onrender.com/api/v1/agent/login", data)
      .then((res) => {
        console.log(res);
        tokens.accessToken = res.data.data.accessToken;
        tokens.refreshToken = res.data.data.refreshToken;
        tokens.agent_id = res.data.data.agent.agent_id;
        tokens.company_name = res.data.data.agent.company_name;
        tokens.email = res.data.data.agent.email;
        tokens.fullName = res.data.data.agent.fullName;
        tokens.phone_number = res.data.data.agent.phone_number;
        tokens._id = res.data.data.agent._id;
        tokens.address = res.data.data.agent.address;

        Cookies.set("accessToken", tokens.accessToken, {
          secure: true,
        });
        Cookies.set("refreshToken", tokens.refreshToken, {
          secure: true,
        });
        Cookies.set("agent_id", tokens.agent_id, {
          secure: true,
        });
        Cookies.set("company_name", tokens.company_name, {
          secure: true,
        });
        Cookies.set("email", tokens.email, {
          secure: true,
        });
        Cookies.set("fullName", tokens.fullName, {
          secure: true,
        });
        Cookies.set("phone_number", tokens.phone_number, {
          secure: true,
        });
        Cookies.set("_id", tokens._id, {
          secure: true,
        });
        Cookies.set("address", tokens.address, {
          secure: true,
        });

        navigate("main");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5" style={{ display: "flex" }}>
      <div
        className="card p-4"
        style={{
          width: "50%",
          margin: "auto",
          backgroundColor: "#1e1c1c",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ color: "darkcyan" }}>Seller Login</h1>
        <h2 style={{ color: "darkcyan" }}>Don't have an account?</h2>
        <form className="form-group">
          <div className="mb-4">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
              style={{
                color: "white",
                textAlign: "left",
                left: "200px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={data.id}
              onChange={(e) => setData({ ...data, id: e.target.value })}
              placeholder="Enter your email"
              style={{ borderColor: "#ced4da" }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
              style={{
                color: "white",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Enter your password"
              style={{ borderColor: "#ced4da" }}
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-primary w-20"
            style={{ backgroundColor: "darkcyan", borderColor: "#007bff" }}
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        {old ? (
          <div
            className="card p-4"
            style={{
              width: "50%",
              // margin: "auto",
              backgroundColor: "#1e1c1c",
              borderRadius: "10px",
            }}
          >
            <h1 style={{ color: "darkcyan" }}>New here?</h1>
            <h2 style={{ color: "darkcyan" }}>Enter your details </h2>

            <button
              type="button"
              onClick={toggleOld}
              className="btn btn-primary w-20"
              style={{
                backgroundColor: "darkcyan",
                borderColor: "#007bff",
                width: "fitcontent",
                margin: "auto",
                marginTop: "20px",
              }}
            >
              Sign Up
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
