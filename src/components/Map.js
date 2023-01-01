import React from 'react'
import Route from './Route'

const Map = ({getCoOrdinates, selected}) =>  {
  return (
    <svg className="map" viewBox="-180 -90 360 180">
      <g transform="scale(1 -1)">
        <image xlinkHref="equirectangular_world.jpg" href="equirectangular_world.jpg" x="-180" y="-90" height="100%" width="100%" transform="scale(1 -1)"/>
        
        {selected.map(route => {
          const coords = getCoOrdinates(route)
          const x1 = coords[0][1]
          const y1 = coords[0][0]
          const x2 = coords[1][1]
          const y2 = coords[1][0]
          console.log(x1, y1, x2, y2)
          return (
            <Route
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              Key={x1 + y1 + x2 + y2}
            />
          )
        })}
    
      </g>
    </svg>
  )
}

export default Map
