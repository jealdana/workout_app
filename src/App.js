import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Chart from "react-google-charts";

function App() {
  var [wo_calendar, setWoCalendar] = useState([]);

  var array_data = [
    [new Date(2012, 3, 13), 37032],
    [new Date(2012, 3, 14), 38024],
    [new Date(2012, 3, 15), 38024],
    [new Date(2012, 3, 16), 38108],
    [new Date(2012, 3, 17), 38229],
    [new Date(2013, 1, 4), 38177],
    [new Date(2013, 1, 5), 38705],
    [new Date(2013, 1, 12), 38210],
    [new Date(2013, 1, 13), 38029],
    [new Date(2013, 1, 19), 38823],
    [new Date(2013, 1, 23), 38345],
    [new Date(2013, 1, 24), 38436],
    [new Date(2013, 1, 24), 38436]
  ];

  var testData = [
    [
      { type: "date", id: "Date" },
      { type: "number", id: "Won/Loss" }
    ],
    ...array_data
  ];

  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: new Date().toJSON().slice(0, 10)
      }
    ]);
  };
  return (
    <div>
      <Chart
        width={1000}
        height={400}
        chartType="Calendar"
        loader={<div>Loading Chart</div>}
        data={testData}
        options={{
          title: "Wo"
        }}
        rootProps={{ "data-testid": "1" }}
      />

      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
