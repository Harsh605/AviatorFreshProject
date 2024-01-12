import React, { useState } from 'react';

const TableForm = () => {
  const [inputText, setInputText] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputText.trim() !== '') {
      setTableData((prevData) => [...prevData, inputText]);
      setInputText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Enter something:
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <table>
        
        <thead>
          <tr>
            <th>Table Data</th>
            <th>fee </th>
            <th>data </th>
            <th>total Amount </th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableForm;
