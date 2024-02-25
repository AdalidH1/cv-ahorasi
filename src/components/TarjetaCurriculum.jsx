"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiPhone, FiMail } from "react-icons/fi";
import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
import Swal from "sweetalert2";

const TarjetaCurriculum = () => {
  const [datos, setDatos] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const router = useRouter();

  useEffect(() => {
    // Realiza la solicitud GET a la ruta de la API
    axios
      .get("/api/cvJoin")
      .then((response) => {
        setDatos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []); // Empty dependency array so useEffect runs only once on component mount

  // Función para obtener las iniciales del nombre y apellido
  const obtenerIniciales = (nombre, apellido) => {
    const primeraLetraNombre = nombre.charAt(0).toUpperCase();
    const primeraLetraApellido = apellido.charAt(0).toUpperCase();
    return `${primeraLetraNombre}${primeraLetraApellido}`;
  };

  const handleVerCurriculumClick = (curri_id) => {
    router.push(`/viewCV/${curri_id}`);
  };

  const handleEliminarCurriculumClick = (curri_id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#555',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteConfirmed(curri_id);
      }
    })
  };
  
  const handleDeleteConfirmed = async (curri_id) => {
    try {
      await axios.delete(`/api/curri/${curri_id}`);
      
      Swal.fire(
        'Eliminado!',
        'El currículum ha sido eliminado.',
        'success'
      )
  
    } catch (error) {
      console.error("Error al eliminar el currículum", error);
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal!'
      })
    }
  };

  // Filtrar los datos según el término de búsqueda
  const filteredData = datos.filter((item) =>
    `${item.nombre} ${item.apellido}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {datos.map((item) => (
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
              <h2 className="text-xl font-bold mb-2">{`${item.nombre} ${item.apellido}`}</h2>
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
  );
};

export default TarjetaCurriculum;