import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Contact.scss";
// import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarTop from "../../components/SidebarTop/SidebarTop";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import editbutton from "../../assets/images/contact/editbutton.svg";
import TanTable from "../../components/Tabel/Tabel";
import Select from 'react-select'
import TableColumn from "../../components/Tabel/TableColumn";
// import TableDemo from "../../components/TableDemo/TableDemo";
import axios from "axios";
// import { useAuthHeader } from "react-auth-kit";

const Contact = ({ table }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // const authHeader = useAuthHeader();

  // const [FilterData, setFilterData] = useState(["unassigned"]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [open, setOpen] = useState(false);

  const eventClose = () => setOpen(false);
  const eventShow = () => setOpen(true);

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

  useEffect(() => {
    // console.log(`/contact`);
    setLoading(true);
    instance
      .get(`/tblHbDEIYCS0QvvZk`)
      .then(function (response) {
        // console.log(response);
        setUsers(response.data.records);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const refreshData = () => {
    instance
      .get(`/tblHbDEIYCS0QvvZk`)
      .then(function (response) {
        // console.log(response);
        setUsers(response.data.records);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [contact, setContact] = useState({
    id: "",
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

  const getIdByButton = (e) => {
    setShow(true);
    instance
      .get(`/tblHbDEIYCS0QvvZk/${e}`)
      .then(function (response) {
        // console.log(response);
        setContact({
          id: response.data.id,
          full_name: response.data.fields.full_name,
          name: response.data.fields.name,
          first_name: response.data.fields.first_name,
          last_name: response.data.fields.last_name,
          email: response.data.fields.email,
          mobile: response.data.fields.mobile,
          Lead_Source: response.data.fields.Lead_Source,
          Referral_Code: response.data.fields.Referral_Code,
        });
        // setUsers(response.data.records);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(e);
  };

  const updateContact = () => {
    const data = {
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
    };

    instance
      .patch(`/tblHbDEIYCS0QvvZk/${contact.id}`, data)
      .then((res) => {
        // console.log(res);
        refreshData();
        alert("Record Updated Successfully");
        setShow(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [filed, setFiled] = useState({
    full_name: "",
    name: "",
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    Lead_Source: "",
    Referral_Code: "",
  });

  const eventInput = (e) => {
    setFiled({ ...filed, [e.target.name]: e.target.value });
  };

  
  
  // console.log("newData", JSON.stringify(newData));
  const [datasearch, setDatasearch] = useState("");
  
  const groupevent = (e) => {
    setDatasearch(e.target.value);
  };

  console.log("radio", datasearch);

  //   () => [
  //     {
  //       id: "last_name",
  //       accessorKey: "last_name",
  //       header: "Last Name",
  //       cell: ({ row, getValue }) => {
  //         // console.log(row);
  //         return (
  //           <div
  //           // style={{
  //           //   // Since rows are flattened by default,
  //           //   // we can use the row.depth property
  //           //   // and paddingLeft to visually indicate the depth
  //           //   // of the row
  //           //   paddingLeft: `${row.depth * 2}rem`,
  //           // }}
  //           >
  //             <>
  //               {row.getCanExpand() ? (
  //                 <button
  //                   {...{
  //                     onClick: row.getToggleExpandedHandler(),
  //                     style: {
  //                       cursor: "pointer",
  //                       backgroundColor: "#0052cc",
  //                       border: "none",
  //                       color: "#fff",
  //                       padding: "4px 10px",
  //                     },
  //                   }}
  //                 >
  //                   {row.getIsExpanded() ? "👇" : "👉"} {row.original.lastName}
  //                 </button>
  //               ) : (
  //                 ""
  //               )}
  //               {getValue()}
  //             </>
  //           </div>
  //         );
  //       },
  //     },
  //     {
  //       accessorKey: "name",
  //       id: "name",
  //       header: "Name",
  //     },
  //     {
  //       accessorKey: "full_name",
  //       id: "full_name",
  //       header: "Full Name",
  //     },
  //     {
  //       accessorKey: "first_name",
  //       id: "first_name",
  //       header: "First Name",
  //     },
  //     {
  //       accessorKey: "email",
  //       id: "email",
  //       header: "Email",
  //     },
  //     {
  //       accessorKey: "mobile",
  //       id: "mobile",
  //       header: "Mobile",
  //     },
  //     {
  //       accessorKey: "Lead_Source",
  //       id: "Lead_Source",
  //       header: "Lead Source",
  //     },
  //     {
  //       accessorKey: "Referral_Code",
  //       id: "Referral_Code",
  //       header: "Referral Code",
  //     },
  //     {
  //       accessorKey: "action",
  //       id: "action",
  //       header: "Action",
  //       cell: (value) => {
  //         return (
  //           <div className="action-report">
  //             <Button
  //               variant="primary"
  //               onClick={() => getIdByButton(value.row.original.id)}
  //             >
  //               <span>
  //                 <img src={editbutton} alt="editbutton" />
  //               </span>
  //             </Button>
  //           </div>
  //         );
  //       },
  //     },
  //   ],
  //   []
  // );

  // const defaultColumns2 = React.useMemo(
  //   () => [
  //     {
  //       accessorKey: "first_name",
  //       id: "first_name",
  //       header: "First Name",
  //       cell: ({ row, getValue }) => {
  //         // console.log(row);
  //         return (
  //           <div
  //           // style={{
  //           //   // Since rows are flattened by default,
  //           //   // we can use the row.depth property
  //           //   // and paddingLeft to visually indicate the depth
  //           //   // of the row
  //           //   paddingLeft: `${row.depth * 2}rem`,
  //           // }}
  //           >
  //             <>
  //               {row.getCanExpand() ? (
  //                 <button
  //                   {...{
  //                     onClick: row.getToggleExpandedHandler(),
  //                     style: {
  //                       cursor: "pointer",
  //                       backgroundColor: "#0052cc",
  //                       border: "none",
  //                       color: "#fff",
  //                       padding: "4px 10px",
  //                     },
  //                   }}
  //                 >
  //                   {row.getIsExpanded() ? "👇" : "👉"} {row.original.firstName}
  //                 </button>
  //               ) : (
  //                 ""
  //               )}
  //               {getValue()}
  //             </>
  //           </div>
  //         );
  //       },
  //     },
  //     {
  //       id: "last_name",
  //       accessorKey: "last_name",
  //       header: "Last Name",
  //     },
  //     {
  //       accessorKey: "name",
  //       id: "name",
  //       header: "Name",
  //     },
  //     {
  //       accessorKey: "full_name",
  //       id: "full_name",
  //       header: "Full Name",
  //     },
  //     {
  //       accessorKey: "email",
  //       id: "email",
  //       header: "Email",
  //     },
  //     {
  //       accessorKey: "mobile",
  //       id: "mobile",
  //       header: "Mobile",
  //     },
  //     {
  //       accessorKey: "Lead_Source",
  //       id: "Lead_Source",
  //       header: "Lead Source",
  //     },
  //     {
  //       accessorKey: "Referral_Code",
  //       id: "Referral_Code",
  //       header: "Referral Code",
  //     },
  //     {
  //       accessorKey: "action",
  //       id: "action",
  //       header: "Action",
  //       cell: (value) => {
  //         return (
  //           <div className="action-report">
  //             <Button
  //               variant="primary"
  //               onClick={() => getIdByButton(value.row.original.id)}
  //             >
  //               <span>
  //                 <img src={editbutton} alt="editbutton" />
  //               </span>
  //             </Button>
  //           </div>
  //         );
  //       },
  //     },
  //   ],
  //   []
  // );

  // const defaultColumns = React.useMemo(
  //   () => [
  //     {
  //       accessorKey: "first_name",
  //       id: "first_name",
  //       header: "First Name",
  //     },
  //     {
  //       id: "last_name",
  //       accessorKey: "last_name",
  //       header: "Last Name",
  //     },
  //     {
  //       accessorKey: "name",
  //       id: "name",
  //       header: "Name",
  //     },
  //     {
  //       accessorKey: "full_name",
  //       id: "full_name",
  //       header: "Full Name",
  //     },
  //     {
  //       accessorKey: "email",
  //       id: "email",
  //       header: "Email",
  //     },
  //     {
  //       accessorKey: "mobile",
  //       id: "mobile",
  //       header: "Mobile",
  //     },
  //     {
  //       accessorKey: "Lead_Source",
  //       id: "Lead_Source",
  //       header: "Lead Source",
  //     },
  //     {
  //       accessorKey: "Referral_Code",
  //       id: "Referral_Code",
  //       header: "Referral Code",
  //     },
  //     {
  //       accessorKey: "action",
  //       id: "action",
  //       header: "Action",
  //       cell: (value) => {
  //         return (
  //           <div className="action-report">
  //             <Button
  //               variant="primary"
  //               onClick={() => getIdByButton(value.row.original.id)}
  //             >
  //               <span>
  //                 <img src={editbutton} alt="editbutton" />
  //               </span>
  //             </Button>
  //           </div>
  //         );
  //       },
  //     },
  //   ],
  //   []
  // );

  const defaultColumns1 = [
    {
      id: "last_name",
      accessorKey: "last_name",
      header: "Last Name",
      cell: ({ row, getValue }) => {
        // console.log(row);
        return (
          <div
          // style={{
          //   // Since rows are flattened by default,
          //   // we can use the row.depth property
          //   // and paddingLeft to visually indicate the depth
          //   // of the row
          //   paddingLeft: `${row.depth * 2}rem`,
          // }}
          >
            <>
              {row.getCanExpand() ? (
                <button
                  {...{
                    onClick: row.getToggleExpandedHandler(),
                    style: {
                      cursor: "pointer",
                      backgroundColor: "#0052cc",
                      border: "none",
                      color: "#fff",
                      padding: "4px 10px",
                    },
                  }}
                >
                  {row.getIsExpanded() ? "👇" : "👉"} {row.original.lastName}
                </button>
              ) : (
                ""
              )}
              {getValue()}
            </>
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      id: "name",
      header: "Name",
    },
    {
      accessorKey: "full_name",
      id: "full_name",
      header: "Full Name",
    },
    {
      accessorKey: "first_name",
      id: "first_name",
      header: "First Name",
    },
    {
      accessorKey: "email",
      id: "email",
      header: "Email",
    },
    {
      accessorKey: "mobile",
      id: "mobile",
      header: "Mobile",
    },
    {
      accessorKey: "status",
      id: "status",
      header: "Status",
    },
    {
      accessorKey: "Lead_Source",
      id: "Lead_Source",
      header: "Lead Source",
    },
    {
      accessorKey: "Referral_Code",
      id: "Referral_Code",
      header: "Referral Code",
    },
    {
      accessorKey: "action",
      id: "action",
      header: "Action",
      cell: (value) => {
        return (
          <div className="action-report">
            <Button
              variant="primary"
              onClick={() => getIdByButton(value.row.original.id)}
            >
              <span>
                <img src={editbutton} alt="editbutton" />
              </span>
            </Button>
          </div>
        );
      },
    },
  ];

  const defaultColumns2 = [
    {
      accessorKey: "first_name",
      id: "first_name",
      header: "First Name",
      cell: ({ row, getValue }) => {
        // console.log(row);
        return (
          <div
          // style={{
          //   // Since rows are flattened by default,
          //   // we can use the row.depth property
          //   // and paddingLeft to visually indicate the depth
          //   // of the row
          //   paddingLeft: `${row.depth * 2}rem`,
          // }}
          >
            <>
              {row.getCanExpand() ? (
                <button
                  {...{
                    onClick: row.getToggleExpandedHandler(),
                    style: {
                      cursor: "pointer",
                      backgroundColor: "#0052cc",
                      border: "none",
                      color: "#fff",
                      padding: "4px 10px",
                    },
                  }}
                >
                  {row.getIsExpanded() ? "👇" : "👉"} {row.original.firstName}
                </button>
              ) : (
                ""
              )}
              {getValue()}
            </>
          </div>
        );
      },
    },
    {
      id: "last_name",
      accessorKey: "last_name",
      header: "Last Name",
    },
    {
      accessorKey: "name",
      id: "name",
      header: "Name",
    },
    {
      accessorKey: "full_name",
      id: "full_name",
      header: "Full Name",
    },
    {
      accessorKey: "email",
      id: "email",
      header: "Email",
    },
    {
      accessorKey: "mobile",
      id: "mobile",
      header: "Mobile",
    },
    {
      accessorKey: "Lead_Source",
      id: "Lead_Source",
      header: "Lead Source",
    },
    {
      accessorKey: "status",
      id: "status",
      header: "Status",
    },
    {
      accessorKey: "Referral_Code",
      id: "Referral_Code",
      header: "Referral Code",
    },
    {
      accessorKey: "action",
      id: "action",
      header: "Action",
      cell: (value) => {
        return (
          <div className="action-report">
            <Button
              variant="primary"
              onClick={() => getIdByButton(value.row.original.id)}
            >
              <span>
                <img src={editbutton} alt="editbutton" />
              </span>
            </Button>
          </div>
        );
      },
    },
  ];

  const defaultColumns = [
    {
      accessorKey: "first_name",
      id: "first_name",
      header: "First Name",
    },
    {
      id: "last_name",
      accessorKey: "last_name",
      header: "Last Name",
    },
    {
      accessorKey: "name",
      id: "name",
      header: "Name",
    },
    {
      accessorKey: "full_name",
      id: "full_name",
      header: "Full Name",
    },
    {
      accessorKey: "email",
      id: "email",
      header: "Email",
    },
    {
      accessorKey: "mobile",
      id: "mobile",
      header: "Mobile",
    },
    {
      accessorKey: "Lead_Source",
      id: "Lead_Source",
      header: "Lead Source",
    },
    {
      accessorKey: "status",
      id: "status",
      header: "Status",
    },
    {
      accessorKey: "Referral_Code",
      id: "Referral_Code",
      header: "Referral Code",
    },
    {
      accessorKey: "action",
      id: "action",
      header: "Action",
      cell: (value) => {
        return (
          <div className="action-report">
            <Button
              variant="primary"
              onClick={() => getIdByButton(value.row.original.id)}
            >
              <span>
                <img src={editbutton} alt="editbutton" />
              </span>
            </Button>
          </div>
        );
      },
    },
  ];

  const defaultColumns3 = [
    {
      accessorKey: "status",
      id: "status",
      header: "Status",
      cell: ({ row, getValue }) => {
        // console.log(row);
        return (
          <div
          // style={{
          //   // Since rows are flattened by default,
          //   // we can use the row.depth property
          //   // and paddingLeft to visually indicate the depth
          //   // of the row
          //   paddingLeft: `${row.depth * 2}rem`,
          // }}
          >
            <>
              {row.getCanExpand() ? (
                <button
                  {...{
                    onClick: row.getToggleExpandedHandler(),
                    style: {
                      cursor: "pointer",
                      backgroundColor: "#0052cc",
                      border: "none",
                      color: "#fff",
                      padding: "4px 10px",
                    },
                  }}
                >
                  {row.getIsExpanded() ? "👇" : "👉"} {row.original.firstName}
                </button>
              ) : (
                ""
              )}
              {getValue()}
            </>
          </div>
        );
      },
    },
    {
      accessorKey: "first_name",
      id: "first_name",
      header: "First Name",
    },
    {
      id: "last_name",
      accessorKey: "last_name",
      header: "Last Name",
    },
    {
      accessorKey: "name",
      id: "name",
      header: "Name",
    },
    {
      accessorKey: "full_name",
      id: "full_name",
      header: "Full Name",
    },
    {
      accessorKey: "email",
      id: "email",
      header: "Email",
    },
    {
      accessorKey: "mobile",
      id: "mobile",
      header: "Mobile",
    },
    {
      accessorKey: "Lead_Source",
      id: "Lead_Source",
      header: "Lead Source",
    },
    {
      accessorKey: "Referral_Code",
      id: "Referral_Code",
      header: "Referral Code",
    },
    {
      accessorKey: "action",
      id: "action",
      header: "Action",
      cell: (value) => {
        return (
          <div className="action-report">
            <Button
              variant="primary"
              onClick={() => getIdByButton(value.row.original.id)}
            >
              <span>
                <img src={editbutton} alt="editbutton" />
              </span>
            </Button>
          </div>
        );
      },
    },
  ];

  const saveContact = (e) => {
    if (
      filed.full_name !== "" &&
      filed.name !== "" &&
      filed.first_name !== "" &&
      filed.last_name !== "" &&
      filed.email !== "" &&
      filed.mobile !== "" &&
      filed.Lead_Source !== "" &&
      filed.Referral_Code !== ""
    ) {
      const data = {
        records: [
          {
            fields: {
              id: 49,
              full_name: filed.full_name,
              name: filed.name,
              first_name: filed.first_name,
              last_name: filed.last_name,
              email: filed.email,
              mobile: filed.mobile,
              Lead_Source: filed.Lead_Source,
              Referral_Code: filed.Referral_Code,
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
          refreshData();
          alert("Record Added Successfully");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Please fill all fields");
    }
  };

  function moveFieldsOutside(records) {
    const newRecords = [];
    for (const record of records) {
      const { id, fields } = record;
      const { ...otherFields } = fields;
      otherFields.id = id;
      newRecords.push({ id, ...otherFields });
    }
    return newRecords;
  }

  // console.log(users);

  const newData = moveFieldsOutside(users);

  // console.log("new", newData);

  const [filteredRecords, setFilteredRecords] = useState([]);
  const [filterKeys, setFilterKeys] = useState([]);

  const handleInputChange = (event) => {
    const key = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      setFilterKeys((prevKeys) => [...prevKeys, key]);
    } else {
      setFilterKeys((prevKeys) => prevKeys.filter((k) => k !== key));
    }
  };

  const handleRunButtonClick = () => {
    const filteredData = newData.filter((record) => {
      return filterKeys.every((key) => record[key] === 1);
    });

    setFilteredRecords(filteredData);
  };

  const handleResetButtonClick = () => {
    setFilteredRecords([]);
    setFilterKeys([]);

    // Uncheck all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const [colData, setColData] = useState("");
  const [colRefatch, setColRefatch] = useState(false);

  

  function groupByLastName(data) {
    // Create an object to store the grouped data
    const groupedData = {};

    // Iterate over the data array
    data.forEach((obj) => {
      // Get the last name from the current object
      const lastName = obj.last_name;

      // If the last name already exists in the grouped data, add the object to its subRows
      if (groupedData.hasOwnProperty(lastName)) {
        groupedData[lastName].subRows.push(obj);
      }
      // Otherwise, create a new entry in the grouped data with the last name and initialize its subRows with the current object
      else {
        groupedData[lastName] = {
          lastName: lastName,
          subRows: [obj],
        };
      }
    });

    // Convert the grouped data object into an array of grouped objects
    const groupedArray = Object.values(groupedData);

    // Return the grouped array
    return groupedArray;
  }

  const groupByLast = groupByLastName(newData);

  function groupByFirstName(data) {
    // Create an object to store the grouped data
    const groupedData = {};

    // Iterate over the data array
    data.forEach((obj) => {
      // Get the last name from the current object
      const firstName = obj.first_name;

      // If the last name already exists in the grouped data, add the object to its subRows
      if (groupedData.hasOwnProperty(firstName)) {
        groupedData[firstName].subRows.push(obj);
      }
      // Otherwise, create a new entry in the grouped data with the last name and initialize its subRows with the current object
      else {
        groupedData[firstName] = {
          firstName: firstName,
          subRows: [obj],
        };
      }
    });

    // Convert the grouped data object into an array of grouped objects
    const groupedArray = Object.values(groupedData);

    // Return the grouped array
    return groupedArray;
  }

  const groupByFirst = groupByFirstName(newData);

  function groupByStatus(data) {
    // Create an object to store the grouped data
    const groupedData = {};

    // Iterate over the data array
    data.forEach((obj) => {
      // Get the last name from the current object
      const status = obj.status;

      // If the last name already exists in the grouped data, add the object to its subRows
      if (groupedData.hasOwnProperty(status)) {
        groupedData[status].subRows.push(obj);
      }
      // Otherwise, create a new entry in the grouped data with the last name and initialize its subRows with the current object
      else {
        groupedData[status] = {
          status: status,
          subRows: [obj],
        };
      }
    });

    // Convert the grouped data object into an array of grouped objects
    const groupedArray = Object.values(groupedData);

    // Return the grouped array
    return groupedArray;
  }

  const groupStatus = groupByStatus(newData);

  // console.log(groupByFirst);

  // console.log(newCol);
  // console.log(newGroupData);

  // useEffect(() => {
  //   if (colRefatch === true) {
  //     setColRefatch(false);
  //   } else {
  //     setColRefatch(true);
  //   }
  // }, [colData, colRefatch]);
  console.log(newData);
  
const options = [
  {
    label: "Activated",
    value: "activated",
  },
  {
    label: "Adopted",
    value: "adopted",
  },
  {
    label: "Adore",
    value: "adore",
  },
  {
    label: "Advocate",
    value: "advocate",
  },
  {
    label: "Closed Lost",
    value: "closed_lost",
  },
  {
    label: "Closed Won",
    value: "closed_won",
  },
  {
    label: "Connected",
    value: "connected",
  },
  {
    label: "Customer",
    value: "customer",
  },
  {
    label: "Decision Made",
    value: "decision_made",
  },
  {
    label: "Iinbound Enquiry",
    value: "inbound_enquiry",
  },
  {
    label: "Lead",
    value: "lead",
  },
  {
    label: "Meeting Booked",
    value: "meeting_booked",
  },
  {
    label: "Negotiation",
    value: "negotiation",
  },
  {
    label: "Qualified",
    value: "qualified",
  },
  {
    label: "Quote Requested",
    value: "quote_requested",
  },
];

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="col-12 contactcount">
          <SidebarTop />
          <div className="contact-model-block">
            <div className="contact-total">Total : 1</div>
            <Button variant="primary" onClick={eventShow} className="me-2">
              Add Contact
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-3 contact-sidebar">
            <Tabs
              defaultActiveKey="conditions"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="conditions" title="Conditions">
                <div className="filter-inner">
                  <p className="filter-title">Smart Properties</p>
                  <div className="ProjectFilter">
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="unassigned"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Unassigned</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="unread"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Unread</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="unchanged"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Unchanged</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="no_next_activity"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>No Next Activity</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="no_activity_all_time"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>No Activity - All Time </p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="no_activity_last_7_days"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>No Activity - Last 7 Days</p>
                    </div>
                    <div
                      className="projectfiltercheckbox"
                      onChange={handleInputChange}
                      value="1"
                    >
                      <input type="checkbox" name="no_activity_last_30_days" />
                      <p>No Activity - Last 30 Days</p>
                    </div>
                    <div
                      className="projectfiltercheckbox"
                      onChange={handleInputChange}
                      value="1"
                    >
                      <input
                        type="checkbox"
                        name="some_activity_last_7_days"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Some Activity - Last 7 Days</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="some_activity_last_30_days"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Some Activity - Last 30 Days</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="no_progress_updates_last_7_days"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>No Progress Updates - Last 7 Days</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="no_progress_updates_last_30_days"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>No Progress Updates - Last 30 Days</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="close_date_this_month"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Close Date - This Month</p>
                    </div>
                    <div className="projectfiltercheckbox">
                      <input
                        type="checkbox"
                        name="Other"
                        onChange={handleInputChange}
                        value="1"
                      />
                      <p>Other</p>
                    </div>
                  </div>
                </div>
                <div className="filter-inner">
                  <p className="filter-title">Contact Properties</p>
                  {colData && <TableColumn table={colData} />}
                </div>
                <div className="projectFilter_filtersbutton">
                  <button onClick={handleRunButtonClick}>Run</button>
                  <button onClick={handleResetButtonClick}>Reset</button>
                </div>
              </Tab>
              <Tab eventKey="groups" title="Groups">
                <div className="filter-inner">
                  <p className="filter-title">Contact Properties</p>
                  <div className="ProjectFilter">
                    <form>
                      <div className="projectfiltercheckbox">
                        <input
                          type="radio"
                          onChange={groupevent}
                          name="groupby"
                          value="Last Name"
                        />
                        <p>Last Name</p>
                      </div>
                      <div className="projectfiltercheckbox">
                        <input
                          type="radio"
                          onChange={groupevent}
                          name="groupby"
                          value="First Name"
                        />
                        <p>First Name</p>
                      </div>
                      {/* <div className="projectfiltercheckbox">
                        <input
                          type="radio"
                          onChange={groupevent}
                          name="groupby"
                          value="Contact ID"
                        />
                        <p>Contact ID</p>
                      </div> */}
                      <p className="filter-title mt-3">Status</p>

                      <div className="projectfiltercheckbox">
                        <input
                          type="radio"
                          onChange={groupevent}
                          name="groupby"
                          value="Status"
                        />
                        <p>Status</p>
                      </div>
                      {/* <div className="projectfiltercheckbox">
                        <input
                          type="radio"
                          onChange={groupevent}
                          name="groupby"
                          value="Deleted"
                        />
                        <p>Deleted</p>
                      </div>
                      <div className="projectfiltercheckbox">
                        <input
                          type="radio"
                          onChange={groupevent}
                          name="groupby"
                          value="Master Record ID"
                        />
                        <p>Master Record ID</p>
                      </div>
                      <div className="projectfiltercheckbox">
                        <input
                          type="radio"
                          onChange={groupevent}
                          name="groupby"
                          value="Account ID"
                        />
                        <p>Account ID</p>
                      </div> */}
                      
                      {/* <div className="projectfiltercheckbox">
                        <input
                          type="radio"
                          onChange={groupevent}
                          name="groupby"
                          value="Solutation"
                        />
                        <p>Solutation</p>
                      </div>
                      <div className="projectfiltercheckbox">
                        <input
                          type="radio"
                          onChange={groupevent}
                          name="groupby"
                          value="Full Name"
                        />
                        <p>Full Name</p>
                      </div>
                      <div className="projectfiltercheckbox">
                        <input
                          type="radio"
                          onChange={groupevent}
                          name="groupby"
                          value="Other Street"
                        />
                        <p>Other Street</p>
                      </div> */}
                      {/* <div className="projectfiltercheckbox">
                        <input
                          type="radio"
                          onChange={groupevent}
                          name="groupby"
                          value="Other"
                        />
                        <p>Other</p>
                      </div> */}
                    </form>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="columns" title="Columns">
                <div className="filter-inner">
                  <p className="filter-title">Contact Properties</p>
                  {colData && <TableColumn table={colData} />}
                </div>
              </Tab>
            </Tabs>
          </div>
          <div className="col-9 right-sidebar">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>
                {datasearch === "Last Name" ? (
                  <TanTable
                    tableData={
                      filteredRecords.length > 0 ? filteredRecords : groupByLast
                    }
                    tableColumn={defaultColumns1}
                    tableCol={(e) => setColData(e)}
                    reftechCol={colRefatch}
                  />
                ) : datasearch === "First Name" ? (
                  <TanTable
                    tableData={
                      filteredRecords.length > 0
                        ? filteredRecords
                        : groupByFirst
                    }
                    tableColumn={defaultColumns2}
                    tableCol={(e) => setColData(e)}
                    reftechCol={colRefatch}
                  />
                ) : datasearch === "Status" ? (
                  <TanTable
                    tableData={
                      filteredRecords.length > 0
                        ? filteredRecords
                        : groupStatus
                    }
                    tableColumn={defaultColumns3}
                    tableCol={(e) => setColData(e)}
                    reftechCol={colRefatch}
                  />
                ) :                
                (
                  <TanTable
                    tableData={
                      filteredRecords.length > 0 ? filteredRecords : newData
                    }
                    tableColumn={defaultColumns}
                    tableCol={(e) => setColData(e)}
                    reftechCol={colRefatch}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Update Contact</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={contact.full_name}
                name="full_name"
                placeholder="Full Name"
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={contact.name}
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
                value={contact.first_name}
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
                value={contact.last_name}
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
                value={contact.email}
                name="email"
                onChange={handleInput}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                value={contact.mobile}
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
                value={contact.Lead_Source}
                name="Lead_Source"
                onChange={handleInput}
                placeholder="Lead Source"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Referral Code</Form.Label>
              <Form.Control
                value={contact.Referral_Code}
                type="text"
                name="Referral_Code"
                onChange={handleInput}
                placeholder="Referral Code"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label> 
              <Form.Select value={contact.status} onChange={handleInput}>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => updateContact()}>
              Save Changes
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={open} onHide={eventClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Contact</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="full_name"
                placeholder="Full Name"
                onChange={eventInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={eventInput}
                placeholder="Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="first_name"
                type="text"
                onChange={eventInput}
                placeholder="First Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                onChange={eventInput}
                placeholder="Last Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={eventInput}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="number"
                name="mobile"
                onChange={eventInput}
                placeholder="Mobile"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lead Source</Form.Label>
              <Form.Control
                type="text"
                name="Lead_Source"
                onChange={eventInput}
                placeholder="Lead Source"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Referral Code</Form.Label>
              <Form.Control
                type="text"
                name="Referral_Code"
                onChange={eventInput}
                placeholder="Referral Code"
                autoFocus
              />
            </Form.Group>
          </Form>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="secondary" onClick={eventClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => saveContact()}>
              Save Changes
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Contact;
