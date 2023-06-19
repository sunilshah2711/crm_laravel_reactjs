import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import all from "../../assets/images/Notification/all.svg";
import direct from "../../assets/images/Notification/direct.svg";
import mentioned from "../../assets/images/Notification/mentioned.svg";
import record from "../../assets/images/Notification/record.svg";
import replay from "../../assets/images/Notification/replay.svg";
import tag from "../../assets/images/Notification/tag.svg";
import inbox from "../../assets/images/Notification/inbox.svg";
import bottomarrow from "../../assets/images/Notification/bottomarrow.svg";
import toparrow from "../../assets/images/Notification/toparrow.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import './Notification.scss';
import ToggleSwitch from '../../components/SwitchToggle/ToggleSwitch';

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
                                <div className='products-tabtitle'>Products</div>
                                <Nav.Item>
                                    <Nav.Link eventKey="allproduct"><img className='link-img' src={tag} alt="mentioned"/>All Products</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="podamium"><img className='link-img' src={tag} alt="record"/>Podamium</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="conflurnce"><img className='link-img' src={tag} alt="replay"/>Conflurnce</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className='col-9'>
                            <Tab.Content>
                                <Tab.Pane eventKey="all" className='alltab-content'>
                                    <div className='alltab-contentinner-block'>
                                        <div className='notification-readblock'>
                                            <div className='notification-readtitle'>Today</div>
                                            <div className='notification-checkbox'>
                                                <p className='read-checkbox-title'>Only show unread</p>
                                                <ToggleSwitch/>
                                            </div>
                                        </div>
                                        <div className='notification-inbox'>
                                            <div className='notification-inboxconatent'>
                                                <img src={inbox} className='inboxconatent-img' alt='inbox-img'/>
                                                <div className='inbox-text'>You’ve <span>read</span> all your notifications from the last 30 days.</div>
                                            </div>
                                            <div className='inbox-shortcut'>
                                                <div className='inbox-shortcut-tip'>
                                                    <div className='inbox-shortcuttip-content'>
                                                        <p className='inbox-tip'>Pro tip:</p>
                                                        <p className='inbox-press'>press</p>
                                                        <div className='inbox-bottomarrow'>
                                                            <img src={bottomarrow} className='inboxconatent-img' alt='bottomarrow-img'/>
                                                        </div>
                                                        <div className='inbox-toparrow'>
                                                            <img src={toparrow} className='inboxconatent-img' alt='toparrow-img'/>
                                                        </div>
                                                        <p className='inbox-move'>to move through notifications.</p>
                                                    </div>
                                                    <p className='inbox-all'>See all shortcuts</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="direct">Second tab content</Tab.Pane>
                                <Tab.Pane eventKey="mentioned">mentioned tab content</Tab.Pane>
                                <Tab.Pane eventKey="record_changed">record_changed tab content</Tab.Pane>
                                <Tab.Pane eventKey="replay">replay tab content</Tab.Pane>
                                <Tab.Pane eventKey="allproduct">allproduct tab content</Tab.Pane>
                                <Tab.Pane eventKey="podamium">podamium tab content</Tab.Pane>
                                <Tab.Pane eventKey="conflurnce">conflurnce tab content</Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                </div>
            </div>
        </>
    )
}

export default Notification;