import React from "react";
import './SidebarTop.scss';
import search from "../../assets/images/contact/search.svg";
import edit from "../../assets/images/contact/edit.svg";
import star from "../../assets/images/contact/star.svg";

const SidebarTop = () => {
    return(
        <>
            <div className="contact-main">
              <select className="form-select contact-select">
                <option value="replay" >Replay</option>
                <option value="replay2" >Replay</option>
              </select>
              <div className='edit-icon'>
                <img src={edit} alt='edit'/>
              </div>
              <div className='star-icon'>
                <img src={star} alt='edit'/>
              </div>
              <div className='contactsearh'>
                <div className='contactsearchinput'>
                  <input type="search" placeholder='Search....' id="gsearch" name="gsearch" />
                  <span><img src={search} alt='search'/></span>
                </div>
              </div>
            </div>    
        </>
    )
}

export default SidebarTop;