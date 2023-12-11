import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ratings = () => {
  const [tailorDetails, setTailorDetails] = useState(null);

  useEffect(() => {
    // Fetch tailor details based on the tailor_id from the query parameter
    const fetchTailorDetails = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const tailorId = urlParams.get('tailor_id');

      try {
        const response = await axios.get(`https://miniproj-dy0q.onrender.com/api/tailors/${tailorId}`);
        setTailorDetails(response.data); // Set the tailor details in state
      } catch (error) {
        console.error('Error fetching tailor details:', error);
      }
    };

    fetchTailorDetails();
  }, []);

  return (
    <div>
      {tailorDetails ? (
        <div>
          <h1>{tailorDetails.name}</h1>
          <p>Email: {tailorDetails.email}</p>
          {/* Display other details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Ratings;
