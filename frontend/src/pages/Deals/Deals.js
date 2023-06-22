import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "react-bootstrap/Button";
import dateFormat from "dateformat";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import trueimg from "../../assets/images/Deal/true.svg";
import editbutton from "../../assets/images/Deal/editbutton.svg";
import "./Deal.scss";
import DealTop from "../../components/DealTop/DealTop";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Deals = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [childData, setChildData] = useState("");

  const handleChildData = (data) => {
    setChildData(data);
  };

  const [open, setOpen] = useState(false);

  const eventClose = () => setOpen(false);
  const eventShow = () => setOpen(true);
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

  useEffect(() => {
    // console.log(`/contact`);
    setLoading(true);
    instance
      .get(`/tbljbiSUSv8w6G345`)
      .then(function (response) {
        console.log(response);
        setUsers(response.data.records);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
      if(childData === true){
        setChildData(false)
      }
  }, [childData]);

  const refreshData = () => {
    instance
      .get(`/tbljbiSUSv8w6G345`)
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
    deal_name: "",
    amount: "",
    stage: "",
    closign_date: "",
    account_name: "",
    contact_name: "",
  });

  const handleInput = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const getIdByButton = (e) => {
    setOpen(true);
    instance
      .get(`/tbljbiSUSv8w6G345/${e}`)
      .then(function (response) {
        console.log(response);
        setContact({
          id: response.data.id,
          account_name: response.data.fields.account_name,
          closign_date: response.data.fields.closign_date,
          deal_name: response.data.fields.deal_name,
          contact_name: response.data.fields.contact_name,
          amount: Number(response.data.fields.amount),
          stage: response.data.fields.stage,
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
        some_activity_last_7_days: 0,
        no_next_activity: 0,
        updated_at: "2023-06-21 13:23:59",
        unread: 1,
        account_name: contact.account_name,
        no_progress_updates_last_30_days: 1,
        no_activity_last_7_days: 1,
        master_record_id: "NULL",
        no_activity_last_30_days: 1,
        unassigned: 1,
        deleted: 0,
        some_activity_last_30_days: 0,
        account_id: "NULL",
        closign_date: contact.closign_date,
        close_date_this_month: 1,
        no_progress_updates_last_7_days: 1,
        deal_name: contact.deal_name,
        deal_owner: "Camron Nikolaus",
        id: 138,
        no_activity_all_time: 0,
        created_at: "2023-06-21 13:23:59",
        unchanged: 0,
        contact_name: contact.contact_name,
        amount: Number(contact.amount),
        stage: contact.stage,
      },
    };

    instance
      .patch(`/tbljbiSUSv8w6G345/${contact.id}`, data)
      .then((res) => {
        console.log(res);
        refreshData();
        toast.success("Record Updated Successfully");
        setOpen(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <DealTop onData={handleChildData} />
      <div className="container">
        <div className="row">
          <div className="col-3 contact-sidebar">
            <Sidebar />
          </div>
          <div className="col-9 deal-sidebar">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>
                <Table className="deal-table">
                  <thead>
                    <tr>
                      <th>
                        <span>
                          <input type="checkbox" className="checkbox" />
                        </span>
                      </th>
                      <th>Deal Name</th>
                      <th>Amount</th>
                      <th>Stage</th>
                      <th>Closign Date</th>
                      <th>Account Name</th>
                      <th>Contact Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <div className="deal-table-checkbox">
                            <span className="checkbox-deal">
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <div className="deal-date-block">
                              <span className="deal-trueimg">
                                <img src={trueimg} alt="true" />
                              </span>
                              <span className="deal-date">
                                {dateFormat(
                                  user.fields.created_at,
                                  "mmmm dd, yyyy"
                                )}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>{user.fields.deal_name}</td>
                        <td>{user.fields.amount}</td>
                        <td>{user.fields.stage}</td>
                        <td>
                          {dateFormat(
                            user.fields.closign_date,
                            "mmmm dd, yyyy"
                          )}
                        </td>
                        <td>{user.fields.account_name}</td>
                        <td>{user.fields.contact_name}</td>
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
      <Offcanvas show={open} onHide={eventClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Update Deal</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Deal Name</Form.Label>
              <Form.Control
                type="text"
                value={contact.deal_name}
                name="deal_name"
                placeholder="Deal Name"
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                onChange={handleInput}
                value={contact.amount}
                placeholder="Amount"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stage</Form.Label>
              <Form.Control
                value={contact.stage}
                name="stage"
                type="text"
                onChange={handleInput}
                placeholder="Stage"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Closign Date</Form.Label>
              <Form.Control
                value={contact.closign_date}
                type="date"
                name="closign_date"
                onChange={handleInput}
                placeholder="Closign Date"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Account Name</Form.Label>
              <Form.Control
                type="text"
                name="account_name"
                value={contact.account_name}
                onChange={handleInput}
                placeholder="Account Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Name</Form.Label>
              <Form.Control
                value={contact.contact_name}
                type="text"
                name="contact_name"
                onChange={handleInput}
                placeholder="Contact Name"
                autoFocus
              />
            </Form.Group>
          </Form>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="secondary" onClick={eventClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => updateContact()}>
              Save Changes
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
};

export default Deals;
