import React from 'react';
import Logo from './assets/apple-touch-icon.png';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-2xl font-bold">Consulta de Reposo</h1>
      </div>
    </header>
  );
}

export default Header;
