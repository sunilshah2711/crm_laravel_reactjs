import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import all from "../../assets/images/Notification/all.svg";
import direct from "../../assets/images/Notification/direct.svg";
import mentioned from "../../assets/images/Notification/mentioned.svg";
import record from "../../assets/images/Notification/record.svg";
import replay from "../../assets/images/Notification/replay.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import './Notification.scss';

const Notification = () => {
    return(
        <>
            <Navbar/>
            <div className='container notifiaction-section'>
                <div className='row'>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                        <div className='col-3 notifiaction-sidebar'>
                            <p className='notifiaction-title'>Notifications</p>
                            <Nav variant="pills" className="flex-column notification-tablink">
                                <Nav.Item>
                                    <Nav.Link eventKey="all"><img className='link-img' src={all} alt="all"/>All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="direct"><img className='link-img' src={direct} alt="direct"/>Direct</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="mentioned"><img className='link-img' src={mentioned} alt="mentioned"/>Mentioned</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="record_changed"><img className='link-img' src={record} alt="record"/>Record Changed</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="replay"><img className='link-img' src={replay} alt="replay"/>Replay</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className='col-9'>
                            <Tab.Content>
                                <Tab.Pane eventKey="all">First tab content</Tab.Pane>
                                <Tab.Pane eventKey="direct">Second tab content</Tab.Pane>
                                <Tab.Pane eventKey="mentioned">Second tab content</Tab.Pane>
                                <Tab.Pane eventKey="record_changed">Second tab content</Tab.Pane>
                                <Tab.Pane eventKey="replay">Second tab content</Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                </div>
            </div>
        </>
    )
}

export default Notification;