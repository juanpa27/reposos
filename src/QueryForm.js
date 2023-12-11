// QueryForm.js
import React, { useState } from 'react';


function QueryForm({ onQuery }) {
  const [cedula, setCedula] = useState('');

  const handleInputChange = (e) => {
    setCedula(e.target.value);
  };

  const handleQueryClick = () => {
    onQuery(cedula);
  };

  return (
    <div className="my-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Número de Cédula:
        <input
          className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={cedula}
          onChange={handleInputChange}
        />
      </label>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleQueryClick}
      >
        Consultar Reposos
      </button>
    </div>
  );
}

export default QueryForm;
