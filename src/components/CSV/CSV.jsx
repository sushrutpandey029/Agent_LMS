import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const CSV = () => {
  const [isOpen, setIsOpen] = useState(true);
  const close = () => {
    setIsOpen(false);
  };
  const [uploadStatus, setUploadStatus] = useState(null);
  const [res, setRes] = useState(null);

  async function handleFileUpload(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const tokenValue = Cookies.get("accessToken");
    const apiData = await axios
      .post(
        "https://milleniance-lms.onrender.com/api/v1/agent/addLeadsCsv",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${tokenValue}`,
          },
        }
      )
      .then((response) => {
        setUploadStatus("File uploaded successfully!");
        setRes(response.data);
        console.log("File uploaded successfully:", response.data);
      })
      .catch((error) => {
        setUploadStatus("Error uploading file. Please try again.");
        console.error("Error uploading file:", error); // Log errors for debugging
      });
  }

  return (
    <div>
      {isOpen ? (
        <div
          className="sidenav"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
            zIndex: "1000",
            borderRadius: "8px",
          }}
        >
          <button
            variant="link"
            style={{
              fontSize: "24px",
              color: "#008b8b",
              float: "right",
            }}
            onClick={close}
          >
            X
          </button>
          <div>
            <h1>CSV File Upload</h1>
            <input type="file" name="file" onChange={handleFileUpload} />
            {uploadStatus && <p>{uploadStatus}</p>}
            {/* {res.statusCode}
            <br />
            {res.message}
            br
            {res.success} */}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CSV;
