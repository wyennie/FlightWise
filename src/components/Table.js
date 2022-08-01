import React from 'react'

const Table = ({ columns, rows, format }) => {

  return (
    <table>
      <thead>
          <tr>
              {columns.map(head => <th colSpan='1' key={head.property}>{head.name}</th>)}
          </tr>
      </thead>
      <tbody>
        {rows.routes.map(info => {
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
  )
}

export default Table