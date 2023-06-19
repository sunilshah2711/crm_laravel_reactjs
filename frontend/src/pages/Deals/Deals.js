import React from "react";
import Table from 'react-bootstrap/Table';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import trueimg from "../../assets/images/Deal/true.svg";
import './Deal.scss';
import DealTop from "../../components/DealTop/DealTop";



const Deals = () => {
    return(
        <>
            <Navbar/>
            <DealTop/>
            <div className='container'>
                <div className='row'>
                    <div className='col-3 contact-sidebar'>
                        <Sidebar/>
                    </div>
                    <div className='col-9 deal-sidebar'>
                        <Table className="deal-table">
                            <thead>
                            <tr>
                                <th>
                                    <span>
                                        <input type="checkbox" class="checkbox" data-form-type=""/>
                                    </span>
                                </th>
                                <th>Deal Name</th>
                                <th>Amount</th>
                                <th>Stage</th>
                                <th>Closign Date</th>
                                <th>Account Name</th>
                                <th>Contact Name</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="deal-table-checkbox">
                                            <span className="checkbox-deal">
                                                <input type="checkbox" className="checkbox"/>
                                            </span>
                                            <div className="deal-date-block">
                                                <span className="deal-trueimg">
                                                    <img src={trueimg} alt="true"/>
                                                </span>
                                                <span className="deal-date">
                                                    May 13, 2020
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Truhlar And Truhlar Attys</td>
                                    <td>$ 60.000.00</td>
                                    <td>Identify Decision Makers</td>
                                    <td>May 14, 2020</td>
                                    <td>Truhlar And Truhlar (Sample)</td>
                                    <td>Sage Wieser (Sample)</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deals;