import React from 'react';

export const FormSearch: React.FC = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-72 space-y-2">
            <h2 className="text-lg font-semibold text-gray-700">Buscar Ubicación</h2>
            
            <input
                type="text"
                placeholder="Departamento"
                className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Provincia"
                className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Distrito"
                className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Centro Poblado"
                className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Dirección"
                className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Nro"
                className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Urbanización"
                className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Mza"
                className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Lt"
                className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600">
                Buscar
            </button>
            <button className="w-full bg-red-500 text-white py-1 rounded-md hover:bg-red-600 mt-2">
                Limpiar Búsqueda
            </button>

            <div className="pt-4">
                <h3 className="text-gray-600 font-semibold">Búsqueda por coordenadas:</h3>
                <input
                    type="text"
                    placeholder="X"
                    className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                />
                <input
                    type="text"
                    placeholder="Y"
                    className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                />
                <button className="w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600 mt-2">
                    Buscar X, Y
                </button>
            </div>
        </div>
    );
};
