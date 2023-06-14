import React from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from "../../components/Navbar/Navbar";
import './Contact.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarTop from '../../components/SidebarTop/SidebarTop';



const Contact = () =>{
  return (
    <>
        <Navbar/>
        <div className='container'>
          <div className='col-12 contactcount'>
            <SidebarTop/>
            <div className='contact-total'>Total : 1</div>
          </div>
          <div className='row'>
            <div className='col-3 contact-sidebar'>
              <Sidebar/>
            </div>
            <div className='col-9 right-sidebar'>
              <Table className='contact-table'>
                <thead>
                  <tr>
                    <th>
                      <span><input type="checkbox" className="checkbox"/></span>
                    </th>
                    <th>Deleted</th>
                    <th>Account</th>
                    <th>First Name</th>
                    <th>Salutation</th>
                    <th>Full Name</th>
                    <th>other</th>
                    <th>other</th>
                    <th>other</th>
                    <th>other</th>
                    <th>other</th>
                    <th>other</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span><input type="checkbox" className="checkbox"/></span></td>
                    <td>False</td>
                    <td>123456</td>
                    <td>Tom</td>
                    <td>Tom Ripley</td>
                    <td>Tom Ripley</td>
                    <td>Tom Ripley</td>
                    <td>Tom Ripley</td>
                    <td>Tom Ripley</td>
                    <td>Tom Ripley</td>
                    <td>Tom Ripley</td>
                    <td>Tom Ripley</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
    </>
  );
}

export default Contact;
