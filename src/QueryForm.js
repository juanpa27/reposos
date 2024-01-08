import React, { useState } from 'react';

function QueryForm({ onQuery }) {
  const [cedula, setCedula] = useState('');

  const handleInputChange = (e) => {
    setCedula(e.target.value);
  };

  const handleQueryClick = () => {
    onQuery(cedula);
  };

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      handleQueryClick();
    }
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col md:flex-row items-center my-4">
        <label className="block text-gray-700 text-lg font-bold mb-2 md:mr-4">
          N&uacute;mero de C&eacute;dula:
          <input
            className="shadow-xl border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-2 md:mt-0"
            type="text"
            value={cedula}
            onChange={handleInputChange}
            onKeyPress={pressEnter}            
          />
          
        </label>
      </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 md:mt-0"
          onClick={handleQueryClick}
        >
          Consultar
        </button>
        
    </div>
  );
}

export default QueryForm;
