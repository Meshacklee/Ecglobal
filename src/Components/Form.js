import React from 'react'
import "./Form.css"


const Form = () => {
  return (

<div className='form'>
      <label>Your Name</label>
      <input type='text'></input>

      <label>Email</label>
      <input type='text'></input>

      <label>Subject</label>
      <input type='text'></input>


      <label>Message</label>
      <textarea rows= "6" placeholder='Type your message here'/>

      <button className='btn'> Send </button>
    </div>
  )
}

export default Form