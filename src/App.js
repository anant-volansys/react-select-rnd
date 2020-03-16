import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Option from './Option';
import MySelect from './MySelect';
import Select, { components } from "react-select";
import get from 'lodash.get';

const graphOptions = [
  {

    label: 'Message',
    options: [
      { value: 'Message Publish', label: 'Message Publish', group: 'Message' },
      {
        value: 'Active Connection',
        label: 'Active Connection',
        group: 'Message'
      }
    ]
  },
  {
    label: 'User',
    options: [
      { value: 'User Creation', label: 'User Creation', group: 'User' },
      { value: 'Login', label: 'Login', group: 'User' },
      { value: 'Password Update', label: 'Password Update', group: 'User' }
    ]
  },
  {
    label: 'Device',
    options: [
      { value: 'Connection', label: 'Connection', group: 'Device' },
      { value: 'Disconnection', label: 'Disconnection', group: 'Device' },
      { value: 'New Device', label: 'New Device', group: 'Device' }
    ]
  }
];

const MultiValue = (props) => {
  console.log("Selection Props: ", props);
  return (
    <components.SingleValue {...props}> <span>{"Selected " + get(props, 'selectProps.value.length', 0)}</span> </components.SingleValue>
  );
}

function App() {

  const [selectedGraph, setSelectedGraph] = useState(null);

  console.log("selectedGraph: ", selectedGraph)

  return (
    <div style={{ width: '50%' }}>
      <h2>Simple Single Selection with checkbox</h2>
      <MySelect
        closeMenuOnSelect={false} // true if you want this feature
        components={{ Option }}
        defaultValue={graphOptions[0].options[0]}
        options={graphOptions}
        hideSelectedOptions={false}
        backspaceRemovesValue={false}
        className="test-class-2"
        onChange={e => setSelectedGraph(e)}
      />


      <h2>Simple Multi Selection with checkbox (With Select All option)</h2>
      <MySelect
        closeMenuOnSelect={false} // true if you want this feature
        components={{ Option, MultiValue }}
        defaultValue={graphOptions[0].options[0]}
        options={graphOptions}
        hideSelectedOptions={false}
        backspaceRemovesValue={false}
        isMulti={true}
        isOpen={true}
        allowSelectAll={true}
        value={selectedGraph}
        onChange={e => setSelectedGraph(e)}
      />
    </div>
  );
}

export default App;
