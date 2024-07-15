import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className='contact'>
    <div className="lower">
    <form action="">
      <h1 className="h1">Contact</h1>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <input type="text" placeholder="Subject" />
      <textarea
        name=""
        id=""
        cols="15"
        rows="5"
        placeholder="Message"
      ></textarea>
      <button className="b3">Contact</button>
    </form>
  </div>
    </section>
  )
}

export default Contact