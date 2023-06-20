import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import filter from "../../assets/images/Deal/filter.svg";
import menu from "../../assets/images/Deal/menu.svg";
import rightarrow from "../../assets/images/Deal/rightarrow.svg";
import leftarrow from "../../assets/images/Deal/leftarrow.svg";
import './DealTop.scss';
const DealTop = () => {
    return(
        <>
            <div className="dealtopbar">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="dealtop-create">
                                <div className="dealtop-filter">
                                    <div className="dealfilter-img">
                                        <img src={filter} alt="filter"/>
                                    </div>
                                    <div className="dealfilter-dropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-button-dark-example1">
                                                All Deals
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
                                <div className="dealtop-rightfilter">
                                    <div className="dealmenu-menudropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                                <img src={menu} alt="menu"/>
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
                                    <div className="dealmenu-createdropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                                Create Deal
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
                                    <div className="dealmenu-actiondropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                                Actions
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
                            </div>
                            <div className="dealtop-record">
                                <div className="dealtop-totalrecord">
                                    Total Records <span>10</span>
                                </div>
                                <div className="dealtop-record-pagination">
                                    <div className="dealtop-record-dropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-button-dark-example1">
                                                10 Records Per Page
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
                                    <div className="record-page-data">1 - 10</div>
                                    <div class="record-arrow">
                                        <img src={leftarrow} alt="leftarrow" />
                                    </div>
                                    <div class="record-arrow">
                                        <img src={rightarrow} alt="rightarrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DealTop;