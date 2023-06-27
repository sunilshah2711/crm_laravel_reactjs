import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Sidebar.scss';


const Sidebar = () => {
    return(
        <>
                <Tabs
                defaultActiveKey="conditions"
                id="fill-tab-example"
                className="mb-3"
                fill>
                    <Tab eventKey="conditions" title="Conditions">
                        <div className='filter-inner'>
                            <p className='filter-title'>Smart Properties</p>
                            <div className="ProjectFilter">
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Unassigned"/>
                                    <p>Unassigned</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Unread"/>
                                    <p>Unread</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Unchanged"/>
                                    <p>Unchanged</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="No Next Activity"/>
                                    <p>No Next Activity</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="No Activity - All Time "/>
                                    <p>No Activity - All Time </p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="No Activity - Last 7 Days"/>
                                    <p>No Activity - Last 7 Days</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="No Activity - Last 30 Days"/>
                                    <p>No Activity - Last 30 Days</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Some Activity - Last 7 Days"/>
                                    <p>Some Activity - Last 7 Days</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Some Activity - Last 30 Days"/>
                                    <p>Some Activity - Last 30 Days</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="No Progress Updates - Last 7 Days"/>
                                    <p>No Progress Updates - Last 7 Days</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="No Progress Updates - Last 30 Days"/>
                                    <p>No Progress Updates - Last 30 Days</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Close Date - This Month"/>
                                    <p>Close Date - This Month</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Other"/>
                                    <p>Other</p>
                                </div>
                            </div>
                        </div>
                        <div className='filter-inner'>
                            <p className='filter-title'>Contact Properties</p>
                            <div className="ProjectFilter">
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Last Name"/>
                                    <p>Last Name</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Contact ID"/>
                                    <p>Contact ID</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Deleted"/>
                                    <p>Deleted</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Master Record ID"/>
                                    <p>Master Record ID</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Account ID"/>
                                    <p>Account ID</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="First Name"/>
                                    <p>First Name</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Solutation"/>
                                    <p>Solutation</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Full Name"/>
                                    <p>Full Name</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Other Street"/>
                                    <p>Other Street</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Other"/>
                                    <p>Other</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Other"/>
                                    <p>Other</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Other"/>
                                    <p>Other</p>
                                </div>
                                <div className='projectfiltercheckbox'>
                                    <input type="checkbox" name="Other"/>
                                    <p>Other</p>
                                </div>
                            </div>
                        </div>
                        <div className="projectFilter_filtersbutton">
                            <button>Run</button>
                            <button>Save</button>
                            <button>Save As</button>
                        </div>
                    </Tab>
                    <Tab eventKey="groups" title="Groups">
                    <div className='filter-inner'>
                        <p className='filter-title'>Contact Properties</p>
                        <div className="ProjectFilter">
                        <div className='projectfiltercheckbox'>
                            <input type="checkbox" name="Last Name"/>
                            <p>Last Name</p>
                        </div>
                        <div className='projectfiltercheckbox'>
                            <input type="checkbox" name="Contact ID"/>
                            <p>Contact ID</p>
                        </div>
                        <div className='projectfiltercheckbox'>
                            <input type="checkbox" name="Deleted"/>
                            <p>Deleted</p>
                        </div>
                        <div className='projectfiltercheckbox'>
                            <input type="checkbox" name="Master Record ID"/>
                            <p>Master Record ID</p>
                        </div>
                        <div className='projectfiltercheckbox'>
                            <input type="checkbox" name="Account ID"/>
                            <p>Account ID</p>
                        </div>
                        <div className='projectfiltercheckbox'>
                            <input type="checkbox" name="First Name"/>
                            <p>First Name</p>
                        </div>
                        <div className='projectfiltercheckbox'>
                            <input type="checkbox" name="Solutation"/>
                            <p>Solutation</p>
                        </div>
                        <div className='projectfiltercheckbox'>
                            <input type="checkbox" name="Full Name"/>
                            <p>Full Name</p>
                        </div>
                        <div className='projectfiltercheckbox'>
                            <input type="checkbox" name="Other Street"/>
                            <p>Other Street</p>
                        </div>
                        <div className='projectfiltercheckbox'>
                            <input type="checkbox" name="Other"/>
                            <p>Other</p>
                        </div>
                        <div className='projectfiltercheckbox'>
                            <input type="checkbox" name="Other"/>
                            <p>Other</p>
                        </div>
                        <div className='projectfiltercheckbox'>
                            <input type="checkbox" name="Other"/>
                            <p>Other</p>
                        </div>
                        <div className='projectfiltercheckbox'>
                            <input type="checkbox" name="Other"/>
                            <p>Other</p>
                        </div>
                        </div>
                    </div>
                    </Tab>
                    <Tab eventKey="columns" title="Columns">
                    Tab content for Loooonger Tab
                    </Tab>
                </Tabs>
                
        </>
    )
}

export default Sidebar;