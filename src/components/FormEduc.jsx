// components/RegisterForm.js
"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const FormEduc = () => {
    const router = useRouter();
  const [titulo, setTitulo] = useState('');
  const [institucion, setInstitucion] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [fecha_inicio, setFecha_Inicio] = useState('');
  const [fecha_fin, setFecha_Fin] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleRegister = async (e, redirectToNextForm) => {
    e.preventDefault();

    try {
      // Realiza la solicitud de registro a tu API
      const response = await fetch('/api/education', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_curri:"1",titulo, institucion, localidad, fecha_inicio, fecha_fin, descripcion }),
      });

      if (response.ok) {
        // Registro exitoso
        const userData = await response.json();
        console.log('Registro hecho', userData);
        toast.success('Registro hecho');

        if (redirectToNextForm) {
          // Redirigir a la siguiente página
          router.push('/dashboard/form_edu');
        } else {
          // No redirigir, simplemente actualizar la página
          location.reload();
        }
      } else {
        // Maneja el error en el registro
        const errorData = await response.json();
        console.error('Error en el registro:', errorData.message);
        toast.error('Error en el registro');
      }
    } catch (error) {
      console.error('Error en el registro:', error.message);
      toast.error('Error en el registro');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-lg ">
    <h1 className='text-black font-bold text-xl text-center mb-2'>Educación</h1>
    <form onSubmit={handleRegister}>
      <div className='flex space-x-6'>
      <div>
      <div className="mb-4">
        <label htmlFor="Titulo" className="block text-sm font-semibold text-gray-600">
          Titulo
        </label>
        <input
          type="text"
          id="titulo"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Institucion" className="block text-sm font-semibold text-gray-600">
          Institucion
        </label>
        <input
          type="text"
          id="institucion"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={institucion}
          onChange={(e) => setInstitucion(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="localidad" className="block text-sm font-semibold text-gray-600">
         Localidad
        </label>
        <input
          type="text"
          id="localidad"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={localidad}
          onChange={(e) => setLocalidad(e.target.value)}
        />
      </div>
      
      </div>
      <div>
      <div className="mb-4">
        <label htmlFor="fecha_inicio" className="block text-sm font-semibold text-gray-600">
          Fecha de Inicio
        </label>
        <input
          type="date"
          id="telefono"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={fecha_inicio}
          onChange={(e) => setFecha_Inicio(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="fecha_fin" className="block text-sm font-semibold text-gray-600">
          Fecha de Fin
        </label>
        <input
          type="date"
          id="fecha_fin"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={fecha_fin}
          onChange={(e) => setFecha_Fin(e.target.value)}
        />
      </div>
     
      </div>
      
      </div>
      
      <div className="mb-4">
        <label htmlFor="contra" className="block text-sm font-semibold text-gray-600">
          Descripción
        </label>
        <input
          type="text"
          id="descripcion"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-32 bg-blue-500 text-white py-2 rounded-sm font-bold hover:bg-blue-600"
        onClick={(e) => handleRegister(e, false)}
      >
        Agregar más
      </button>
      <button
        type="submit"
        className="w-32 bg-blue-500 text-white py-2 rounded-sm font-bold hover:bg-blue-600"
        onClick={(e) => handleRegister(e, true)}
      >
        Siguiente
      </button>
    </form>
  </div>
  );
};

export default FormEduc;
