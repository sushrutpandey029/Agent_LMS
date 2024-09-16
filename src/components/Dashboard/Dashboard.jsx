import React, { useEffect, useState } from "react";
import FollowUpdate from "../FollowUpdate/FollowUpdate";
import CSV from "../CSV/CSV";
import EXCEL from "../EXCEL/EXCEL";
import Popup from "../Popup/Popup";
import Cookies from "js-cookie";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebars from "../Sidebars/Sidebars";

const Dashboard = () => {
  const [apiValue, setApiValue] = useState([]);
  const [followUpDate, setFollowUpDate] = useState(false);
  const [popup, setPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [excel, setExcel] = useState(false);
  const [csv, setCsv] = useState(false);
  const [cookieValue, setCookieValue] = useState("");

  useEffect(() => {
    const value = Cookies.get("fullName");
    setCookieValue(value);
    apiData();
  }, []);

  const toggleExcel = () => {
    setExcel(!excel);
  };
  const toggleCsv = () => {
    setCsv(!csv);
  };
  const togglePopup = () => {
    setPopup(!popup);
  };

  const apiData = async () => {
    const tokenValue = Cookies.get("accessToken");
    try {
      const res = await axios.get(
        "https://milleniance-lms.onrender.com/api/v1/agent/getLeads",
        {
          headers: {
            Authorization: `Bearer ${tokenValue}`,
          },
        }
      );
      setApiValue(res.data.data);
      console.log(res.data.data);
    } catch (err) {
      console.error("error", err);
    }
  };

  const toggleFollowUpDate = () => {
    setFollowUpDate(!followUpDate);
  };

  return (
    <div>
      <Navbar/>
      <Sidebars />
      <div
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          padding: "15px",
          position: "absolute",
          top: "58px",
          left: "250px",
        }}
      >
        <div>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "right",
              marginRight: "180px",
              textDecoration: "none",
              gap: "10px",
              color: "black",
              // position: "relative",
            }}
          >
            <li
              onClick={toggleCsv}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/28/28842.png"
                alt="Chat"
                height="30px"
                style={{ cursor: "pointer" }}
              />
              <h6>Upload bulk CSV</h6>
            </li>

            <li
              onClick={toggleExcel}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/29/29611.png"
                alt="Chat"
                height="30px"
                style={{ cursor: "pointer" }}
              />
              <h6>Upload bulk EXCEL</h6>
            </li>
          </ul>
          <div
            style={{
              flex: "1",
              backgroundColor: "#ffffff",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                backgroundColor: "#ffffff",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "8px",
                      backgroundColor: "darkcyan",
                      color: "#ffffff",
                      textAlign: "left",
                    }}
                  >
                    <input type="checkbox" name="checkbox" id="checkbox" />
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      backgroundColor: "darkcyan",
                      color: "#ffffff",
                      textAlign: "left",
                    }}
                  >
                    Company Name
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      backgroundColor: "darkcyan",
                      color: "#ffffff",
                      textAlign: "left",
                    }}
                  >
                    Action
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      backgroundColor: "darkcyan",
                      color: "#ffffff",
                      textAlign: "left",
                    }}
                  >
                    Created At
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      backgroundColor: "darkcyan",
                      color: "#ffffff",
                      textAlign: "left",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      backgroundColor: "darkcyan",
                      color: "#ffffff",
                      textAlign: "left",
                    }}
                  >
                    Follow-Up Date
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      backgroundColor: "darkcyan",
                      color: "#ffffff",
                      textAlign: "left",
                    }}
                  >
                    Lead ID
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      backgroundColor: "darkcyan",
                      color: "#ffffff",
                      textAlign: "left",
                    }}
                  >
                    Location
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      backgroundColor: "darkcyan",
                      color: "#ffffff",
                      textAlign: "left",
                    }}
                  >
                    Message
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      backgroundColor: "darkcyan",
                      color: "#ffffff",
                      textAlign: "left",
                    }}
                  >
                    Mobile Number
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      backgroundColor: "darkcyan",
                      color: "#ffffff",
                      textAlign: "left",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      backgroundColor: "darkcyan",
                      color: "#ffffff",
                      textAlign: "left",
                    }}
                  >
                    Service
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      backgroundColor: "darkcyan",
                      color: "#ffffff",
                      textAlign: "left",
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {apiValue.map((element, i) => (
                  <tr
                    key={element.lead_id}
                    style={{
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "#f1f1f1" },
                    }}
                  >
                    <td style={{ padding: "8px" }}></td>
                    <td style={{ padding: "8px" }}>{element.companyName}</td>
                    <td style={{ padding: "8px" }}>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHB6Tu_jYfNVdP4_4kwZyRgzjQYQq4P3eeLA&s"
                        alt="Action"
                        width="30px"
                        onClick={toggleFollowUpDate}
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                    <td style={{ padding: "8px" }}>{element.createdAt}</td>
                    <td style={{ padding: "8px" }}>{element.email}</td>
                    <td style={{ padding: "8px" }}>{element.followUpDate}</td>
                    <td
                      // onClick={() => handleSelectItem(element)}
                      style={{ padding: "8px" }}
                    >
                      {element.lead_id}
                    </td>
                    <td style={{ padding: "8px" }}>{element.location}</td>
                    <td style={{ padding: "8px" }}>{element.message}</td>
                    <td style={{ padding: "8px" }}>{element.mobileNumber}</td>
                    <td style={{ padding: "8px" }}>{element.name}</td>
                    <td style={{ padding: "8px" }}>{element.service}</td>
                    <td style={{ padding: "8px" }}>{element.status}</td>
                    {/* {array.push(element)} */}
                  </tr>
                ))}
              </tbody>
            </table>
            {popup && selectedItem && <Popup element={selectedItem} />}
            {followUpDate && <FollowUpdate />}
            {csv && <CSV />}
            {excel && <EXCEL />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
