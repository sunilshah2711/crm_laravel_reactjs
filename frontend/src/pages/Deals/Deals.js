import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Navbar from "../../components/Navbar/Navbar";
import Button from "react-bootstrap/Button";
import dateFormat from "dateformat";import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import trueimg from "../../assets/images/Deal/true.svg";
import editbutton from "../../assets/images/Deal/editbutton.svg";
import "./Deal.scss";
import DealTop from "../../components/DealTop/DealTop";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import TanTable from "../../components/Tabel/Tabel";
import TableColumn from "../../components/Tabel/TableColumn";
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
  // const eventShow = () => setOpen(true);
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
    if (childData === true) {
      setChildData(false);
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

  const defaultColumns = [
    {
      accessorKey: "deal_name",
      id: "deal_name",
      header: "Deal Name",
    },
    {
      accessorKey: "amount",
      id: "amount",
      header: "Amount",
    },
    {
      accessorKey: "stage",
      id: "stage",
      header: "Stage",
    },
    {
      accessorKey: "closign_date",
      id: "closign_date",
      header: "Closign Date",
    },
    {
      accessorKey: "account_name",
      id: "account_name",
      header: "Account Name",
    },
    {
      accessorKey: "contact_name",
      id: "contact_name",
      header: "Contact Name",
    },
    {
      accessorKey: "deal_owner",
      id: "deal_owner",
      header: "Deal Owner",
    },
    {
      accessorKey: "action",
      id: "action",
      header: "Action",
      cell: (value) => {
        return (
          <div className="action-report">
            <Button
              variant="primary"
              onClick={() => getIdByButton(value.row.original.id)}
            >
              <span>
                <img src={editbutton} alt="editbutton" />
              </span>
            </Button>
          </div>
        );
      },
    },
  ];

  function moveFieldsOutside(records) {
    const newRecords = [];
    for (const record of records) {
      const { id, fields } = record;
      const { ...otherFields } = fields;
      otherFields.id = id;
      newRecords.push({ id, ...otherFields });
    }
    return newRecords;
  }

  const newData = moveFieldsOutside(users);

  console.log("new", newData);

  const [filteredRecords, setFilteredRecords] = useState([]);
  const [filterKeys, setFilterKeys] = useState([]);

  const handleInputChange = (event) => {
    const key = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      setFilterKeys((prevKeys) => [...prevKeys, key]);
    } else {
      setFilterKeys((prevKeys) => prevKeys.filter((k) => k !== key));
    }
  };

  const handleRunButtonClick = () => {
    const filteredData = newData.filter((record) => {
      return filterKeys.every((key) => record[key] === 1);
    });

    setFilteredRecords(filteredData);
  };

  const handleResetButtonClick = () => {
    setFilteredRecords([]);
    setFilterKeys([]);

    // Uncheck all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const [colData, setColData] = useState("");
  const [colRefatch, setColRefatch] = useState(false);

  // console.log("colData", colData);
  useEffect(() => {
    if (colRefatch === true) {
      setColRefatch(false);
    } else {
      setColRefatch(true);
    }
  }, [colData, colRefatch]);

  return (
    <>
      <Navbar />
      <DealTop onData={handleChildData} />
      <div className="container">
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
                  {colData && <TableColumn table={colData} />}
                </div>
                <div className="projectFilter_filtersbutton">
                  <button onClick={handleRunButtonClick}>Run</button>
                  <button onClick={handleResetButtonClick}>Reset</button>
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
                <div className="filter-inner">
                  <p className="filter-title">Contact Properties</p>
                  {colData && <TableColumn table={colData} />}
                </div>
              </Tab>
            </Tabs>
          </div>
          <div className="col-9 deal-sidebar">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>
                <TanTable
                  tableData={
                    filteredRecords.length > 0 ? filteredRecords : newData
                  }
                  tableColumn={defaultColumns}
                  tableCol={(e) => setColData(e)}
                  reftechCol={colRefatch}
                />
              </>
            )}
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
