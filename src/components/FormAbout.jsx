<<<<<<< HEAD
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function FormAbout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {


    const res = await fetch("/api/aboutme", {
      method: "POST",
      body: JSON.stringify({
        id_curri: "1",
        nombre: data.username,
        apellido: data.email,
        email: data.email,
        telefono: data.telefono,
        direccion: data.direccion,
        foto:"",
        cp: data.cp,
        fecha_nacimiento: data.fecha_nacimiento,
        ocupacion: data.ocupacion,
        descripcion: data.descripcion,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res)
    if (!res.error) {
      router.push("/dashboard/form_cv");
    }
  });

  return (
    <div className="has-[calc(100vh-7rem)] flex justify-center items-center mt-4">
      <form action="" onSubmit={onSubmit} className="w-1/4">
        <h1 className=" font-bold text-4xl mb-4">Registrar</h1>

        <label htmlFor="nombre" className="text-slate-500 mb-2 block text-sm">
          Nombre
        </label>
        <input
          type="text"
          {...register("nombre", {
            required: {
              value: true,
              message: "Este campo es requerido.",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 w-full"
        />
        {errors.nombre && (
          <span className="text-red-500 text-xs">
            {errors.nombre.message}
          </span>
        )}


        <label htmlFor="apellido" className="text-slate-500 mb-2 block text-sm">
          Apellido
        </label>
        <input
          type="text"
          {...register("apellido", {
            required: {
              value: true,
              message: "Este campo es requerido.",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 w-full"
        />
        {errors.apellido && (
          <span className="text-red-500 text-xs">
            {errors.apellido.message}
          </span>
        )}

        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Este campo es requerido.",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 w-full"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}


        <label htmlFor="telefono" className="text-slate-500 mb-2 block text-sm">
          Telefono
        </label>
        <input
          type="number"
          {...register("telefono", {
            required: {
              value: true,
              message: "Este campo es requerido.",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 w-full"
        />
        {errors.telefono && (
          <span className="text-red-500 text-xs">
            {errors.telefono.message}
          </span>
        )}


        <label htmlFor="direccion" className="text-slate-500 mb-2 block text-sm">
          Direccion
        </label>
        <input
          type="text"
          {...register("direccion", {
            required: {
              value: true,
              message: "Este campo es requerido.",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 w-full"
        />
        {errors.direccion && (
          <span className="text-red-500 text-xs">
            {errors.direccion.message}
          </span>
        )}
        <label htmlFor="cp" className="text-slate-500 mb-2 block text-sm">
          Código Postal
        </label>
        <input
          type="number"
          {...register("cp", {
            required: {
              value: true,
              message: "Este campo es requerido.",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 w-full"
        />
        {errors.cp && (
          <span className="text-red-500 text-xs">
            {errors.cp.message}
          </span>
        )}


        <label htmlFor="fecha_nacimiento" className="text-slate-500 mb-2 block text-sm">
          Fecha de Nacimiento
        </label>
        <input
          type="date"
          {...register("username", {
            required: {
              value: true,
              message: "Este campo es requerido.",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 w-full"
        />
        {errors.fecha_nacimiento && (
          <span className="text-red-500 text-xs">
            {errors.fecha_nacimiento.message}
          </span>
        )}


        <label htmlFor="ocupacion" className="text-slate-500 mb-2 block text-sm">
          Ocupación
        </label>
        <input
          type="text"
          {...register("ocupacion", {
            required: {
              value: true,
              message: "Este campo es requerido.",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 w-full"
        />
        {errors.ocupacion && (
          <span className="text-red-500 text-xs">
            {errors.ocupacion.message}
          </span>
        )}

<label htmlFor="descripcion" className="text-slate-500 mb-2 block text-sm">
          Descripción
        </label>
        <input
          type="text"
          {...register("descripcion", {
            required: {
              value: true,
              message: "Este campo es requerido.",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 w-full"
        />
        {errors.descripcion && (
          <span className="text-red-500 text-xs">
            {errors.descripcion.message}
          </span>
        )}
        
        <button className="w-full bg-blue-500 rounded-lg text-white p-3 mt-2">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default FormAbout;
=======
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
        body: JSON.stringify({ id_curri:"1",nombre, apellido, email, telefono, direccion, cp, fecha_nacimiento, foto, ocupacion, descripcion  }),
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

export default FormAbout;
>>>>>>> 2b569a10c52590e8ce63a1591dd38aec21e468d4
