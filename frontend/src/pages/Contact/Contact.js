import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Navbar from "../../components/Navbar/Navbar";
import "./Contact.scss";
// import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarTop from "../../components/SidebarTop/SidebarTop";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import editbutton from "../../assets/images/contact/editbutton.svg";
import axios from "axios";
// import { useAuthHeader } from "react-auth-kit";

const Contact = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // const authHeader = useAuthHeader();

  const [FilterData, setFilterData] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [open, setOpen] = useState(false);

  const eventClose = () => setOpen(false);
  const eventShow = () => setOpen(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterData({
      ...FilterData,
      [name]: value,
    });
  };

  // Serialize the object into query parameters
  const serializedParams = Object.entries(FilterData)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
  // console.log(authHeader());

  const instance = axios.create({
    baseURL: "https://api.airtable.com/v0/appvPiKRd6ZGQKUJA",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      // Authorization: authHeader(),
      Authorization:
        "Bearer patPRk7YOL27aUjHU.25298c18dd166d6e856ddfa98fccd95d19d46bd21b042ca99dd9856df79cbb7a",
      // "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
  });

  const runFilter = () => {
    console.log(`https://example.com/api?${serializedParams}`);
    instance
      .get(`/contact?${serializedParams}`)
      .then(function (response) {
        // console.log(response);
        setUsers(response.data.contacts);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(FilterData);

  // useEffect(() => {
  //   console.log(`/contact`);
  //   setLoading(true);
  //   instance
  //     .get(`/contact`)
  //     .then(function (response) {
  //       setUsers(response.data.contacts);
  //       setLoading(false);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    // console.log(`/contact`);
    setLoading(true);
    instance
      .get(`/tblHbDEIYCS0QvvZk`)
      .then(function (response) {
        console.log(response);
        setUsers(response.data.records);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const refreshData = () => {
    instance
      .get(`/tblHbDEIYCS0QvvZk`)
      .then(function (response) {
        console.log(response);
        setUsers(response.data.records);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [contact, setContact] = useState({
    id: "",
    full_name: "",
    name: "",
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    Lead_Source: "",
    Referral_Code: "",
  });

  const handleInput = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const getIdByButton = (e) => {
    setShow(true);
    instance
      .get(`/tblHbDEIYCS0QvvZk/${e}`)
      .then(function (response) {
        console.log(response);
        setContact({
          id: response.data.id,
          full_name: response.data.fields.full_name,
          name: response.data.fields.name,
          first_name: response.data.fields.first_name,
          last_name: response.data.fields.last_name,
          email: response.data.fields.email,
          mobile: response.data.fields.mobile,
          Lead_Source: response.data.fields.Lead_Source,
          Referral_Code: response.data.fields.Referral_Code,
        });
        // setUsers(response.data.records);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(e);
  };

  const updateContact = () => {
    const data = {
      fields: {
        id: 49,
        full_name: contact.full_name,
        name: contact.name,
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email,
        mobile: contact.mobile,
        Lead_Source: contact.Lead_Source,
        Referral_Code: contact.Referral_Code,
        created_at: "2023-06-16 07:24:36",
        updated_at: "2023-06-16 07:24:36",
        master_record_id: "NULL",
        account_id: "NULL",
        deleted: 0,
        solutation: "NULL",
        other_street: 0,
        unassigned: 1,
        unread: 1,
        unchanged: 1,
        no_next_activity: 0,
        no_activity_all_time: 0,
        no_activity_last_7_days: 0,
        no_activity_last_30_days: 1,
        some_activity_last_7_days: 1,
        some_activity_last_30_days: 0,
        no_progress_updates_last_7_days: 1,
        no_progress_updates_last_30_days: 1,
        close_date_this_month: 0,
      },
    };

    instance
      .patch(`/tblHbDEIYCS0QvvZk/${contact.id}`, data)
      .then((res) => {
        console.log(res);
        refreshData();
        alert("Record Updated Successfully");
        setShow(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [filed, setFiled] = useState({
    full_name: "",
    name: "",
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    Lead_Source: "",
    Referral_Code: "",
  });

  const eventInput = (e) => {
    setFiled({ ...filed, [e.target.name]: e.target.value });
  };

  const saveContact = (e) => {
    if (filed.full_name !== "" && filed.name !== "" && filed.first_name !== "" && filed.last_name !== "" && filed.email !== "" && filed.mobile !== "" && filed.Lead_Source !== "" && filed.Referral_Code !== ""){
      const data = {
        records: [
          {
            fields: {
              id: 49,
              full_name: filed.full_name,
              name: filed.name,
              first_name: filed.first_name,
              last_name: filed.last_name,
              email: filed.email,
              mobile: filed.mobile,
              Lead_Source: filed.Lead_Source,
              Referral_Code: filed.Referral_Code,
              created_at: "2023-06-16 07:24:36",
              updated_at: "2023-06-16 07:24:36",
              master_record_id: "NULL",
              account_id: "NULL",
              deleted: 0,
              solutation: "NULL",
              other_street: 0,
              unassigned: 1,
              unread: 1,
              unchanged: 1,
              no_next_activity: 0,
              no_activity_all_time: 0,
              no_activity_last_7_days: 0,
              no_activity_last_30_days: 1,
              some_activity_last_7_days: 1,
              some_activity_last_30_days: 0,
              no_progress_updates_last_7_days: 1,
              no_progress_updates_last_30_days: 1,
              close_date_this_month: 0,
            },
          },
        ],
      };


      const instance = axios.create({
        baseURL: "https://api.airtable.com/v0/appvPiKRd6ZGQKUJA",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          // Authorization: authHeader(),
          Authorization:
            "Bearer patPRk7YOL27aUjHU.25298c18dd166d6e856ddfa98fccd95d19d46bd21b042ca99dd9856df79cbb7a",
          // "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
      });

      instance
        .post(`/tblHbDEIYCS0QvvZk`, data)
        .then((res) => {
          refreshData();
          alert("Record Added Successfully");
        })
        .catch(function (error) {
          console.log(error);
        });
    }else{
        alert("Please fill all fields")
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="col-12 contactcount">
          <SidebarTop />
          <div className="contact-model-block">
            <div className="contact-total">Total : 1</div>
            <Button variant="primary" onClick={eventShow} className="me-2">
              Add Contact
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-3 contact-sidebar">
            <Tabs
              defaultActiveKey="conditions"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="conditions" title="Conditions">
                <div className="filter-inner">
                  <p className="filter-title">Smart Properties</p>
                  <div className="ProjectFilter">
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="unassigned"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Unassigned</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="unread"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Unread</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="unchanged"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Unchanged</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="no_next_activity"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>No Next Activity</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="no_activity_all_time"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>No Activity - All Time </p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="no_activity_last_7_days"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>No Activity - Last 7 Days</p>
                    </div>
                    <div
                      className="projectfiltercheckbox"
                      onChange={handleInputChange}
                      value="1"
                    >
                      <input type="checkbox" name="no_activity_last_30_days" />
                      <p>No Activity - Last 30 Days</p>
                    </div>
                    <div
                      className="projectfiltercheckbox"
                      onChange={handleInputChange}
                      value="1"
                    >
                      <input
                        type="checkbox"
                        name="some_activity_last_7_days"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Some Activity - Last 7 Days</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="some_activity_last_30_days"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Some Activity - Last 30 Days</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="no_progress_updates_last_7_days"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>No Progress Updates - Last 7 Days</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="no_progress_updates_last_30_days"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>No Progress Updates - Last 30 Days</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="close_date_this_month"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Close Date - This Month</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="Other"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Other</p>
                    </div>
                  </div>
                </div>
                <div className="filter-inner">
                  <p className="filter-title">Contact Properties</p>
                  <div className="ProjectFilter">
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="first_name"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>First Name</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="last_name"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Last Name</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="Contact ID"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Contact ID</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="deleted"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Deleted</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="master_record_id"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Master Record ID</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="account_id"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Account ID</p>
                    </div>

                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="solutation"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Solutation</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="full_name"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Full Name</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="other_street"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Other Street</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="Other"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Other</p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="groups" title="Groups">
                <div className="filter-inner">
                  <p className="filter-title">Contact Properties</p>
                  <div className="ProjectFilter">
                    <div className="projectfiltercheckbox">
                      <input type="checkbox" name="Last Name" />
                      <p>Last Name</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input type="checkbox" name="Contact ID" />
                      <p>Contact ID</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input type="checkbox" name="Deleted" />
                      <p>Deleted</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input type="checkbox" name="Master Record ID" />
                      <p>Master Record ID</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input type="checkbox" name="Account ID" />
                      <p>Account ID</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input type="checkbox" name="First Name" />
                      <p>First Name</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input type="checkbox" name="Solutation" />
                      <p>Solutation</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input type="checkbox" name="Full Name" />
                      <p>Full Name</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input type="checkbox" name="Other Street" />
                      <p>Other Street</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input type="checkbox" name="Other" />
                      <p>Other</p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="columns" title="Columns">
                Tab content for Loooonger Tab
              </Tab>
            </Tabs>
            <div className="projectFilter_filtersbutton">
              <button onClick={runFilter}>Run</button>
              <button>Save</button>
              <button>Save As</button>
            </div>
          </div>
          <div className="col-9 right-sidebar">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>
                <Table className="contact-table">
                  <thead>
                    <tr>
                      <th>
                        <span>
                          <input type="checkbox" className="checkbox" />
                        </span>
                      </th>
                      <th>Full Name</th>
                      <th>Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Lead Source</th>
                      <th>Referral Code</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <span>
                            <input type="checkbox" className="checkbox" />
                          </span>
                        </td>
                        <td>{user.fields.full_name}</td>
                        <td>{user.fields.name}</td>
                        <td>{user.fields.last_name}</td>
                        <td>{user.fields.email}</td>
                        <td>{user.fields.mobile}</td>
                        <td>{user.fields.Lead_Source}</td>
                        <td>{user.fields.Referral_Code}</td>
                        <td>
                          <div className="action-report">
                            <Button
                              variant="primary"
                              onClick={() => getIdByButton(user.id)}
                            >
                              <span>
                                <img src={editbutton} alt="editbutton" />
                              </span>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            )}
          </div>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Update Contact</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={contact.full_name}
                name="full_name"
                placeholder="Full Name"
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={contact.name}
                type="text"
                name="name"
                onChange={handleInput}
                placeholder="Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={contact.first_name}
                name="first_name"
                type="text"
                onChange={handleInput}
                placeholder="First Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={contact.last_name}
                name="last_name"
                onChange={handleInput}
                placeholder="Last Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={contact.email}
                name="email"
                onChange={handleInput}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                value={contact.mobile}
                name="mobile"
                onChange={handleInput}
                placeholder="Mobile"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lead Source</Form.Label>
              <Form.Control
                type="text"
                value={contact.Lead_Source}
                name="Lead_Source"
                onChange={handleInput}
                placeholder="Lead Source"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Referral Code</Form.Label>
              <Form.Control
                value={contact.Referral_Code}
                type="text"
                name="Referral_Code"
                onChange={handleInput}
                placeholder="Referral Code"
                autoFocus
              />
            </Form.Group>
          </Form>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => updateContact()}>
              Save Changes
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={open} onHide={eventClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Contact</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="full_name"
                placeholder="Full Name"
                onChange={eventInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={eventInput}
                placeholder="Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="first_name"
                type="text"
                onChange={eventInput}
                placeholder="First Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                onChange={eventInput}
                placeholder="Last Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={eventInput}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="number"
                name="mobile"
                onChange={eventInput}
                placeholder="Mobile"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lead Source</Form.Label>
              <Form.Control
                type="text"
                name="Lead_Source"
                onChange={eventInput}
                placeholder="Lead Source"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Referral Code</Form.Label>
              <Form.Control
                type="text"
                name="Referral_Code"
                onChange={eventInput}
                placeholder="Referral Code"
                autoFocus
              />
            </Form.Group>
          </Form>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <Button variant="secondary" onClick={eventClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => saveContact()}>
              Save Changes
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Contact;
