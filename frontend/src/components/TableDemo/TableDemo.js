import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "./TableDemo.scss";
const TableColumn = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  return (
    <>
      <div class="container demotable">
        <div class="table-responsive">
          <Table class="table accordion">
            <thead>
              <tr>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Mobile</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} onClick={() => setToggle(!toggle)}>
                  {toggle ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon icon={faCaretDown} />
                  )}
                  <span className="ms-3">Katrodiya</span>
                </td>
              </tr>
              {toggle && (
                <>
                  <tr>
                    <td></td>
                    <td>Harshil</td>
                    <td>12345</td>
                    <td>admin@gmail.com</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Harshil</td>
                    <td>12345</td>
                    <td>admin@gmail.com</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Harshil</td>
                    <td>12345</td>
                    <td>admin@gmail.com</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Harshil</td>
                    <td>12345</td>
                    <td>admin@gmail.com</td>
                  </tr>
                </>
              )}

              <tr>
                <td colSpan={5} onClick={() => setToggle1(!toggle1)}>
                  {toggle1 ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon icon={faCaretDown} />
                  )}
                  <span className="ms-3">Malaviya</span>
                </td>
              </tr>
              {toggle1 && (
                <>
                  <tr>
                    <td></td>
                    <td>Harshil</td>
                    <td>12345</td>
                    <td>admin@gmail.com</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Harshil</td>
                    <td>12345</td>
                    <td>admin@gmail.com</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Harshil</td>
                    <td>12345</td>
                    <td>admin@gmail.com</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Harshil</td>
                    <td>12345</td>
                    <td>admin@gmail.com</td>
                  </tr>
                </>
              )}

              <tr>
                <td colSpan={5} onClick={() => setToggle2(!toggle2)}>
                  {toggle2 ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon icon={faCaretDown} />
                  )}
                  <span className="ms-3">Lathiya</span>
                </td>
              </tr>
              {toggle2 && (
                <>
                  <tr>
                    <td></td>
                    <td>Harshil</td>
                    <td>12345</td>
                    <td>admin@gmail.com</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Harshil</td>
                    <td>12345</td>
                    <td>admin@gmail.com</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Harshil</td>
                    <td>12345</td>
                    <td>admin@gmail.com</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Harshil</td>
                    <td>12345</td>
                    <td>admin@gmail.com</td>
                  </tr>
                </>
              )}

              {/* <tr>
                <td colSpan={5}>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Katrodiya</Accordion.Header>
                      <Accordion.Body>
                        <Table striped bordered hover class="table">
                          <thead>
                            <tr>
                              <th>Last Name</th>
                              <th>Heading 1</th>
                              <th>Heading 2</th>
                              <th>Heading 3</th>
                              <th>Heading 4</th>
                            </tr>
                          </thead>
                          <tr>
                            <td colSpan={2}>Katrodiya</td>
                            <td>Harshil</td>
                            <td>12345</td>
                            <td>admin@gmail.com</td>
                            <td>admin@gmail.com</td>
                          </tr>
                          <tr colSpan={4}>
                            <td></td>
                            <td>Jemish</td>
                            <td>12345</td>
                            <td>admin@gmail.com</td>
                          </tr>
                          <tr colSpan={4}>
                            <td></td>
                            <td>Darshak</td>
                            <td>12345</td>
                            <td>admin@gmail.com</td>
                          </tr>
                          <tr colSpan={4}>
                            <td></td>
                            <td>Sunil</td>
                            <td>12345</td>
                            <td>admin@gmail.com</td>
                          </tr>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </td>
              </tr> */}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default TableColumn;
