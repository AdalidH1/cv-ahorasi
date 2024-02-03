// components/RegisterForm.js
"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const FormAbout = () => {
    const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [cp, setCp] = useState('');
  const [fecha_nacimiento, setFecha] = useState('');
  const [foto, setFoto] = useState('');
  const [ocupacion, setOcupacion] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleRegister = async (e, redirectToNextForm) => {
    e.preventDefault();

    try {
      // Realiza la solicitud de registro a tu API
      const response = await fetch('/api/aboutme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_curri:"6",nombre, apellido, email, telefono, direccion, cp, fecha_nacimiento, foto, ocupacion, descripcion  }),
      });

      if (response.ok) {
        // Registro exitoso
        const userData = await response.json();
        console.log('Registro hecho', userData);
        toast.success('Registro hecho');

        if (redirectToNextForm) {
          // Redirigir a la siguiente página
          router.push('/dashboard/form_exp');
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
    <h1 className='text-black font-bold text-xl text-center mb-2'>Acerca de mi</h1>
    <form onSubmit={handleRegister}>
      <div className='flex space-x-6'>
      <div>
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-sm font-semibold text-gray-600">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-sm font-semibold text-gray-600">
          Apellido
        </label>
        <input
          type="text"
          id="apellido"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contra" className="block text-sm font-semibold text-gray-600">
          Telefono
        </label>
        <input
          type="text"
          id="telefono"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      </div>
      <div>
      <div className="mb-4">
        <label htmlFor="contra" className="block text-sm font-semibold text-gray-600">
          Dirección
        </label>
        <input
          type="text"
          id="direccion"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contra" className="block text-sm font-semibold text-gray-600">
          C.P
        </label>
        <input
          type="text"
          id="cp"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={cp}
          onChange={(e) => setCp(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contra" className="block text-sm font-semibold text-gray-600">
          Fecha de nacimiento
        </label>
        <input
          type="date"
          id="fecha"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={fecha_nacimiento}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contra" className="block text-sm font-semibold text-gray-600">
          Ocupación
        </label>
        <input
          type="text"
          id="ocupacion"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          required
          value={ocupacion}
          onChange={(e) => setOcupacion(e.target.value)}
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
      <div className='flex justify-end'>
 
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

export default FormAbout;
