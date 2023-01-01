import React from 'react'

const Route = ({x1, y1, x2, y2}) => {
  return (
    <g key="">
      <circle className="source" cx={x1} cy={y1}>
        <title></title>
      </circle> 
      <circle className="destination" cx={x1} cy={y1}>
        <title></title>
      </circle>
      <path d={`M${x1} ${y1} L ${x2} ${y2}`} />
    </g>
  )
}

export default Route