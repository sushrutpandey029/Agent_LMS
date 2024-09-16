import React, { useState } from "react";

const Columns = () => {
  const [first, setFirst] = useState("50%");
  const [second, setSecond] = useState("30%");
  const [third, setThird] = useState("20%");
  const [fourth, setfourth] = useState("30%");
  return (
    <div style={{ marginLeft: "280px", width: "1100px" }}>
      <div class="container" style={{ marginTop: "80px" }}>
        <div
          class="row"
          style={{
            height: "150px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            class="col-2"
            style={{
              border: "solid",
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "30%",
                background: "lightblue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/2040/2040504.png"
                alt=""
                width="50px"
              />
            </div>
            <div style={{ width: "70%" }}>
              Total leads <b>90%</b>
            </div>
          </div>
          <div
            class="col-2 "
            style={{
              border: "solid",
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "30%",
                background: "lightblue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/14072/14072026.png"
                alt=""
                width="50px"
              />
            </div>
            <div style={{ width: "70%" }}>
              New leads <b>90%</b>
            </div>
          </div>
          <div
            class="col-2 "
            style={{
              border: "solid",
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "30%",
                background: "lightblue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/526/526737.png"
                alt=""
                width="50px"
              />
            </div>
            <div style={{ width: "70%" }}>
              Completed leads <b>90%</b>
            </div>
          </div>
          <div
            class="col-2"
            style={{
              border: "solid",
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "30%",
                background: "lightblue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/9321/9321290.png"
                alt=""
                width="50px"
              />
            </div>
            <div style={{ width: "70%" }}>
              Processing leads <b>90%</b>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <p>Goal Completion</p>
          <div style={{ textAlign: "left", marginTop: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Leads from Official Site</div>
              <div>{first}</div>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style={{ width: first }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div style={{ textAlign: "left", marginTop: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Leads from Facebook</div>
              <div>{second}</div>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style={{ width: second }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div style={{ textAlign: "left", marginTop: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Leads from Instagram</div>
              <div>{third}</div>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style={{ width: third }}
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div style={{ textAlign: "left", marginTop: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Leads from Whatsapp</div>
              <div>{fourth}</div>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-danger"
                role="progressbar"
                style={{ width: fourth }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          gap: "30px",
        }}
      >
        <div style={{ width: "70%" }}>
          <div style={{ textAlign: "left" }}>Visitors Report</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <img
                src="https://static.vecteezy.com/system/resources/previews/019/765/478/non_2x/world-map-with-country-location-free-vector.jpg"
                alt=""
                height="400px"
              />
            </div>
            <div
              style={{
                background: "lightgreen",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2285/2285559.png"
                  alt=""
                  width="50px"
                />
                8390 Visits
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2285/2285559.png"
                  alt=""
                  width="50px"
                />
                30% Referrals
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2285/2285559.png"
                  alt=""
                  width="50px"
                />
                70% Organic
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: "22px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ width: "20%", background: "darkorange" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2897/2897785.png"
                alt=""
                height="40px"
              />
            </div>
            <div style={{ width: "80%", background: "orange", color: "white" }}>
              Inventory 5,200{" "}
              <div class="progress" style={{ height: "1px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "25%", color: "white" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>{" "}
              50% Increase in 30 Days
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "20%", background: "darkgreen" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/7710/7710481.png"
                alt=""
                height="40px"
              />
            </div>
            <div style={{ width: "80%", background: "green", color: "white" }}>
              Inventory 5,200{" "}
              <div class="progress" style={{ height: "1px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "25%", color: "white" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              50% Increase in 30 Days
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "20%", background: "darkred" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/7268/7268609.png"
                alt=""
                height="40px"
              />
            </div>
            <div style={{ width: "80%", background: "red", color: "white" }}>
              Inventory 5,200{" "}
              <div class="progress" style={{ height: "1px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "25%", color: "white" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              50% Increase in 30 Days
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "20%", background: "darkblue" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/786/786205.png"
                alt=""
                height="40px"
              />
            </div>
            <div style={{ width: "80%", background: "blue", color: "white" }}>
              Inventory 5,200{" "}
              <div class="progress" style={{ height: "1px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "25%", color: "white" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              50% Increase in 30 Days
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "lightyellow",
            padding: "10px",
          }}
        >
          <div>Direct Chat</div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>Alexander Pierce</p>
              <p>23 Jan 2:00 pm</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width="50px"
              />
              <p>Is this template really for free? That's unbelievable!</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>23 Jan 2:05 pm</p>
              <p>Sarah Bullock</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p>Is this template really for free? That's unbelievable!</p>
              <img
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width="50px"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>Alexander Pierce</p>
              <p>23 Jan 5:37 pm</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width="50px"
              />
              <p>Is this template really for free? That's unbelievable!</p>
            </div>
          </div>
          <div>
            <input type="text" />
            <button>send</button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            background: "lightyellow",
            padding: "10px",
          }}
        >
          <div>Latest Members 8 New Members</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
              gap: "10px", // Space between images
              //   width: "30vw", // Adjust width as needed
              //   maxWidth: "1200px", // Adjust max width as needed
              //   margin: "0 auto", // Center the grid
              //   border: "solid",
              //   justifyContent: "center",
              alignItems: "center",
              paddingTop: "20px",
            }}
          >
            <div>
              <img
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width="100px"
                style={{
                  borderRadius: "100px",
                  height: "auto",
                  display: "block",
                }}
              />
              <p>Alexander</p>
              <p>Today</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width="100px"
                style={{
                  borderRadius: "100px",
                  height: "auto",
                  display: "block",
                }}
              />
              <p>Alexander</p>
              <p>Today</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width="100px"
                style={{
                  borderRadius: "100px",
                  height: "auto",
                  display: "block",
                }}
              />
              <p>Alexander</p>
              <p>Today</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width="100px"
                style={{
                  borderRadius: "100px",
                  height: "auto",
                  display: "block",
                }}
              />
              <p>Alexander</p>
              <p>Today</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width="100px"
                style={{
                  borderRadius: "100px",
                  height: "auto",
                  display: "block",
                }}
              />
              <p>Alexander</p>
              <p>Today</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width="100px"
                style={{
                  borderRadius: "100px",
                  height: "auto",
                  display: "block",
                }}
              />
              <p>Alexander</p>
              <p>Today</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width="100px"
                style={{
                  borderRadius: "100px",
                  height: "auto",
                  display: "block",
                }}
              />
              <p>Alexander</p>
              <p>Today</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width="100px"
                style={{
                  borderRadius: "100px",
                  height: "auto",
                  display: "block",
                }}
              />
              <p>Alexander</p>
              <p>Today</p>
            </div>
          </div>
          <div> View All Users</div>
        </div>
        <div style={{ background: "lightyellow", padding: "10px" }}>
          <div>Browser Usage</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "80px",
              paddingTop: "20px",
              alignItems: "center",
            }}
          >
            <div style={{ width: "50%" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/423/423786.png"
                alt=""
              />
            </div>
            <div
              style={{ listStyle: "none", width: "50%", paddingTop: "20px" }}
            >
              <li> Chrome</li>
              <li> IE</li>
              <li> Safari</li>
            </div>
          </div>
          <div>
            <p>United States of America</p>
            <p>12%</p>
          </div>
          <div>
            <p>United States of America</p>
            <p>12%</p>
          </div>
          <div>
            <p>United States of America</p>
            <p>12%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Columns;
