import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Offcanvas from "react-bootstrap/Offcanvas";
import filter from "../../assets/images/Partners/filter.svg";
import Button from "react-bootstrap/Button";
import ReactSwitch from "react-switch";
import Tabs from "react-bootstrap/Tabs";
import {
  faDownload,
  faMagnifyingGlass,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "./Partners.scss";

const Partners = () => {
  const [addview, setAddview] = useState(false);
  const [addpartner, setAddpartner] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  const addviewClose = () => setAddview(false);
  const addviewShow = () => setAddview(true);

  const addpartnerClose = () => setAddpartner(false);
  const addpartnerShow = () => setAddpartner(true);
  return (
    <>
      <Navbar />
      <div className="container partner-mainpage">
        <div className="partner-top-block">
          <div className="partner-top-main-block">
            <p className="partner-top-mian-title">Partners</p>
            <p className="partner-top-mian-desc">
              Manage your partners and view their activity
            </p>
          </div>
          <div className="partner-main-button">
            <button className="export-partner-btn">
              <FontAwesomeIcon icon={faDownload} />
              <span>Export</span>
            </button>
            <button className="add-partner-btn" onClick={addpartnerShow}>
              <span>Add a new partner</span>
            </button>
          </div>
        </div>
        <div>
          <ul class="mb-3 partner-tab nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                type="button"
                id="all"
                role="tab"
                data-rr-ui-event-key="all"
                aria-controls="uncontrolled-tab-example-tabpane-all"
                aria-selected="true"
                class="nav-link active"
              >
                All
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button type="button" id="my_partners" class="nav-link">
                My Partners
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                type="button"
                id="uncontrolled-tab-example-tab-pending"
                class="nav-link"
              >
                Pending Applications
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                type="button"
                id="add_view"
                onClick={addviewShow}
                class="nav-link"
              >
                Add view
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button type="button" id="manage_view" class="nav-link">
                Manage view
              </button>
            </li>
          </ul>
          <div className="partner-tabs-top">
            <div className="partner-inner-left">
              <div className="partnersearch">
                <div className="partnersearchinput">
                  <input
                    type="search"
                    placeholder="Search...."
                    id="gsearch"
                    name="gsearch"
                  />
                  <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </div>
              </div>
              <select className="form-select partner-select">
                <option value="Today">Today</option>
                <option value="Current month">Current month</option>
                <option value="Last month">Last month</option>
                <option value="Current quarter">Current quarter</option>
                <option value="Last quarter">Last quarter</option>
                <option value="Current year">Current year</option>
                <option value="Last year">Last year</option>
                <option value="Last 7 days">Last 7 days</option>
                <option value="Last 14 days">Last 14 days</option>
                <option value="Last 30 days">Last 30 days</option>
                <option value="Last 60 days">Last 60 days</option>
                <option value="Last 90 days">Last 90 days</option>
                <option value="Last 180 days">Last 180 days</option>
                <option value="Last 365 days">Last 365 days</option>
                <option value="All Time ">All Time</option>
              </select>
              <div className="filter-partners-main">
                <Button className="filter-partners-btn">
                  <span className="filter-icon">
                    <img src={filter} alt="filter" />
                  </span>
                  <span className="filter-text">Show filters (1)</span>
                </Button>
              </div>
            </div>
            <div className="partner-inner-right">
              <Button className="save-btn">Save View</Button>
              <Button className="view-btn">
                <FontAwesomeIcon icon={faEye} />
                View
              </Button>
            </div>
          </div>
          <div className="partner-all-table">
            <div className="partner-count-edit">
              <span className="partner-count">7 Partners</span>
              <span className="edit-columns">edit columns</span>
            </div>
            <Table className="partner-tableall">
              <thead>
                <tr>
                  <th>
                    <span>
                      <input type="checkbox" className="checkbox" />
                    </span>
                  </th>
                  <th>NAME</th>
                  <th>OWNER</th>
                  <th>PROGRAM</th>
                  <th>STATUS</th>
                  <th>ON BOARDING</th>
                  <th>ACTIVE SINCE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="deal-table-checkbox">
                      <span className="checkbox-deal">
                        <input type="checkbox" className="checkbox" />
                      </span>
                    </div>
                  </td>
                  <td>Aafreen</td>
                  <td>Jothi Letchumi</td>
                  <td>Solution Partner Program - Standard</td>
                  <td>
                    <span>Active</span>
                  </td>
                  <td>Default - Connected</td>
                  <td>06/28/2023</td>
                </tr>
                <tr>
                  <td>
                    <div className="deal-table-checkbox">
                      <span className="checkbox-deal">
                        <input type="checkbox" className="checkbox" />
                      </span>
                    </div>
                  </td>
                  <td>Aafreen</td>
                  <td>Jothi Letchumi</td>
                  <td>Solution Partner Program - Standard</td>
                  <td>
                    <span>Active</span>
                  </td>
                  <td>Default - Connected</td>
                  <td>06/28/2023</td>
                </tr>
                <tr>
                  <td>
                    <div className="deal-table-checkbox">
                      <span className="checkbox-deal">
                        <input type="checkbox" className="checkbox" />
                      </span>
                    </div>
                  </td>
                  <td>Aafreen</td>
                  <td>Jothi Letchumi</td>
                  <td>Solution Partner Program - Standard</td>
                  <td>
                    <span>Active</span>
                  </td>
                  <td>Default - Connected</td>
                  <td>06/28/2023</td>
                </tr>
                <tr>
                  <td>
                    <div className="deal-table-checkbox">
                      <span className="checkbox-deal">
                        <input type="checkbox" className="checkbox" />
                      </span>
                    </div>
                  </td>
                  <td>Aafreen</td>
                  <td>Jothi Letchumi</td>
                  <td>Solution Partner Program - Standard</td>
                  <td>
                    <span>Active</span>
                  </td>
                  <td>Default - Connected</td>
                  <td>06/28/2023</td>
                </tr>
                <tr>
                  <td>
                    <div className="deal-table-checkbox">
                      <span className="checkbox-deal">
                        <input type="checkbox" className="checkbox" />
                      </span>
                    </div>
                  </td>
                  <td>Aafreen</td>
                  <td>Jothi Letchumi</td>
                  <td>Solution Partner Program - Standard</td>
                  <td>
                    <span>Active</span>
                  </td>
                  <td>Default - Connected</td>
                  <td>06/28/2023</td>
                </tr>
                <tr>
                  <td>
                    <div className="deal-table-checkbox">
                      <span className="checkbox-deal">
                        <input type="checkbox" className="checkbox" />
                      </span>
                    </div>
                  </td>
                  <td>Aafreen</td>
                  <td>Jothi Letchumi</td>
                  <td>Solution Partner Program - Standard</td>
                  <td>
                    <span>Active</span>
                  </td>
                  <td>Default - Connected</td>
                  <td>06/28/2023</td>
                </tr>
                <tr>
                  <td>
                    <div className="deal-table-checkbox">
                      <span className="checkbox-deal">
                        <input type="checkbox" className="checkbox" />
                      </span>
                    </div>
                  </td>
                  <td>Aafreen</td>
                  <td>Jothi Letchumi</td>
                  <td>Solution Partner Program - Standard</td>
                  <td>
                    <span>Active</span>
                  </td>
                  <td>Default - Connected</td>
                  <td>06/28/2023</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Offcanvas
        className="addview-canvas"
        show={addview}
        onHide={addviewClose}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create view</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" autoFocus />
            </Form.Group>
            <Form.Label>Shared with</Form.Label>
            <div className="shared-btn">
              <Button className="onlyme-btn">Only me</Button>
              <Button className="team-btn">My team</Button>
            </div>
          </Form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 50,
            }}
          >
            <Button variant="secondary" onClick={addviewClose}>
              Close
            </Button>
            <Button variant="primary">Save Changes</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas
        className="addpartner-canvas"
        show={addpartner}
        onHide={addpartnerClose}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add a new partner</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="partner-detail">
            <p className="partner-detail-title">Partner details</p>
            <p className="partner-detail-desc">
              Fill in the partner's company details
            </p>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Partner name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                className="input-partner"
                placeholder="Partner's company name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Partner program</Form.Label>
              <Form.Select>
                <option hidden value>
                  The program in which your partner is
                </option>
                <option>Bronze</option>
                <option>Silver</option>
                <option>Gold</option>
              </Form.Select>
            </Form.Group>
            <div className="partner-detail">
              <p className="partner-detail-title">Main contact</p>
              <p className="partner-detail-desc">
                Fill in the partner's main contact details
              </p>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                className="input-partner"
                name="firstname"
                placeholder="Main contact's firstname"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                className="input-partner"
                name="lastname"
                placeholder="Main contact's lastname"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                className="input-partner"
                name="email"
                placeholder="Main contact's email address"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Job title</Form.Label>
              <Form.Control
                type="text"
                className="input-partner"
                name="name"
                placeholder="Main contact's job title"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                className="input-partner"
                name="name"
                placeholder="Main contact's phone number"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Access to Kiflo</Form.Label>
              <div className="access-switch-btn">
                <ReactSwitch
                  onChange={handleChange}
                  checked={checked}
                  className="react-switch"
                />
                <span style={{marginLeft:8,fontSize:14}}>
                  This contact has access to the partner portal on Kiflo
                </span>
              </div>
            </Form.Group>
          </Form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 50,
            }}
          >
            <Button variant="secondary" onClick={addpartnerClose}>
              Close
            </Button>
            <Button variant="primary">Save Changes</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Partners;
