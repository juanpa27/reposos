import React, { useState } from 'react';
import Header from './Header.js'; 
import QueryForm from './QueryForm';
import ResultsTable  from './ResultsTable';
import config from './config';
import Footer from './Footer.js';
import Loading from './Loading.js';


function App() { 
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);



  
  const generateToken = async () => {
    const tokenUrl = config.tokenUrl+'/user';
    const credentials = {
      user: config.credentials.user,
      password: config.credentials.password,
    };

    try {
      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Failed to generate token');
      }

      const tokenData = await response.json();
      return tokenData.token; // Assuming the token is returned in the response
      
    } catch (error) {
      console.error('Error generating token:', error);
      throw error;
    }
  };

  const handleQuery = async (cedula) => {
    setLoading(true);
    try {
      const token = await generateToken();

      // Aquí realizarás la consulta a la API con el número de cédula y el token
      const apiUrl = config.tokenUrl+`/get/4582013`;
      const apiHeaders = {
        Authorization: `${token}`,
      }; 

      const response = await fetch(apiUrl, {
        headers: apiHeaders,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await response.json();
      setLoading(false);
      setUserData(data);
      //console.log(data);
    } catch (error) {
      console.error('Error handling query:', error);
    }
  };

  return (
    <div>
    <Header/>
    <section className="mb-20">
      <QueryForm onQuery={handleQuery} />
      {loading && <Loading />}
      {userData && <ResultsTable data={userData} />}
    </section>
    <Footer/>
  </div>
  );
}

export default App;