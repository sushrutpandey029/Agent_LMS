import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

const Login = () => {
  const [value, setValue] = useState([]);
  let [tokens, setTokens] = useState({
    accessToken: "",
    refreshToken: "",
  });

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

        navigate("dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Seller Login</h1>
      <div className="m-3">
        <form className="m-3">
          <div className="m-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={data.id}
              onChange={(e) => setData({ ...data, id: e.target.value })}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="m-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="m-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </form>
        <button>api</button>
        <div>
          {value.length ? (
            <div>
              {value.map((i) => (
                <div key={i.id}>
                  {i.id}, {i.title}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* {token1} */}
    </div>
  );
};

export default Login;
