import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/tailorlogin.scss';

function Tailorlogin() {
      

    const[password,setpassword]=useState("");
    const[email,setemail]=useState("");

    async function loginuser(e) {
      e.preventDefault();
  
        const result = await fetch("https://miniproj-dy0q.onrender.com/api/tailorlogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "email": email,
            "password": password,
          })
        });
    
      
    
        const data = await result.json();
         if(data.status=='ok')
         {
            alert("Login Successfull");
            window.location.href="/tailordashboard";
         }
         else
         {
           alert("Invalid Credentia");
         }
    }




     
  return (
    <div className='content'>
        <h1>Tailor Login</h1>
        <form className='forms' action="http://localhost:5000/api/tailorlogin" method="POST" onSubmit={loginuser} >
            <label> Email: </label>
            <input type="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)} />
            <br />
            <label> Password: </label>
            <input type="password" name="password" value={password} onChange={(e)=> setpassword(e.target.value)} />
            <br />
            <input type="submit" value="Login" />
    
        </form>

          <p>Don't have an account? <a href="/tailor">Register</a></p>
    </div>
  )
}

export default Tailorlogin;