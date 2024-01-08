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
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2">Resultados</h2>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full bg-white border-l-stone-700 mb-8">
          <thead className="bg-cyan-800 text-lg text-white">
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
              <tr key={certificado.id}>
                <td className="py-2 px-4 border-b">{certificado.ideCertificado}</td>
                <td className="py-2 px-4 border-b">{certificado.nombre}</td>
                <td className="py-2 px-4 border-b">{certificado.anho}</td>
                <td className="py-2 px-4 border-b">{certificado.fechaInicio}</td>
                <td className="py-2 px-4 border-b">{certificado.cantidadDias}</td>
                <td className="py-2 px-4 border-b">{certificado.estado}</td>
                <td className="py-2 px-4 border-b">{certificado.datosCarga}</td>
                <td className="py-2 px-4 border-b text-center">
                  <CustomQRCode 
                    value={`https://servicios.ips.gov.py/miips/pdf_reposo_web.php?rep=${certificado.ideCertificado}&ide_asecot=${certificado.ideAsecot}&nro_cic=${certificado.cedula}`} 
                  />
                  
                  <a 
                    href={`https://servicios.ips.gov.py/miips/pdf_reposo_web.php?rep=${certificado.ideCertificado}&ide_asecot=${certificado.ideAsecot}&nro_cic=${certificado.cedula}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block mt-4"
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm6 15a2 2 0 110-4 2 2 0 010 4zm5-4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  PDF
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
