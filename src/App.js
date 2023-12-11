import React, { useState } from 'react';
import Header from './Header.js'; 
import QueryForm from './QueryForm';
import ResultsTable  from './ResultsTable';

function App() { 
  const [userData, setUserData] = useState(null);
  
  const generateToken = async () => {
    const tokenUrl = 'http://10.20.23.88:8080/WsCertificadoReposo/user';
    const credentials = {
      user: 'ips',
      password: '123456',
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
    try {
      const token = await generateToken();

      // Aquí realizarás la consulta a la API con el número de cédula y el token
      const apiUrl = `http://10.20.23.88:8080/WsCertificadoReposo/get/${cedula}`;
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
      setUserData(data);
      console.log(data);
    } catch (error) {
      console.error('Error handling query:', error);
    }
  };

  return (
    <div>
    <Header/>
    <QueryForm onQuery={handleQuery} />
    {userData && <ResultsTable data={userData} />}
  </div>
  );
}

export default App;