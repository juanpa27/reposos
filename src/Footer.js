//componente footer con el año bien estilida en tailwind css
import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
        <div className="flex items-center">
            <h1 className="text-sm font-bold"> &copy; INUTIL PEDIR SOCORRO - {
                new Date().getFullYear()
                                     
            }</h1>
        </div>
        </footer>
    );
}

export default Footer;