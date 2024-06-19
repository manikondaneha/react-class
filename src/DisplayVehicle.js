import React from 'react'

export default function DisplayVehicle(props) {
  return (
    <div>
      {
        props.myVechicle.map((vehicle)=>(
            <div>
                <p><b>Name: </b>{vehicle.name}</p>
                <p><b>Price: </b>{vehicle.price}</p>
                <p><b>Model: </b>{vehicle.model}</p>
                <img src={vehicle.image} alt={vehicle.name} width="25%"/>
            </div>
        ))
      }
    </div>
  )
}
