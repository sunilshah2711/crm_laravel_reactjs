import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import './CreateQuote.scss';
// import podamium from "../../assets/images/Quote/podamium.svg";

const CreateQuote = () => {
    return(
        <>
            <div className="createquote-section">
                <Navbar/>
                <div className="container">
                    <div className="createquote-wrapper">
                        <div className="createquote-title">
                            Create Quote <span><button>Edit Page Layout</button></span>
                        </div>
                        <div className="createquote-button">
                            <button className="createquote-primarybtn">Cancel</button>
                            <button className="createquote-primarybtn">Save and New</button>
                            <button className="createquote-secondarybtn">Save</button>
                        </div>
                    </div>
                    <div className="quote-information-block">
                        <div className="quote-information-title">
                            Quote Imformation
                        </div>
                        <div className="quote-information-form">
                            <div className="quote-information-grid">
                                <div className="quoteform-title">Quote Owner</div>
                                <div className="quote-information-select">
                                    <select>
                                        <option value="grapefruit">Grapefruit</option>
                                        <option value="lime">Lime</option>
                                        <option selected value="coconut">Coconut</option>
                                        <option value="mango">Mango</option>
                                    </select>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div className="quoteform-title">Deal Name</div>
                                <div className="quote-information-select">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div className="quoteform-title">Subject</div>
                                <div className="quote-information-select">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div className="quoteform-title">Valid Until</div>
                                <div className="quote-information-select">
                                    <input type="date"/>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div className="quoteform-title">Quote Stage</div>
                                <div className="quote-information-select">
                                    <select>
                                        <option value="grapefruit">Grapefruit</option>
                                        <option value="lime">Lime</option>
                                        <option selected value="coconut">Coconut</option>
                                        <option value="mango">Mango</option>
                                    </select>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div className="quoteform-title">Contact Name</div>
                                <div className="quote-information-select">
                                    <select>
                                        <option value="grapefruit">Grapefruit</option>
                                        <option value="lime">Lime</option>
                                        <option selected value="coconut">Coconut</option>
                                        <option value="mango">Mango</option>
                                    </select>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div className="quoteform-title">Team</div>
                                <div className="quote-information-select">
                                    <select>
                                        <option value="grapefruit">Grapefruit</option>
                                        <option value="lime">Lime</option>
                                        <option selected value="coconut">Coconut</option>
                                        <option value="mango">Mango</option>
                                    </select>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div className="quoteform-title">Account Name</div>
                                <div className="quote-information-select">
                                    <select>
                                        <option value="grapefruit">Grapefruit</option>
                                        <option value="lime">Lime</option>
                                        <option selected value="coconut">Coconut</option>
                                        <option value="mango">Mango</option>
                                    </select>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div className="quoteform-title">Carrier</div>
                                <div className="quote-information-select">
                                    <select>
                                        <option value="grapefruit">Grapefruit</option>
                                        <option value="lime">Lime</option>
                                        <option selected value="coconut">Coconut</option>
                                        <option value="mango">Mango</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="quote-information-block">
                        <div className="quote-information-title">
                            Address Information
                        </div>
                        <div className="quote-information-form">
                            <div className="quote-information-grid">
                                <div>Billing Street</div>
                                <div className="address-information-input">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div>Shipping Street</div>
                                <div className="address-information-input">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div>Billing City</div>
                                <div className="address-information-input">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div>Shipping City</div>
                                <div className="address-information-input">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div>Billing State</div>
                                <div className="address-information-input">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div>Shipping State</div>
                                <div className="address-information-input">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div>Billing Code</div>
                                <div className="address-information-input">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div>Shipping Code</div>
                                <div className="address-information-input">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div>Billing Country</div>
                                <div className="address-information-input">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="quote-information-grid">
                                <div>Shipping Country</div>
                                <div className="address-information-input">
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateQuote;