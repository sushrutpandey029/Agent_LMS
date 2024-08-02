import { useState, useEffect } from "react";
import React from "react";
import images from "../../assets/free-images.jpg";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

const Home = () => {
  // const [value, setValue] = useState([]);

  // const fetchData = async () => {
  //   const url = "https://jsonplaceholder.typicode.com/posts";
  //   let res = await fetch(url);
  //   res = await res.json();
  //   setValue(res);
  //   console.log(res);
  // };

  // useEffect(() => {
  // fetch("https://jsonplaceholder.typicode.com/photos").then((data) =>
  //   setValue(data)
  // );

  //   fetchData();
  // }, []);

  return (
    <div>
      {/* <h1>Thanks for coming.</h1>
      <h2>Want to know more?</h2>
      <Link to="about">
        <button>Click here</button>
      </Link>
      <h2>Want to contact?</h2>
      <Link to="contact">
        <button>Click here</button>
      </Link>
      <br />
      <br />
      {/* <img src={images} alt="" height="400px" /> */}
      {/* <br />
      <button>click</button>
      <Popup trigger={<button> Trigger</button>} position="bottom ">
        <div style={{ backgroundColor: "lightblue", textAlign: "center" }}>
          <form action="">
            <h1>Popup here</h1>
            <label htmlFor="url">Url: </label>
            <input
              type="text"
              name=""
              id="url"
              value={window.location.href}
              readOnly
            />
            <br />
            <label htmlFor="message">Message: </label>
            <input type="text" name="" id="message" />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Popup> */}
      {/* <div>
        <h1>Api data</h1>
        {value.map((data) => (
          <div key={data.id}>
            <h1>{data.id}</h1>;<h2>{data.title}</h2>;
          </div>
        ))}
      </div> */}
      {/* const PopupExample = () => (
      <Popup trigger={<button>Trigger</button>} position="top left">
        {(close) => (
          <div>
            Content here
            <a className="close" onClick={close}>
              &times;
            </a>
          </div>
        )}
      </Popup>
      ); */}

     
    </div>
  );
};

export default Home;
