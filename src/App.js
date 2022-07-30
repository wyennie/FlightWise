import React, { Component } from 'react';
import { info, getAirportByCode, getAirlineById } from './data.js'
import './App.css';

const Routes = () => {
  return (
    <table>
      <tbody>
        {info.routes.map(info => {
          let id = info.airline
          let code = info.src
          return (
            <tr key={id + code + info.dest}>
              <td>{getAirlineById(id)}</td>
              <td>{getAirportByCode(code)}</td>
              <td>{info.dest}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <p>
      Welcome to the app!
    </p>
  </section>
  <Routes />
</div>
)

export default App;