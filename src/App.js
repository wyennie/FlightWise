// eslint-disable-next-line
import React, { useState } from 'react';
import './App.css';
import DATA from './data.js'
import Table from './components/Table'
import Select from './components/Select'

const App = () => {
  const [selected, setSelected] = useState(DATA.routes)

  const perPage = 25

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

  const handleSelectAirline = (event) => {
    let airline_id = event.target.value

    if (airline_id) {
      let filteredList = DATA.routes.filter(airline => parseInt(airline.airline) === parseInt(airline_id))
      setSelected(filteredList)
    } else {
      setSelected(DATA.routes)
    }
  }

  const filteredAirlines = () => {
    return DATA.airlines
  }

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
      <Select 
        options={filteredAirlines}
        valueKey="id"
        titleKey="name"
        allTitle="All Airlines"
        value=""
        onSelect={handleSelectAirline}
      />
      <Table 
        className='routes-table'
        columns={columns}
        rows={selected}
        format={formatValue}
        perPage={perPage}
      />
    </div>
  )
}

export default App;