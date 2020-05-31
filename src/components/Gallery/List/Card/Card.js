import React from 'react'

const Card = (props) => {
  return (
    <div>
      <img src={props.url} alt={props.id}/>
    </div>
  )
}

export  default Card