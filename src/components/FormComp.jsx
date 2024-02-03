// components/RegisterForm.js
"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const FormComp = () => {
    const router = useRouter();
  const [habilidad, setHabilidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  

  const handleRegister = async (e, redirectToNextForm) => {
    e.preventDefault();

    try {
      // Realiza la solicitud de registro a tu API
      const response = await fetch('/api/competitions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_curri:"1",habilidad, descripcion  }),
      });

      if (response.ok) {
        // Registro exitoso
        const userData = await response.json();
        console.log('Registro hecho', userData);
        toast.success('Registro hecho');

        if (redirectToNextForm) {
          // Redirigir a la siguiente página
          router.push('/dashboard/form_idioma');
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
    <h1 className='text-black font-bold text-xl text-center mb-2'>Competencias</h1>
    <form onSubmit={handleRegister}>
     
      <div className="mb-4">
        <label htmlFor="habilidad" className="block text-sm font-semibold text-gray-600">
          Habilidad
        </label>
        <input
          type="text"
          id="habilidad"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={habilidad}
          onChange={(e) => setHabilidad(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="descripcion" className="block text-sm font-semibold text-gray-600">
          Descripcion
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
      <div className='flex justify-between'>
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
      </div>
    </form>
  </div>
  );
};

export default FormComp;
