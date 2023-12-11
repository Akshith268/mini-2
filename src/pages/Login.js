
import {useState} from 'react';
import { useEffect } from 'react';
import '../styles/userlogin.scss';

function Login() {
 
  const[password,setpassword]=useState("");
  const[email,setemail]=useState("");

  async function loginuser(e) {
    e.preventDefault();

      const result = await fetch("https://miniproj-dy0q.onrender.com/api/login", {
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
          window.location.href="/test";
       }
       else
       {
         alert("Invalid Credentia");
       }
  }
  

  return (
    <div className="App">

        <h1>LOGIN PLEASE!!</h1>

          <form className='forms' onSubmit={loginuser}>
            <label> Email </label>
            <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" name="email" />
            <br />
            <label> Password </label>
            <input value={password} onChange={(e)=> setpassword(e.target.value)} type="password" name="password" />
            <br />
            <input type="submit" value="Login" />
          </form>
          <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
  );
}

export default Login;
