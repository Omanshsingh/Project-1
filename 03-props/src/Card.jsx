import React from 'react'

// We accept 'props' here to get the data from App.jsx
const Card = (props) => {
  return (
    <div className="card">
        <img src={props.photo} alt={props.username} />
        
        <h2>{props.username}</h2>
        
        <p>{props.age} years old</p>
        
        <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>
            View Profile
        </button>
    </div>
  )
}

export default Card