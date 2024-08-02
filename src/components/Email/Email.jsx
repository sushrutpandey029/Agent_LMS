import React, { useEffect, useState } from "react";
import axios from "axios";

const Email = () => {
  const [data, setData] = useState([]);
  const [time1, setTime1] = useState();
  const [details, setDetails] = useState({
    recipient: "",
    name: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const d = new Date();
  let time = d.getTime();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      //   console.log(res.data);
      setData(res.data);
      setTime1(time)
    });
  }, [time]);

  const handleSubmit = () => {};

  return (
    <div
      style={{
        width: "80%",
        position: "fixed",
        left: 150,
        top: 100,
        backgroundColor: "Cornsilk",
        height: "500px",
        border: "solid",
        textAlign: "center",
      }}
    >
      <h1>Email</h1>
      {/* {data.map((i) => (
        <div key={i}>
          <div>{i.body}</div>
        </div>
      ))} */}
      <form action="">
        <h2>Enter details</h2>

        <div style={{ marginTop: "20px" }}>
          <label for="email">Email to:</label>
          <br />
          <select>
            <option>email</option>
            <option>fruit</option>
            <option>salad</option>
            <option>vegetables</option>
          </select>
        </div>
        <div style={{ marginTop: "20px" }}>
          <label htmlFor="">Time</label>
          <br />
          <input type="time" name="" id="" />
          {time}
        </div>
        <div style={{ marginTop: "10px" }}>
          <label htmlFor="">Email cc: </label>
          <input type="text" name="" id="" />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label htmlFor="">Email subject: </label>
          <input type="text" name="" id="" />
        </div>
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsSubmitted(!isSubmitted);
          }}
        >
          Submit
        </button>
      </form>
      {isSubmitted ? <h2>{details.name}</h2> : null}
    </div>
  );
};

export default Email;
