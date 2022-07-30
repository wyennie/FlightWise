import React, { Component } from 'react';
import Info from './data.js'
import './App.css';

const Routes = () => {
  return (
    <table>
      <tbody>
        {Info.routes.map(info => {
          return (
            <tr key={info.airline + info.src + info.dest}>
              <td>{info.airline}</td>
              <td>{info.src}</td>
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