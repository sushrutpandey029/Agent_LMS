import React, { useState } from "react";
import image from "../../assets/free-images.jpg";
import Email from "../Email/Email";

const Popup = (props) => {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <div
      style={{
        width: "80%",
        position: "fixed",
        left: 150,
        top: 100,
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "500px",
        }}
      >
        <div
          style={{
            width: "40%",
            border: "solid",
            textAlign: "center",
            background: "AliceBlue",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={image}
              alt=""
              width="200px"
              style={{ borderRadius: "50px", margin: "10px" }}
            />
          </div>
          <br />
          <div
            style={{ display: "flex", gap: "10px", justifyContent: "center" }}
          >
            <img
              src="https://static-00.iconduck.com/assets.00/call-icon-2048x2048-9fglrllu.png"
              alt=""
              width="30px"
            />
            <br />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3447/3447513.png"
              alt=""
              width="30px"
            />
            <br />
            <img
              src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-whatsapp-icon-png-image_8704827.png"
              alt=""
              width="30px"
            />
            <br />
            <img
              onClick={() => setShowEmail(!showEmail)}
              src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
              alt=""
              width="30px"
            />
          </div>
          <br />
          {props.DateofLead}
          <br />
          {props.Platform}
          <br />
          {props.CustomerName}
          <br />
          {props.EmailAddress}
          <br />
          {props.Service}
          <br />
          {props.Stage}
          <br />
          {props.ClosedDate}
          <br />
          {props.LeadTimeDay}
          <br />
          {props.ConvertingStatus}
          <br />
          {props.TotalRevenue}
        </div>
        <div
          style={{
            display: "flex",
            width: "60%",
            border: "solid",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          error et, eaque tempore numquam quisquam, autem enim alias minima
          accusamus iure maxime tempora est!
        </div>
      </div>
      {showEmail ? <Email /> : null}
    </div>
  );
};

export default Popup;
