import React from 'react'

const Select = ({ options, valueKey, titleKey, allTitle, value, onSelect}) => {

  return (
    <>
      <label htmlFor="airline-select">Show routes on </label>
      <select name="airline" id="airline-select" onChange={onSelect}>
        <option value="">--All--</option>
          {options().map(airline => (
            <option value={airline.id} key={airline.id + airline.name}>{airline.name}</option>
          ))}
      </select>
    </>
  )
}

export default Select