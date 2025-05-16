import React from "react";
import styles from "./Endpoints.module.css";

export default function Endpoints() {
    const tableData = [
      ["Get", "/api/opgave", " ", "[Question1, Question2, ...]", " "],
      ["Get", "/api/opgave/{id}", " ", "[Question{id}]", " "],
      ["Post", "/api/opgave", "Question w/o ID", " ", " "],
      ["Patch", "/api/opgave", "Question w/o ID", "Question{id}", " "],
      ["Delete", "/api/opgave/{id}", "Question{id}", " ", " "],
    ];

    const coloumnHeaders = [
      "Method",
      "URL",
      "Request Body (JSON)",
      "Response (JSON)",
      "Error(E)",
    ];

    return (
    <div className="center-container">
      <table border="1">
        <thead>
          <tr>
            {columnHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
