// components/RegisterForm.js
"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const FormComp = () => {

  const schema = yup
    .object({
      habilidad: yup.string().required("La habilidad es obligatorio"),
      descripcion: yup.string().required("La descripción es obligatoria"),
    })
    .required();

    const router = useRouter();

    const {
      register,
      handleSubmit,
      formState: { errors},
    } = useForm({
      resolver: yupResolver(schema),
    });

  const [habilidad, setHabilidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  

  // const handleRegister = async (e, redirectToNextForm) => {
  //   e.preventDefault();

  //   try {
  //     // Realiza la solicitud de registro a tu API
  //     const response = await fetch('/api/competitions', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ id_curri:"6",habilidad, descripcion  }),
  //     });

  //     if (response.ok) {
  //       // Registro exitoso
  //       const userData = await response.json();
  //       console.log('Registro hecho', userData);
  //       toast.success('Registro hecho');

  //       if (redirectToNextForm) {
  //         // Redirigir a la siguiente página
  //         router.push('/dashboard/form_idioma');
  //       } else {
  //         // No redirigir, simplemente actualizar la página
  //         location.reload();
  //       }
  //     } else {
  //       // Maneja el error en el registro
  //       const errorData = await response.json();
  //       console.error('Error en el registro:', errorData.message);
  //       toast.error('Error en el registro');
  //     }
  //   } catch (error) {
  //     console.error('Error en el registro:', error.message);
  //     toast.error('Error en el registro');
  //   }
  // };

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/competitions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Registro exitoso");
        router.push("/dashboard/form_edu");
      } else {
        const errData = await response.json();
        toast.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      toast.error("Error en el registro");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-lg ">
    <h1 className='text-black font-bold text-xl text-center mb-2'>Competencias</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
     
      <div className="mb-4">
        <label htmlFor="habilidad" className="block text-sm font-semibold text-gray-600">
          Habilidad
        </label>
        <input
          type="text"
          id="habilidad"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          {...register("habilidad")}
        />
        <p className='text-red-600'>{errors.ocupacion?.message}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="descripcion" className="block text-sm font-semibold text-gray-600">
          Descripcion
        </label>
        <input
          type="text"
          id="descripcion"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          {...register("descripcion")}
        />
        <p className='text-red-600'>{errors.descripcion?.message}</p>
      </div>
      <div className='flex justify-between'>
      <button
        type="submit"
        className="w-32 bg-blue-500 text-white py-2 rounded-sm font-bold hover:bg-blue-600"
      >
        Agregar más
      </button>
      <button
        type="submit"
        className="w-32 bg-blue-500 text-white py-2 rounded-sm font-bold hover:bg-blue-600"
      >
        Siguiente
      </button>
      </div>
    </form>
  </div>
  );
};

export default FormComp;
