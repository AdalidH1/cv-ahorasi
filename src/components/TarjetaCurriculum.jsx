"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiPhone, FiMail } from "react-icons/fi";
import { useRouter } from "next/router"; // Cambiado de "next/navigation" a "next/router"
import { toast } from "react-toastify";

const TarjetaCurriculum = () => {
  const [datos, setDatos] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const router = useRouter();

  useEffect(() => {
    // Realiza la solicitud GET a la ruta de la API
    axios.get("/api/cvJoin").then((response) => {
      setDatos(response.data);
    }).catch((error) => {
      console.error("Error fetching data from API:", error);
    });
  }, []); // Empty dependency array so useEffect runs only once on component mount

  // Función para obtener las iniciales del nombre y apellido
  const obtenerIniciales = (nombre, apellido) => {
    const primeraLetraNombre = nombre.charAt(0).toUpperCase();
    const primeraLetraApellido = apellido.charAt(0).toUpperCase();
    return `${primeraLetraNombre}${primeraLetraApellido}`; // Corregido el retorno de la cadena
  };

  const handleVerCurriculumClick = (curri_id) => {
    router.push(`/viewCV/${curri_id}`); // Corregido el formato de la ruta
  };

  const handleEliminarCurriculumClick = (curri_id) => {
    // Trigger the confirmation toast
    toast.warning("Are you sure you want to delete this?", {
      autoClose: false,
      closeOnClick: false,
      draggable: true,
      closeButton: ({ closeToast }) => (
        <button
          className="bg-red-500 text-white  rounded hover:bg-red-900"
          onClick={() => handleDeleteConfirmed(curri_id, closeToast)}
        >
          Eliminar
        </button>
      ),
    });
  };

  const handleDeleteConfirmed = async (curri_id, closeToast) => {
    try {
      await axios.delete(`/api/curri/${curri_id}`, { // Corregido el formato de la ruta
        params: { id: curri_id },
      });
      closeToast(); // Close the toast
      // No es necesario actualizar el estado aquí ya que el useEffect se activará y volverá a obtener los datos actualizados
    } catch (error) {
      console.error("Error al eliminar el currículum", error);
    }
  };

  // Filtrar los datos según el término de búsqueda
  const filteredData = datos.filter((item) =>
    `${item.nombre} ${item.apellido}`.toLowerCase().includes(searchTerm.toLowerCase()) // Corregido la interpolación de cadenas
  );

  return (
    <div>
      <div className="flex justify-center">
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-slate-500 dark:text-slate-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full md:w-80 p-4 pl-10 text-sm text-slate-900 border-b-2 border-slate-200 rounded-lg bg-white-100 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredData.map((item) => (
          <div
            key={item.curri_id}
            className="bg-slate-200 p-4 rounded-md shadow-lg"
          >
            <div className="flex justify-left items-center mb-4">
              {/* Iniciales */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-slate-200 rounded-full dark:bg-slate-600">
                <span className="font-medium text-gray-700 dark:text-gray-100">
                  {obtenerIniciales(item.nombre, item.apellido)}
                </span>
              </div>
              {/* Ocupación */}
              <div className="ml-4 text-gray-600">
                <h2 className="text-xl font-bold mb-2">{`${item.nombre} ${item.apellido}`}</h2> // Corregido la interpolación de cadenas
                {item.ocupacion}
              </div>
            </div>
            <div className="flex flex-col items-start pl-20">
              {/* Teléfono */}
              <div className="flex items-center mb-2">
                <FiPhone className="mr-2 text-slate-700" />
                <p className="text-lg text-gray-700">{item.telefono}</p>
              </div>
              {/* Email */}
              <div className="flex items-center mb-4">
                <FiMail className="mr-2 text-slate-700" />
                <p className="text-lg text-gray-700">{item.email}</p>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              {/* Botón para eliminar el currículum */}
              <button
                className="bg-slate-700 text-white py-2 px-4 rounded hover:bg-red-900"
                onClick={() => handleEliminarCurriculumClick(item.curri_id)}
              >
                Eliminar
              </button>
              {/* Botón para ver el currículum completo */}
              <button
                className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-500"
                onClick={() => handleVerCurriculumClick(item.curri_id)}
              >
                Ver Curriculum
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TarjetaCurriculum;
