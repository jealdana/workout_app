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
  const [input,setinput] = useState({value: ''});

  const inputHandler = (event) => {
    setinput({value:event.target.value})
    console.log(input);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        name: input.value, //new Date().toJSON().slice(0, 10),
        calendar: (
          <Chart
            width={300}
            height={400}
            chartType="Calendar"
            loader={<div>Loading Chart</div>}
            data={testData}
            options={{
              title: input.value
            }}
            rootProps={{ "data-testid": "1" }}
          />
        ),
        counter: 0
      }
    ]);
    setinput({value:''})
  };
  return (
    <div>
      <form action=""><input type="text" value={input.value} onChange={inputHandler} placeholder='type here'/> <input type="submit" value="submit" onClick={addItem}/></form>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div className="row">
              <div className="col">{item.name}</div>
              <div className="col">{item.calendar}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
