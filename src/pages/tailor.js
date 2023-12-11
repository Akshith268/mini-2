import React, { useState } from 'react';
import axios from 'axios';
import '../styles/tailorregistration.scss';

const Tailor = () => {
  const [tailorData, setTailorData] = useState({
    name: '',
    email: '',
    location: { // Initialize with the first option's latitude and longitude
      latitude: 0,
      longitude: 0
    },
    password: '',
    Number:'',
    url:'',
    // Other fields as needed for registration
  });

  const locations={
    option1:{   
        latitude: 17.5393,
        longitude: 78.4834
        },  
    option2:{
        latitude: 17.5378,
        longitude: 78.4846
        },
      option3:{
        latitude: 18.0072,
        longitude: 79.5584
        },
      option4:{
        latitude:17.600308,
        longitude:78.4839631
        },
      option5:{
        latitude:17.6039,
        longitude:78.4914
      }
    }
  

  const handleLocationChange = (event) => {
    // Update latitude and longitude based on the selected location
    const selectedLocation = event.target.value;
    // Retrieve latitude and longitude for the selected location from your predefined options

    // Update the tailorData state with the selected location's latitude and longitude
    setTailorData({
      ...tailorData,
      selectedLocation,
      location: {
        latitude: locations[selectedLocation].latitude,
        longitude: locations[selectedLocation].longitude
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send tailor registration data to the backend API
     const response= await axios.post('https://miniproj-dy0q.onrender.com/api/tailorRegistration', tailorData);
      // Handle success or redirect to another page
      if(response.data.status=='success')
      {
        alert("Tailor registered successfully");
        window.location.href="/otp";
      }
    } catch (error) {
      console.error('Error registering tailor:', error);
    }
  };

  return (
     
    <form className='content' onSubmit={handleSubmit}>
      <h1>Tailor Registration</h1>
      <label>
        Name:
        <input
          type="text"
          value={tailorData.name}
          onChange={(event) => setTailorData({ ...tailorData, name: event.target.value })}
        />
      </label>
      {/* Other fields for registration */}
      <label>
        Email:
        <input
          type="text"
          value={tailorData.email}
          onChange={(event) => setTailorData({ ...tailorData, email: event.target.value })}
        />
      </label>
      <label>
        Location:
        <select value={tailorData.location} onChange={handleLocationChange}>
          {/* Options for predefined locations */}
          <option value="option1">kompally</option>
          <option value="option2">Kompally jayabheri park</option>
          <option value="option3">Hanamkonda</option>
          <option value="option4">Technical campus</option>
          <option value="option5">Oxygenpark</option>
          {/* Add other predefined options */}
        </select>
      </label>
      <label>
        Password:
        <input
          type="password"
          value={tailorData.password}
          onChange={(event) => setTailorData({ ...tailorData, password: event.target.value })}
        />
      </label>
       <label>
        phone number:
        <input type='number' value={tailorData.Number}
         onChange={(event)=> setTailorData ({...tailorData,Number: event.target.value}) } />
       </label>
       <label>
        Social media url:
        <input type='url' value={tailorData.url} 
        onChange={(event)=>setTailorData({...tailorData,url:event.target.value})} />
       </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Tailor;
