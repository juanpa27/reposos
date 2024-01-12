import React from 'react';
import QRCode from 'qrcode.react';

function CustomQRCode({ value }) {
  return (
    <QRCode
      value={value}
      renderAs="svg"
      level="H"
      size={180}
      imageSettings={{
        src: require('./assets/apple-touch-icon.png'),
        height: 50,
        width: 50,
        excavate: true,
      }}
      >
    </QRCode>
  );
}

function ResultsTable({ data }) {
  
  return (
    <div className="mx-6 my-7 mb-7">
      <h2 className="text-1xl font-bold mb-2">Resultado(s)</h2>
      <div className="overflow-x-auto sm:rounded-lg lg:rounded-lg md:rounded-lg">
        <table className="table-auto bg-white min-w-full">
          <thead className="bg-big-stone-500 text-lg uppercase text-white">
            <tr>
              <th className="py-2 px-4 border-b">ID Certificado</th>
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b">A&ntilde;o</th>
              <th className="py-2 px-4 border-b">Fecha de Inicio</th>
              <th className="py-2 px-4 border-b">Cantidad de Días</th>
              <th className="py-2 px-4 border-b">Estado</th>
              <th className="py-2 px-4 border-b">Datos</th>
              <th className="py-2 px-4 border-b">Imprimir</th>
              
            </tr>
          </thead>
          <tbody>
            {data.certificados.map((certificado) => (
              <tr key={certificado.id} class="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600/10">
                <td className="py-2 px-4 border-b">{certificado.ideCertificado}</td>
                <td className="py-2 px-4 border-b">{certificado.nombre}</td>
                <td className="py-2 px-4 border-b">{certificado.anho}</td>
                <td className="py-2 px-4 border-b">{certificado.fechaInicio}</td>
                <td className="py-2 px-4 border-b">{certificado.cantidadDias}</td>
                <td className="py-2 px-4 border-b">{certificado.estado}</td>
                <td className="py-2 px-4 border-b">{certificado.datosCarga}</td>
                <td className="py-2 px-4 border-b text-center">
                  <CustomQRCode className="border-lg"
                    value={`https://servicios.ips.gov.py/miips/pdf_reposo_web.php?rep=${certificado.ideCertificado}&ide_asecot=${certificado.ideAsecot}&nro_cic=${certificado.cedula}`} 
                  />
                  
                  <a 
                    href={`https://servicios.ips.gov.py/miips/pdf_reposo_web.php?rep=${certificado.ideCertificado}&ide_asecot=${certificado.ideAsecot}&nro_cic=${certificado.cedula}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    bg-big-stone-400
                    hover:bg-big-stone-600
                    text-white 
                    py-2 px-4 
                    rounded-md 
                    inline-block 
                    mt-4"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-12" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" /><path d="M17 18h2" /><path d="M20 15h-3v6" /><path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" /></svg>
                </a>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultsTable;
