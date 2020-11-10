import React, { useState } from "react";
// import Datatable from "./Datatable/index";
// require("es6-promise").polyfill();
// require("isomorphic-fetch");

function App() {
  // const [contact, setContact] = useState([]);
  const [q, setQ] = useState("");

  const contacts = [
    {
      id: 1,
      firstName: "Eurico",
      lastName: "Catumbela",
      emailAddress: "erick@ejctechnology.co.za",
      phoneNumber: "0622575680",
      address: "16 Cheviot",
      city: "Cape Town",
      state: "Western Cape",
      postCode: "8000",
    },
    {
      id: 2,
      firstName: "Wilson",
      lastName: "Catumbela",
      emailAddress: "wilson@ejctechnology.co.za",
      phoneNumber: "931543419",
      address: "Tundavala",
      city: "Lubango",
      state: "Huila",
      postCode: "111",
    },
    {
      id: 3,
      firstName: "Valentim",
      lastName: "Catumbela",
      emailAddress: "valentin@ejctechnology.co.za",
      phoneNumber: "924922672",
      address: "Comercial",
      city: "Lubango",
      state: "Huila",
      postCode: "111",
    },
    {
      id: 4,
      firstName: "Edilson",
      lastName: "Catumbela",
      emailAddress: "edilson@ejctechnology.co.za",
      phoneNumber: "937435527",
      address: "Comercial",
      city: "Lubango",
      state: "Huila",
      postCode: "111",
    },
    {
      id: 5,
      firstName: "Abednego",
      lastName: "Catumbela",
      emailAddress: "Abednego@ejctechnology.co.za",
      phoneNumber: "925423854",
      address: "Comercial",
      city: "Lubango",
      state: "Huila",
      postCode: "111",
    },
    {
      id: 6,
      firstName: "Agustinho",
      lastName: "Nangolo",
      emailAddress: "agustinho@ejctechnology.co.za",
      phoneNumber: "933108123",
      address: "Comercial",
      city: "Lubango",
      state: "Huila",
      postCode: "111",
    },
    {
      id: 7,
      firstName: "Marciana",
      lastName: "Tchipela",
      emailAddress: "marciana@ejctechnology.co.za",
      phoneNumber: "926199227",
      address: "Comercial",
      city: "Lubango",
      state: "Huila",
      postCode: "111",
    },
    {
      id: 8,
      firstName: "Marcia",
      lastName: "Catumbela",
      emailAddress: "marcia@ejctechnology.co.za",
      phoneNumber: "931543419",
      address: "Tundavala",
      city: "Lubango",
      state: "Huila",
      postCode: "111",
    },
  ];

  const columns = contacts[0] && Object.keys(contacts[0]);

  function search(rows) {
    return rows.filter((row) => row.firstName.toLowerCase().indexOf(q) > -1);
  }

  return (
    <div>
      <div>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />

        {/* <button onClick={search(contacts)}>Submit</button> */}
      </div>
      <table cellPadding={10} cellSpacing={8}>
        <thead>
          <tr>{contacts[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
          {contacts.map((row) => (
            <tr>
              {columns.map((column) => (
                <td>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
