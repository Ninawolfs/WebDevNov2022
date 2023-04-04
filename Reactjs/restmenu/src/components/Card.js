import React from 'react'

function Card(props) {
  return (
    <div>
        <h3>{props.todoTitel}</h3>
        <p>The good food we serve</p>
    </div>
  )
}

export default Card