import React, { Component } from 'react';
import './App.css';
import DATA from './data.js'
import Table from './components/Table';

const App = () => { 
  const columns = [
    { name: "Airline", property: "airline" },
    { name: "Source Airport", property: "src" },
    { name: "Destination Airport", property: "dest" },
  ];
  
  const formatValue = (property, value) => {
    if (property === "Airline") {
      return DATA.getAirlineById(value).name;
    } else {
      return DATA.getAirportByCode(value).name;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <p>
          Welcome to the app!
        </p>
      </section>
      <Table className='routes-table' columns={columns} rows={DATA} format={formatValue} />
    </div>
  )
}

export default App;