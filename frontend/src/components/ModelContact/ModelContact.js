import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const ModelContact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [contact, setContact] = useState({
    full_name: "",
    name: "",
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    Lead_Source: "",
    Referral_Code: "",
  });

  const handleInput = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const saveContact = (e) => {
    if (contact.full_name !== "" && contact.name !== "" && contact.first_name !== "" && contact.last_name !== "" && contact.email !== "" && contact.mobile !== "" && contact.Lead_Source !== "" && contact.Referral_Code !== ""){
      const data = {
        records: [
          {
            fields: {
              id: 49,
              full_name: contact.full_name,
              name: contact.name,
              first_name: contact.first_name,
              last_name: contact.last_name,
              email: contact.email,
              mobile: contact.mobile,
              Lead_Source: contact.Lead_Source,
              Referral_Code: contact.Referral_Code,
              created_at: "2023-06-16 07:24:36",
              updated_at: "2023-06-16 07:24:36",
              master_record_id: "NULL",
              account_id: "NULL",
              deleted: 0,
              solutation: "NULL",
              other_street: 0,
              unassigned: 1,
              unread: 1,
              unchanged: 1,
              no_next_activity: 0,
              no_activity_all_time: 0,
              no_activity_last_7_days: 0,
              no_activity_last_30_days: 1,
              some_activity_last_7_days: 1,
              some_activity_last_30_days: 0,
              no_progress_updates_last_7_days: 1,
              no_progress_updates_last_30_days: 1,
              close_date_this_month: 0,
            },
          },
        ],
      };

      const instance = axios.create({
        baseURL: "https://api.airtable.com/v0/appvPiKRd6ZGQKUJA",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          // Authorization: authHeader(),
          Authorization:
            "Bearer patPRk7YOL27aUjHU.25298c18dd166d6e856ddfa98fccd95d19d46bd21b042ca99dd9856df79cbb7a",
          // "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
      });

      instance
        .post(`/tblHbDEIYCS0QvvZk`, data)
        .then((res) => {
          alert("Record Added Successfully");
        })
        .catch(function (error) {
          console.log(error);
        });
    }else{
        alert("Please fill all fields")
    }
  };

  console.log(contact);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="full_name"
                placeholder="Full Name"
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleInput}
                placeholder="Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="first_name"
                type="text"
                onChange={handleInput}
                placeholder="First Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                onChange={handleInput}
                placeholder="Last Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleInput}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="number"
                name="mobile"
                onChange={handleInput}
                placeholder="Mobile"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lead Source</Form.Label>
              <Form.Control
                type="text"
                name="Lead_Source"
                onChange={handleInput}
                placeholder="Lead Source"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Referral Code</Form.Label>
              <Form.Control
                type="text"
                name="Referral_Code"
                onChange={handleInput}
                placeholder="Referral Code"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => saveContact()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelContact;
