import Skeleton from 'react-loading-skeleton';

function SkeletonTable() {
  return (
    <div className="mx-6 my-7 mb-7">
      <h2 className="text-1xl font-bold mb-2">
        <Skeleton width={200} height={30} />
      </h2>
      <div className="overflow-x-auto sm:rounded-lg lg:rounded-lg md:rounded-lg">
        <table className="table-auto bg-white min-w-full">
          <thead className="bg-big-stone-500 text-lg uppercase text-white">
            <tr>
              {['ID Certificado', 'Nombre', 'Año', 'Fecha de Inicio', 'Cantidad de Días', 'Estado', 'Datos', 'Imprimir'].map((header, index) => (
                <th key={index} className="py-2 px-4 border-b">
                  <Skeleton width={150} height={20} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index}>
                {[...Array(8)].map((_, i) => (
                  <td key={i} className="py-2 px-4 border-b">
                    <Skeleton height={20} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SkeletonTable;
