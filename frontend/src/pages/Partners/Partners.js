import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import filter from "../../assets/images/Partners/filter.svg";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import {
  faDownload,
  faMagnifyingGlass,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "./Partners.scss";

const Partners = () => {
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
            <button className="add-partner-btn">
              <span>Add a new partner</span>
            </button>
          </div>
        </div>
        <Tabs
          defaultActiveKey="all"
          id="uncontrolled-tab-example"
          className="mb-3 partner-tab"
        >
          <Tab eventKey="all" title="All">
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
                <Button className="filter-partners-btn">
                  <span className="filter-icon">
                    <img src={filter} alt="filter" />
                  </span>
                  <span className="filter-text">Show filters (1)</span>
                </Button>
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
          </Tab>
          <Tab eventKey="my_partners" title="My Partners">
            Tab content for Profile
          </Tab>
          <Tab eventKey="pending" title="Pending Applications">
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Partners;
