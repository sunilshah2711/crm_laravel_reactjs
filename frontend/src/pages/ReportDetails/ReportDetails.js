import React from 'react';
import detailimage from "../../assets/images/reportdetail/detailimage.png";
import Dropdown from 'react-bootstrap/Dropdown';
import tag from "../../assets/images/reportdetail/tag.svg";
import dot from "../../assets/images/reportdetail/dot.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import leftarrow from "../../assets/images/reportdetail/leftarrow.svg";
import rightarrow from "../../assets/images/reportdetail/rightarrow.svg";
import call from "../../assets/images/reportdetail/call.svg";
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './ReportDetails.scss';



const ReportDetails = () =>{
  return (
    <>
       <div className='detailheader'>
            <div className='container'>
                <div className='detailmain'>
                    <div className='detaildatablock'>
                        <div className='detailimage'>
                            <img src={detailimage} width="48" height="48" alt='detailimage'/>
                        </div>
                        <div className='detaildata'>
                            <p className='detaildata-name'>Kris Marrier (Sample) - <span>King(Sample)</span></p>
                            <div className='detailtag'>
                                <img src={tag} alt='tag'/>
                                <span>Add Tags</span>
                            </div>
                        </div>
                    </div>
                    <div className='detailedit'>
                        <button className='buttonsend'>Send Email</button>
                        <button className='buttonedit'>Edit</button>
                        <Dropdown className="dot-dropdown">
                            <Dropdown.Toggle id="dropdown-autoclose-true">
                                <img src={dot} alt='Dot'/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className='report-arrow'>
                            <img src={leftarrow} alt='leftarrow'/>
                        </div>
                        <div className='report-arrow'>
                            <img src={rightarrow} alt='leftarrow'/>
                        </div>
                    </div>
                </div>
            </div>     
       </div>
       <div className='detailmain-content'>
            <div className='container'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="related_list">
                    <Row>
                        <Col sm={2} className='tab-detail'>
                            <Nav variant="pills" className="tab-detail-pills flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="related_list">Related List</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="notes">Notes</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="attachments">Attachments</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="deals">Deals</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="open_activities">Open Activities</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="closed_activities">Closed Activities</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="invited_meetings">Invited Meetings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="emails">Emails</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="campaigns">Campaigns</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="social">Social</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="reporting_comtacts">Reporting Comtacts</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10} className='detailtab-block'>
                            <Tab.Content className='detailtab-content'>
                                <Tab.Pane eventKey="related_list" className="detailtab-fadcontent">
                                    <Tabs
                                    defaultActiveKey="overview"
                                    id="justify-tab-example"
                                    className="detailtab-panel"
                                    justify
                                    >
                                        <Tab className='detailtab-fade' eventKey="overview" title="Overview">
                                            <div className='detailtab-inner-block'>
                                                <div className='detailtab-inner-content'>
                                                    <div className='detail-information'>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Contact Owner</p>
                                                            <p className='information-data'>Jemish Malaviya</p>  
                                                        </div>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Email</p>
                                                            <p className='information-data'>
                                                                <a href='/' className='information-style'>leota-dilliard@hotmail.com</a>
                                                            </p>  
                                                        </div>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Phone</p>
                                                            <p className='information-data'><span className='detail-icon'><img src={call} alt='call'/></span>555-555-5555</p>  
                                                        </div>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Mobile</p>
                                                            <p className='information-data'><span className='detail-icon'><img src={call} alt='call'/></span>555-555-5555</p>  
                                                        </div>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Department</p>
                                                            <p className='information-data'>Management</p>  
                                                        </div>
                                                    </div>        
                                                </div>
                                            </div>
                                            <div className='detailtab-inner-block'>
                                                <div className='detailtab-hometitle'>
                                                    Next Action
                                                </div>
                                                <div className='detailtab-approval'>
                                                    <div className='detailtab-approvalcontent'>
                                                        <p className='approvalcontent-date'>FEB 3</p>
                                                        <p className='approvalcontent-desc'>Get Approval from Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='detailtab-detailblock'>
                                                <div className='detailtab-smalltitle'>
                                                    Hide Details
                                                </div>
                                                <div className='detailtab-inner-block'>
                                                    <div className='detailtabwrap'>
                                                        <div className='tab-inner-title'>Contact Information</div>
                                                        <div className='detailtab-inner-content'>
                                                            <div className='detail-information'>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Contact Owner</p>
                                                                    <p className='information-data'>Jemish Malaviya</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Account Name</p>
                                                                    <p className='information-data'>
                                                                        <span className='information-style'>Commercial Press (Sample)</span>
                                                                    </p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Email</p>
                                                                    <p className='information-data'>
                                                                        <a href='/' className='information-style'>leota-dilliard@hotmail.com</a>
                                                                    </p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Phone</p>
                                                                    <p className='information-data'><span className='detail-icon'><img src={call} alt='call'/></span>555-555-5555</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Other Phone</p>
                                                                    <p className='information-data'>---</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Mobile</p>
                                                                    <p className='information-data'><span className='detail-icon'><img src={call} alt='call'/></span>555-555-5555</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Assistant</p>
                                                                    <p className='information-data'>---</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Create By</p>
                                                                    <p className='information-data'>
                                                                        Jemish Malaviya
                                                                        <span className='information-data-date'>Wed,2 Feb 2022 05:17PM</span>
                                                                    </p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Modified By</p>
                                                                    <p className='information-data'>
                                                                        Jemish Malaviya
                                                                        <span className='information-data-date'>Wed,2 Feb 2022 05:17PM</span>
                                                                    </p>  
                                                                </div>
                                                            </div> 
                                                            <div className='detail-information'>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Lead Source</p>
                                                                    <p className='information-data'>Web Download</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Contact Name</p>
                                                                    <p className='information-data'>
                                                                        <a href='/'>Leota Dilliard (Sample)</a>
                                                                    </p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Title</p>
                                                                    <p className='information-data'>Information Systems Manager</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Department</p>
                                                                    <p className='information-data'>Information Systems Manager</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Home Phone</p>
                                                                    <p className='information-data'>---</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Fax</p>
                                                                    <p className='information-data'>---</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Date of Birth</p>
                                                                    <p className='information-data'>---</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Asst Phone</p>
                                                                    <p className='information-data'>---</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Email Opt Out</p>
                                                                    <p className='information-data'>---</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Skype ID</p>
                                                                    <p className='information-data'><span className='information-style'>leota_chill</span></p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Secondary Email</p>
                                                                    <p className='information-data'>---</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Twitter</p>
                                                                    <p className='information-data'><span className='information-style'>leotachill_sample</span></p>  
                                                                </div>
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div className='detailtabwrap'>
                                                        <div className='tab-inner-title'>
                                                            <span>Address Information</span>
                                                            <button className='tab-button'>Locate Map</button>
                                                        </div>
                                                        <div className='detailtab-inner-content'>
                                                            <div className='detail-information'>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Mailling Street</p>
                                                                    <p className='information-data'>7 W jackson Blvd</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Mailling City</p>
                                                                    <p className='information-data'>San Jose</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Mailling State</p>
                                                                    <p className='information-data'>CA</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Mailling Zip</p>
                                                                    <p className='information-data'>95111</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Mailling Country</p>
                                                                    <p className='information-data'>United States</p>  
                                                                </div>
                                                            </div> 
                                                            <div className='detail-information'>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Other Street</p>
                                                                    <p className='information-data'>---</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Other City</p>
                                                                    <p className='information-data'>---</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Other State</p>
                                                                    <p className='information-data'>---</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Other Zip</p>
                                                                    <p className='information-data'>---</p>  
                                                                </div>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Other Country</p>
                                                                    <p className='information-data'>---</p>  
                                                                </div>
                                                            </div>        
                                                        </div>
                                                    </div>
                                                    <div className='detailtabwrap'>
                                                        <div className='tab-inner-title'>
                                                            <span>Description Information</span>
                                                        </div>
                                                        <div className='detailtab-inner-content'>
                                                            <div className='detail-information'>
                                                                <div className='detail-information-data'>
                                                                    <p className='information-title'>Description</p>
                                                                    <p className='information-data'>---</p>  
                                                                </div>
                                                            </div>      
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='detailtab-detailblock detailtab-note'>
                                                <div className='detailtab-smalltitle'>
                                                    Notes
                                                    <div className='detailtab-dropdown'>
                                                        <Dropdown data-bs-theme="dark">
                                                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                                                Recent Last
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1" active>
                                                                Action
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className='detailtab-inner-block'>
                                                    <div className='detailtabwrap'>
                                                        <div className='tab-inner-title'>
                                                            <span>Description Information</span>
                                                        </div>
                                                        <div className='detailtab-input'>
                                                            <input type="text" id="note" name="noter" placeholder='Add a note...' className='form-control' />      
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='detailtab-detailblock detailtab-note'>
                                                <div className='detailtab-smalltitle'>
                                                    Attachment
                                                    <div className='detailtab-dropdown'>
                                                        <Dropdown data-bs-theme="dark">
                                                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                                                Attach
                                                            </Dropdown.Toggle>
    
                                                            <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1" active>
                                                                Action
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className='detailtab-inner-block'>
                                                    <div className='detailtabwrap'>
                                                        <p className='attechment-title'>No Attachment</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='detailtab-detailblock detailtab-note'>
                                                <div className='detailtab-smalltitle'>
                                                    Deals
                                                    <div className='detailtab-dropdown'>
                                                        <button className='btn-deal'>New Deal</button>
                                                    </div>
                                                </div>
                                                <div className='detailtab-inner-block'>
                                                    <div className='detailtabwrap'>
                                                        <div className='detaildeal-block'>
                                                            <Table className="reportdetail-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Deal Name</th>
                                                                        <th>Deal Name</th>
                                                                        <th>Deal Name</th>
                                                                        <th>Deal Name</th>
                                                                        <th>Deal Name</th>
                                                                        <th>Deal Name</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Commercial Press</td>
                                                                        <td>$45.000.00</td>
                                                                        <td>Closed Lost</td>
                                                                        <td>0</td>
                                                                        <td>Feb 4,2022</td>
                                                                        <td>Existing Business</td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='detailtab-detailblock detailtab-note'>
                                                <div className='detailtab-smalltitle'>
                                                    Open Activities
                                                    <div className='detailtab-dropdown'>
                                                        <Dropdown data-bs-theme="dark">
                                                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                                                Add New
                                                            </Dropdown.Toggle>
    
                                                            <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1" active>
                                                                Action
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className='detailtab-inner-block'>
                                                    <div className='detailtabwrap'>
                                                        <div className='activites-block'>
                                                            <div className='activies-titleblock'>Open Tasks  <span>1</span></div>
                                                            <div className='activies-titleblock'>Open Meetings <span>0</span></div>
                                                            <div className='activies-titleblock'>Open Calls <span>0</span></div>
                                                        </div>
                                                        <div className='activites-content-block'>
                                                            <div className='activites-innerblock'>
                                                                <div className='activites-contentblock'>
                                                                    <p className='activites-approval'>Get Approval from manager</p>
                                                                    <p className='activites-date'>Feb 3, 2022</p>
                                                                    <p className='activites-user'><span><FontAwesomeIcon icon={faUser} /></span>Jemish Malaviya</p>
                                                                </div>
                                                                <div className='activites-contentblock'>
                                                                    <div className='activites-detail'>
                                                                        <div className='activites-status'>Status</div>
                                                                        <div className='activites-progress'>: In Progress</div>
                                                                    </div>
                                                                </div>
                                                                <div className='activites-contentblock'>
                                                                    <div className='activites-detail'>
                                                                        <div className='activites-status'>Priority</div>
                                                                        <div className='activites-progress'>: Normal</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='activites-innerblock'>
                                                                <div className='activites-norecord'>
                                                                    <p>No records found</p>
                                                                </div>
                                                            </div>
                                                            <div className='activites-innerblock'>
                                                                <div className='activites-norecord'>
                                                                    <p>No records found</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='detailtab-detailblock detailtab-note'>
                                                <div className='detailtab-smalltitle'>
                                                    Closed Activities
                                                </div>
                                                <div className='detailtab-inner-block'>
                                                    <div className='detailtabwrap'>
                                                        <p className='attechment-title'>No records found</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='detailtab-detailblock detailtab-note'>
                                                <div className='detailtab-smalltitle'>
                                                    Invited Meetings
                                                </div>
                                                <div className='detailtab-inner-block'>
                                                    <div className='detailtabwrap'>
                                                        <p className='attechment-title'>No records found</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='detailtab-detailblock detailtab-note'>
                                                <div className='detailtab-smalltitle'>
                                                    Emails
                                                    <div className="detailtab-dropdown">
                                                        <button className="btn-deal">
                                                        Compose Email
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className='detailtab-inner-block'>
                                                    <div className='detailtabwrap'>
                                                        <div className='email-tab-block'>
                                                            <Tabs
                                                            defaultActiveKey="home"
                                                            transition={false}
                                                            id="noanim-tab-example"
                                                            className="email-tab"
                                                            >
                                                                <Tab className='email-tabcontent' eventKey="home" title="Home">
                                                                    Tab content for Home
                                                                </Tab>
                                                                <Tab className='email-tabcontent' eventKey="profile" title="Profile">
                                                                    Tab content for Profile
                                                                </Tab>
                                                                <Tab className='email-tabcontent' eventKey="contact" title="Contact">
                                                                    Tab content for Contact
                                                                </Tab>
                                                            </Tabs>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='detailtab-detailblock detailtab-note'>
                                                <div className='detailtab-smalltitle'>
                                                    Campaigns
                                                </div>
                                                <div className='detailtab-inner-block'>
                                                    <div className='detailtabwrap'>
                                                        <p className='attechment-title'>No records found</p>
                                                        <span className='campaigns-btn'>Add Campaigns</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </Tab>
                                        <Tab className='' eventKey="timeline" title="Timeline">
                                            Tab content for Profile
                                        </Tab>
                                    </Tabs>
                                </Tab.Pane>
                                <Tab.Pane eventKey="notes">
                                    Second tab content
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    </>
  );
}

export default ReportDetails;
