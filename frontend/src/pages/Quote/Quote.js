import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import './Quote.scss';
import podamium from "../../assets/images/Quote/podamium.svg";
import sign from "../../assets/images/Quote/sign.svg";
import topquote from "../../assets/images/Quote/topquote.svg";
import bottomquote from "../../assets/images/Quote/bottomquote.svg";
import union from "../../assets/images/Quote/union.svg";

const Quote = () => {
    return(
        <>
            <div className="quote-page">
                <Navbar/>
                <div className="quote-Podamium-block">
                    <div className="container">
                        <div className="quote-Podamium-content">
                            <div className="quote-signimg-block">
                                <span className="quote-top">
                                    <img src={topquote} alt="Sign"/>
                                </span>
                                <span className="quote-signimg">
                                    <img src={union} alt="Sign"/>
                                    <img className="imgsign" src={sign} alt="Sign"/>
                                </span>
                                <span className="quote-bottom">
                                    <img src={bottomquote} alt="Sign"/>
                                </span>
                            </div>
                            <div className="quote-sign-description">
                                <div className="quote-sign-title">Manage Customer Quotes</div>
                                <div className="quote-sign-desc">
                                    Quotes are legal agreements between a customer and a vender to deliver the requested product(s) at the agreed upon price within the specified time period.
                                </div>
                                <div className="quote-sign-btn">
                                    <button>Create a Quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="quote-Podamium-section">
                        <div className="quote-Podamium-title">
                            Try Podamium Suite
                        </div>
                        <div className="quote-Podamiumsvg">
                            <img src={podamium} alt="podamium"/>
                        </div>
                        <div className="quote-Podamium-desc">
                            To use more advanced filters, try our Try Podamium Suite Suite Integration
                        </div>
                        <div className="quote-Podamium-list">
                            <div className="quote-Podamium-listitem"><span>Books</span></div>
                            <div className="quote-Podamium-listitem"><span>Subscriptions</span></div>
                            <div className="quote-Podamium-listitem"><span>Expense</span></div>
                            <div className="quote-Podamium-listitem"><span>Inventory</span></div>
                        </div>
                        <div className="quote-Podamium-btn">
                            <button>Get Started</button>
                        </div>
                        <div className="quote-Podamium-show">
                            Don’t show again
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quote;