import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import filter from "../../assets/images/Deal/filter.svg";
import menu from "../../assets/images/Deal/menu.svg";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import axios from "axios";
import rightarrow from "../../assets/images/Deal/rightarrow.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import leftarrow from "../../assets/images/Deal/leftarrow.svg";
import "./DealTop.scss";

const DealTop = ({ onData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [filed, setFiled] = useState({
    id: "",
    deal_name: "",
    amount: "",
    stage: "",
    closign_date: "",
    account_name: "",
    contact_name: "",
  });

  console.log(filed);

  const handleInput = (e) => {
    setFiled({ ...filed, [e.target.name]: e.target.value });
  };

  const sendDataToParent = (e) => {
    onData(e);
  };

  const saveContact = (e) => {
    // if (filed.full_name !== "" && filed.name !== "" && filed.first_name !== "" && filed.last_name !== "" && filed.email !== "" && filed.mobile !== "" && filed.Lead_Source !== "" && filed.Referral_Code !== ""){
    const data = {
      records: [
        {
          fields: {
            some_activity_last_7_days: 0,
            no_next_activity: 0,
            updated_at: "2023-06-21 13:23:59",
            unread: 1,
            account_name: filed.account_name,
            no_progress_updates_last_30_days: 1,
            no_activity_last_7_days: 1,
            master_record_id: "NULL",
            no_activity_last_30_days: 1,
            unassigned: 1,
            deleted: 0,
            some_activity_last_30_days: 0,
            account_id: "NULL",
            closign_date: filed.closign_date,
            close_date_this_month: 1,
            no_progress_updates_last_7_days: 1,
            deal_name: filed.deal_name,
            deal_owner: "Camron Nikolaus",
            id: 138,
            no_activity_all_time: 0,
            created_at: "2023-06-21 13:23:59",
            unchanged: 0,
            contact_name: filed.contact_name,
            amount: Number(filed.amount),
            stage: filed.stage,
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
      .post(`/tbljbiSUSv8w6G345`, data)
      .then((res) => {
        console.log(res);
        toast.success("Record Added Successfully");
        sendDataToParent(true);
        setShow(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    // }else{
    //     alert("Please fill all fields")
    // }
  };
  return (
    <>
      <div className="dealtopbar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="dealtop-create">
                <div className="dealtop-filter">
                  <div className="dealfilter-img">
                    <img src={filter} alt="filter" />
                  </div>
                  <div className="dealfilter-dropdown">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-button-dark-example1">
                        All Deals
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" active>
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="dealtop-rightfilter">
                  <div className="dealmenu-menudropdown">
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="secondary"
                      >
                        <img src={menu} alt="menu" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" active>
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="dealmenu-createdropdown">
                    <button onClick={handleShow}>Create Deal</button>
                    {/* <Dropdown>
                                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                                Create Deal
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1" active>
                                                    Action
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown> */}
                  </div>
                  <div className="dealmenu-actiondropdown">
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="secondary"
                      >
                        Actions
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" active>
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <div className="dealtop-record">
                <div className="dealtop-totalrecord">
                  Total Records <span>10</span>
                </div>
                <div className="dealtop-record-pagination">
                  <div className="dealtop-record-dropdown">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-button-dark-example1">
                        10 Records Per Page
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" active>
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="record-page-data">1 - 10</div>
                  <div className="record-arrow">
                    <img src={leftarrow} alt="leftarrow" />
                  </div>
                  <div className="record-arrow">
                    <img src={rightarrow} alt="rightarrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Deal</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Deal Name</Form.Label>
              <Form.Control
                type="text"
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
                placeholder="Amount"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stage</Form.Label>
              <Form.Control
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
                onChange={handleInput}
                placeholder="Account Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Name</Form.Label>
              <Form.Control
                type="text"
                name="contact_name"
                onChange={handleInput}
                placeholder="Contact Name"
                autoFocus
              />
            </Form.Group>
          </Form>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => saveContact()}>
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

export default DealTop;
