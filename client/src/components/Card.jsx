import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h5>{props.id}</h5>
        <h5>{props.status}</h5>
        <h5>{props.image}</h5>
        <h5>{props.species}</h5>
        
    </div>
  )
}

export default Card