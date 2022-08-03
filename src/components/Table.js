import React, { useState } from 'react'

const Table = ({ columns, rows, format, perPage }) => {
  const [page, setPage] = useState(0)
  // eslint-disable-next-line
  const [selected, setSelected] = useState(rows.routes)
  const pageStart = page * perPage

  const previousPage = (event) => {
    event.preventDefault()
    setPage(page - 1)
  }

  const nextPage = (event) => {
    event.preventDefault()
    setPage(page + 1)
  }

  const handleSelectAirline = (event) => {
    let airline_id = event.target.value

    if (airline_id) {
      let filteredList = rows.routes.filter(airline => parseInt(airline.airline) === parseInt(airline_id))
      setSelected(filteredList)
    } else {
      setSelected(rows.routes)
    }
  }

  return (
    <section>
       <label htmlFor="airline-select">Show routes on </label>
       <select name="airline" id="airline-select" onChange={handleSelectAirline}>
        <option value="">--All--</option>
        {rows.airlines.map(airline => (
          <option value={airline.id} key={airline.id + airline.name}>{airline.name}</option>
        ))}
      </select>
      <table>
        <thead>
            <tr>
                {columns.map(head => <th colSpan='1' key={head.property}>{head.name}</th>)}
            </tr>
        </thead>
        <tbody>
          {selected.slice(pageStart, pageStart + perPage).map(info => {
            return (
              <tr key={info.airline + info.src + info.dest}>
                <td>{format('Airline', info.airline)}</td>
                <td>{format('Source Airport', info.src)}</td>
                <td>{format('Destination Airport', info.dest)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p>Showing {(pageStart) + 1}-{(page * perPage) + perPage} of {selected.length} routes.</p>
      <button disabled={page === 0} onClick={previousPage}>previous</button>
      <button disabled={pageStart + perPage >= selected.length} onClick={nextPage}>next</button>
    </section>
  )
}

export default Table