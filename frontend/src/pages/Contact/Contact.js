import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Navbar from "../../components/Navbar/Navbar";
import "./Contact.scss";
// import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarTop from "../../components/SidebarTop/SidebarTop";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";

const Contact = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const authHeader = useAuthHeader();

  const [FilterData, setFilterData] = useState({});

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
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Authorization: authHeader(),
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

  useEffect(() => {
    console.log(`/contact`);
    setLoading(true);
    instance
      .get(`/contact`)
      .then(function (response) {
        setUsers(response.data.contacts);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="col-12 contactcount">
          <SidebarTop />
          <div className="contact-total">Total : 1</div>
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
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Lead Source</th>
                      <th>Referral Code</th>
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
                        <td>{user.full_name}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>{user.Lead_Source}</td>
                        <td>{user.Referral_Code}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
