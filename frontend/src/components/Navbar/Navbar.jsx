import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import speaker from "../../assets/images/navbar/speaker.svg";
import notification from "../../assets/images/navbar/notification.svg";
import setting from "../../assets/images/navbar/setting.svg";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
// Navigation bar design

const Navigation = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const logout = () => {
    signOut();
    navigate("/login");
  };  

  return (
    <>
      <Navbar bg="light" expand="lg" className="navmain">
        <Container>
          <Navbar.Brand className="nav-logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              activeKey="/"
            >
              <Nav.Link as="li" eventKey="/">
                <Link to="1">Contacts</Link>
              </Nav.Link>
              <NavDropdown
                title={[
                  <span key="drop1">
                    Sales
                    <FontAwesomeIcon icon={faSortDown} />
                  </span>,
                ]}
                className="nav-dropdown"
              >
                <NavDropdown.Item href="/deal" as="a">Deals</NavDropdown.Item>
                <NavDropdown.Item as="a">Quotes</NavDropdown.Item>
                <NavDropdown.Item as="a">Cadences</NavDropdown.Item>
                <NavDropdown.Item as="a">Meeting Links</NavDropdown.Item>
                <NavDropdown.Item as="a">Products</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={[
                  <span key="drop2">
                    Marketing
                    <FontAwesomeIcon icon={faSortDown} />
                  </span>,
                ]}
                className="nav-dropdown"
              >
                <NavDropdown.Item as="li">Campaigns</NavDropdown.Item>
                <NavDropdown.Item as="li">Automations</NavDropdown.Item>
                <NavDropdown.Item as="li">Email Templates</NavDropdown.Item>
                <NavDropdown.Item as="li">Senders</NavDropdown.Item>
                <NavDropdown.Item as="li">Image Library</NavDropdown.Item>
                <NavDropdown.Item as="li">Lists</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={[
                  <span key="drop3">
                    Projects
                    <FontAwesomeIcon icon={faSortDown} />
                  </span>,
                ]}
                className="nav-dropdown"
              >
                <NavDropdown.Item as="li">
                  <Link to="/">Projects</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="li">Tasks</NavDropdown.Item>
                <NavDropdown.Item as="li">Filters</NavDropdown.Item>
                <NavDropdown.Item as="li">Labels</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as="li" eventKey="chat-with-support">
                <Link to="/">Chat with Supports</Link>
              </Nav.Link>
              <NavDropdown
                title={[
                  <span key="drop4">
                    Partners
                    <FontAwesomeIcon icon={faSortDown} />
                  </span>,
                ]}
                className="nav-dropdown"
              >
                <NavDropdown.Item href="/partners" as="a">Partners</NavDropdown.Item>
                <NavDropdown.Item as="a">Team Members</NavDropdown.Item>
                <NavDropdown.Item href="/pipline" as="a">Pipline</NavDropdown.Item>
                <NavDropdown.Item as="a">Onboarding</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="nav-right-bar">
              <Nav.Link>
                <img src={speaker} alt="speaker" />
              </Nav.Link>
              <Nav.Link>
                <img src={notification} alt="notification" />
              </Nav.Link>
              <Nav.Link>
                <img src={setting} alt="setting" />
              </Nav.Link>
              <Dropdown align="end" className="profile-dropdown-menu">
                <Dropdown.Toggle>
                  <div className="profile-avtar"></div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item>Admin</Dropdown.Item>
                  <Dropdown.Item>Switch Workspace</Dropdown.Item>
                  <Dropdown.Item>Recycle Bin</Dropdown.Item>
                  <Dropdown.Item onClick={() => logout()}>
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
