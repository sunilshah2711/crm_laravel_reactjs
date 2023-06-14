import React from "react";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";
import SidebarTop from "../../components/SidebarTop/SidebarTop";
import Sidebar from "../../components/Sidebar/Sidebar";
import view from "../../assets/images/report/view.svg";
import deleteicon from "../../assets/images/report/deleteicon.svg";
import './Report.scss';



const Report = () => {
    return(
        <>
            <Navbar/>
            <div className='container'>
                <div className='col-12 report-main'>
                    <SidebarTop/>
                    <div className="reportadd">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 contact-sidebar'>
                        <Sidebar/>
                    </div>
                    <div className='col-9 right-sidebar'>
                        <Table className="report-table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>0037F00000JIBczQAH</td>
                                <td>Rose Gonzalez</td>
                                <td>roze@edge.com</td>
                                <td>(512) 757-6000</td>
                                <td>
                                    <div className="action-report">
                                        <span><img src={view} alt="view"/></span>
                                        <span><img src={deleteicon} alt="view"/></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>0037F00000JIBczQAH</td>
                                <td>Rose Gonzalez</td>
                                <td>roze@edge.com</td>
                                <td>(512) 757-6000</td>
                                <td>
                                    <div className="action-report">
                                        <span><img src={view} alt="view"/></span>
                                        <span><img src={deleteicon} alt="view"/></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>0037F00000JIBczQAH</td>
                                <td>Rose Gonzalez</td>
                                <td>roze@edge.com</td>
                                <td>(512) 757-6000</td>
                                <td>
                                    <div className="action-report">
                                        <span><img src={view} alt="view"/></span>
                                        <span><img src={deleteicon} alt="view"/></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>0037F00000JIBczQAH</td>
                                <td>Rose Gonzalez</td>
                                <td>roze@edge.com</td>
                                <td>(512) 757-6000</td>
                                <td>
                                    <div className="action-report">
                                        <span><img src={view} alt="view"/></span>
                                        <span><img src={deleteicon} alt="view"/></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>0037F00000JIBczQAH</td>
                                <td>Rose Gonzalez</td>
                                <td>roze@edge.com</td>
                                <td>(512) 757-6000</td>
                                <td>
                                    <div className="action-report">
                                        <span><img src={view} alt="view"/></span>
                                        <span><img src={deleteicon} alt="view"/></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>0037F00000JIBczQAH</td>
                                <td>Rose Gonzalez</td>
                                <td>roze@edge.com</td>
                                <td>(512) 757-6000</td>
                                <td>
                                    <div className="action-report">
                                        <span><img src={view} alt="view"/></span>
                                        <span><img src={deleteicon} alt="view"/></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>0037F00000JIBczQAH</td>
                                <td>Rose Gonzalez</td>
                                <td>roze@edge.com</td>
                                <td>(512) 757-6000</td>
                                <td>
                                    <div className="action-report">
                                        <span><img src={view} alt="view"/></span>
                                        <span><img src={deleteicon} alt="view"/></span>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <div className="pagination-block">
                            <div className="pagination-entery">
                                Showing 1 to 10 of 25 entries
                            </div>
                            <div className="pagination-steping">
                                <div className="pagination-Previous">
                                    Previous
                                </div>
                                <div className="pagination-step stepstyle">
                                    <span>1</span>
                                </div>
                                <div className="pagination-step stepstyle">
                                    <span>2</span>
                                </div>
                                <div className="pagination-step stepstyle">
                                    <span>3</span>
                                </div>
                                <div className="pagination-next stepstyle">
                                    Next
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Report;