import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Abced = () => {
    const [aboutContent, setAboutContent] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/abcdef')
      .then(response => {
        setAboutContent(response.data); // Set the fetched content to state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);  

  return (
    <div>
     <p>{aboutContent}</p>
    </div>
  )
}

export default Abced
