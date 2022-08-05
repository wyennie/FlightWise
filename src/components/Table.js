import React, { useState } from 'react'

const Table = ({ columns, rows, format, perPage }) => {
  const [page, setPage] = useState(0)
  const pageStart = page * perPage

  const previousPage = (event) => {
    event.preventDefault()
    setPage(page - 1)
  }

  const nextPage = (event) => {
    event.preventDefault()
    setPage(page + 1)
  }

  return (
    <section>
      <table>
        <thead>
            <tr>
                {columns.map(head => <th colSpan='1' key={head.property}>{head.name}</th>)}
            </tr>
        </thead>
        <tbody>
          {rows.slice(pageStart, pageStart + perPage).map(info => {
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
      <p>Showing {(pageStart) + 1}-{(page * perPage) + perPage} of {rows.length} routes.</p>
      <button disabled={page === 0} onClick={previousPage}>previous</button>
      <button disabled={pageStart + perPage >= rows.length} onClick={nextPage}>next</button>
    </section>
  )
}

export default Table