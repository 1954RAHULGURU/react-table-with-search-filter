import React, { useState } from "react";
import { data } from "./search.jsx";
import "./search.css";

function Table() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="container">
        <div className="inputbox">
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search contacts"
          className="input"
        ></input>
        </div>

        <div className="user-list">
          <table id="table" border={1}>
            <thead>
              <tr className="user">
                <th>SLNo</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.first_name.toLowerCase().includes(search);
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
