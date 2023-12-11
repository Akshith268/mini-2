import React, { useEffect } from 'react'
import '../styles/home.scss';

function Home() {
    
  return (
    <div className='home'>
    
        <h1>Tailor Connect</h1>
      <div className='content'>
        <p> <a href="/login">IAM A USER</a> </p>
        <br />
        <p><a href='/tailorlogin'>IAM A TAILOR!!</a></p>
      </div>
    </div>
  )
}

export default Home