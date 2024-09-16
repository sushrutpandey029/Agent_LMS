import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";

const FollowUpdate = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeNav = () => {
    setIsOpen(false);
  };

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
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
            zIndex: "1000",
            borderRadius: "8px",
          }}
        >
          <h1 style={{ color: "#008b8b" }}>Add New Update</h1>
          <Button
            variant="link"
            style={{
              fontSize: "24px",
              color: "#008b8b",
              float: "right",
            }}
            onClick={closeNav}
          >
            X
          </Button>
          <div>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label style={{ color: "#008b8b" }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    style={{ borderColor: "#008b8b", borderRadius: "0.25rem" }}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label style={{ color: "#008b8b" }}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{ borderColor: "#008b8b", borderRadius: "0.25rem" }}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Dropdown as={Col}>
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "#008b8b",
                      borderColor: "#008b8b",
                    }}
                  >
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={Col}>
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "#008b8b",
                      borderColor: "#008b8b",
                    }}
                  >
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label style={{ color: "#008b8b" }}>City</Form.Label>
                  <Form.Control
                    style={{ borderColor: "#008b8b", borderRadius: "0.25rem" }}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label style={{ color: "#008b8b" }}>State</Form.Label>
                  <Form.Select
                    defaultValue="Choose..."
                    style={{ borderColor: "#008b8b", borderRadius: "0.25rem" }}
                  >
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label style={{ color: "#008b8b" }}>Zip</Form.Label>
                  <Form.Control
                    style={{ borderColor: "#008b8b", borderRadius: "0.25rem" }}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Check me out"
                  style={{ color: "#008b8b" }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#008b8b", borderColor: "#008b8b" }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FollowUpdate;
