// components/RegisterForm.js
"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const FormLan = () => {
    const router = useRouter();
  const [idioma, setIdioma] = useState('');
  const [nivel, setNivel] = useState('');
  

  const handleRegister = async (e, redirectToNextForm) => {
    e.preventDefault();

    try {
      // Realiza la solicitud de registro a tu API
      const response = await fetch('/api/language', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_curri:"6",idioma, nivel  }),
      });

      if (response.ok) {
        // Registro exitoso
        const userData = await response.json();
        console.log('Registro hecho', userData);
        toast.success('Registro hecho');

        if (redirectToNextForm) {
          // Redirigir a la siguiente página
          router.push('/dashboard/form_pasatiempos');
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
    <h1 className='text-black font-bold text-xl text-center mb-2'>Idiomas</h1>
    <form onSubmit={handleRegister}>
     
      <div className="mb-4">
        <label htmlFor="Idioma" className="block text-sm font-semibold text-gray-600">
          Idioma
        </label>
        <input
          type="text"
          id="idioma"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={idioma}
          onChange={(e) => setIdioma(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="nivel" className="block text-sm font-semibold text-gray-600">
          Nivel
        </label>
        <input
          type="text"
          id="nivel"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={nivel}
          onChange={(e) => setNivel(e.target.value)}
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

export default FormLan;
