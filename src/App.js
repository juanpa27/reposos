import React, { useState } from 'react';
import Header from './Header.js'; 
import QueryForm from './QueryForm';
import ResultsTable  from './ResultsTable';
import Footer from './Footer.js';
import Loading from './Loading.js';
import SkeletonTable from './SkeletonTable';

const simulateFetchCertificados = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          ideCertificado: 55059,
          nombre: "BELLENZIER VERA JUAN PABLO",
          anho: 2023,
          fechaInicio: "05.08.2023",
          cantidadDias: 3,
          estado: "Pendiente de verificación médica en: SECCION SALUD LABORAL",
          datosCarga: "Registrado en: SECCION SALUD LABORAL en fecha: 08/08/2023",
          cedula: 4582013,
          ideAsecot: 1797530
        },
        {
          ideCertificado: 43731,
          nombre: "BELLENZIER VERA JUAN PABLO",
          anho: 2022,
          fechaInicio: "10.07.2022",
          cantidadDias: 5,
          estado: "Pendiente de verificación médica en: SECCION SALUD LABORAL",
          datosCarga: "Registrado en: SECCION SALUD LABORAL en fecha: 13/07/2022",
          cedula: 4582013,
          ideAsecot: 1797530
        },
        {
          ideCertificado: 39956,
          nombre: "BELLENZIER VERA JUAN PABLO",
          anho: 2022,
          fechaInicio: "27.06.2022",
          cantidadDias: 3,
          estado: "Pendiente de verificación médica en: SECCION SALUD LABORAL",
          datosCarga: "Registrado en: SECCION SALUD LABORAL en fecha: 29/06/2022",
          cedula: 4582013,
          ideAsecot: 1797530
        },
        {
          ideCertificado: 48722,
          nombre: "BELLENZIER VERA JUAN PABLO",
          anho: 2021,
          fechaInicio: "16.11.2021",
          cantidadDias: 2,
          estado: "Pendiente de verificación médica en: SECCION SALUD LABORAL",
          datosCarga: "Registrado en: SECCION SALUD LABORAL en fecha: 18/11/2021",
          cedula: 4582013,
          ideAsecot: 1797530
        }
      ]);
    }, 1000); // Simula un retardo de 1 segundo
  });
};

function App() { 
  const [certificados, setCertificados] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuery = async () => {
    setLoading(true);
    try {
      const data = await simulateFetchCertificados();
      setCertificados(data);
    } catch (error) {
      console.error('Error handling query:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <section className="mb-20">
        <QueryForm onQuery={handleQuery} />
        {loading && <Loading />}
        {certificados && <ResultsTable data={certificados} />}
      </section>
      <Footer />
    </div>
  );
}

export default App;