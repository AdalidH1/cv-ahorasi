// components/RegisterForm.js
"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const FormEduc = () => {

  const schema = yup
    .object({
      titulo: yup.string().required("El titulo es obligatorio"),
      institucion: yup.string().required("La institución es obligatoria"),
      localidad: yup.string().required("La localidad es obligatoria"),
      fecha_inicio: yup.string().required("La fecha de inicio es obligatoria"),
      fecha_fin: yup.string().required("La fecha de fin es obligatorio"),
      descripcion: yup.string().required("La descripción es obligatorio"),
    })
    .required();

    const router = useRouter();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

  // const handleRegister = async (e, redirectToNextForm) => {
  //   e.preventDefault();

  //   try {
  //     // Realiza la solicitud de registro a tu API
  //     const response = await fetch('/api/education', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ id_curri:"6",titulo, institucion, localidad, fecha_inicio, fecha_fin, descripcion }),
  //     });

  //     if (response.ok) {
  //       // Registro exitoso
  //       const userData = await response.json();
  //       console.log('Registro hecho', userData);
  //       toast.success('Registro hecho');

  //       if (redirectToNextForm) {
  //         // Redirigir a la siguiente página
  //         router.push('/dashboard/form_edu');
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
      const response = await fetch("/api/education", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Registro exitoso");
        router.push("/dashboard/form_educ");
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
    <h1 className='text-black font-bold text-xl text-center mb-2'>Educación</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
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
          {...register("titulo")}
        />
        
        <p className="text-red-600">{errors.titulo?.message}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="Institucion" className="block text-sm font-semibold text-gray-600">
          Institucion
        </label>
        <input
          type="text"
          id="institucion"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          {...register("institucion")}
        />
        <p className="text-red-600">{errors.institucion?.message}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="localidad" className="block text-sm font-semibold text-gray-600">
         Localidad
        </label>
        <input
          type="text"
          id="localidad"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          {...register("localidad")}
        />
        <p className="text-red-600">{errors.nombre?.message}</p>
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
          {...register("fecha_inicio")}
        />
        <p className="text-red-600">{errors.fecha_inicio?.message}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="fecha_fin" className="block text-sm font-semibold text-gray-600">
          Fecha de Fin
        </label>
        <input
          type="date"
          id="fecha_fin"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          {...register("fecha_fin")}
        />
        <p className="text-red-600">{errors.fecha_fin?.message}</p>
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
          {...register("descripcion")}
        />
        <p className="text-red-600">{errors.descripcion?.message}</p>
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

export default FormEduc;
