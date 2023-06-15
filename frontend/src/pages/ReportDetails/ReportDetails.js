import React from 'react';
import detailimage from "../../assets/images/reportdetail/detailimage.png";
import Dropdown from 'react-bootstrap/Dropdown';
import tag from "../../assets/images/reportdetail/tag.svg";
import dot from "../../assets/images/reportdetail/dot.svg";
import leftarrow from "../../assets/images/reportdetail/leftarrow.svg";
import rightarrow from "../../assets/images/reportdetail/rightarrow.svg";
import call from "../../assets/images/reportdetail/call.svg";
import Col from 'react-bootstrap/Col';
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
                                                                <a href='/'>leota-dilliard@hotmail.com</a>
                                                            </p>  
                                                        </div>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Phone</p>
                                                            <p className='information-data'><span><img src={call} alt='call'/></span>555-555-5555</p>  
                                                        </div>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Mobile</p>
                                                            <p className='information-data'><span><img src={call} alt='call'/></span>555-555-5555</p>  
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
                                                                <a href='/'>leota-dilliard@hotmail.com</a>
                                                            </p>  
                                                        </div>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Phone</p>
                                                            <p className='information-data'><span><img src={call} alt='call'/></span>555-555-5555</p>  
                                                        </div>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Mobile</p>
                                                            <p className='information-data'><span><img src={call} alt='call'/></span>555-555-5555</p>  
                                                        </div>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Department</p>
                                                            <p className='information-data'>Management</p>  
                                                        </div>
                                                    </div> 
                                                    <div className='detail-information'>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Contact Owner</p>
                                                            <p className='information-data'>Jemish Malaviya</p>  
                                                        </div>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Email</p>
                                                            <p className='information-data'>
                                                                <a href='/'>leota-dilliard@hotmail.com</a>
                                                            </p>  
                                                        </div>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Phone</p>
                                                            <p className='information-data'><span><img src={call} alt='call'/></span>555-555-5555</p>  
                                                        </div>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Mobile</p>
                                                            <p className='information-data'><span><img src={call} alt='call'/></span>555-555-5555</p>  
                                                        </div>
                                                        <div className='detail-information-data'>
                                                            <p className='information-title'>Department</p>
                                                            <p className='information-data'>Management</p>  
                                                        </div>
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
