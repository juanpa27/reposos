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
      <div className="flex flex-col md:flex-row items-center my-4 gap-x-3">
       
        <label for="text" className="ml-6 block mb-2 text-sm font-bold text-gray-700"> N&uacute;mero de C&eacute;dula:</label>
        <input type="text" className="
        bg-gray-50 border 
        border-gray-300 
        text-gray-900 
        text-lg 
        rounded-lg 
        focus:ring-blue-500 
        focus:border-blue-500 
        block sm:w-1/2 md:w-1/4 lg:w-1/5 p-2.5 
        dark:bg-white
        dark:border-gray-600 
        dark:placeholder-gray-400 
        dark:text-black 
        dark:focus:ring-blue-500 
        dark:focus:border-blue-500" 
        
        value={4582013}
        onChange={handleInputChange}
        onKeyPress={pressEnter} 
        required />
         
        <button
          className="bg-big-stone-400
                     hover:bg-big-stone-600
                     text-white 
                     font-bold 
                     py-2 px-4 
                     rounded 
                     focus:outline-none 
                     focus:shadow-outline 
                     mt-4 md:mt-0"
          onClick={handleQueryClick}
        >
          Consultar
        </button>
          
        
      </div>
      
        
    </div>
  );
}

export default QueryForm;
