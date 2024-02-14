// components/RegisterForm.js
"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormHobi = () => {

  const schema = yup
    .object({
      pasatiempo: yup.string().required("El pasatiempo es obligatorio"),
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
  //     const response = await fetch('/api/hobbies', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ id_curri:"6",pasatiempo  }),
  //     });

  //     if (response.ok) {
  //       // Registro exitoso
  //       const userData = await response.json();
  //       console.log('Registro hecho', userData);
  //       toast.success('Registro hecho');

  //       if (redirectToNextForm) {
  //         // Redirigir a la siguiente página
  //         router.push('/viewCV');
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
      const response = await fetch("/api/hobbies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Registro exitoso");
        router.push("/dashboard/form_pasatiempos");
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
    <h1 className='text-black font-bold text-xl text-center mb-2'>Pasatiempos</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
     
      <div className="mb-4">
        <label htmlFor="pasatiempo" className="block text-sm font-semibold text-gray-600">
          Pasatiempos
        </label>
        <input
          type="text"
          id="pasatiempo"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          {...register("pasatiempos")}
        />
        <p className="text-red-600">{errors.pasatiempo?.message}</p>
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
        Finalizar
      </button>
      </div>
    </form>
  </div>
  );
};

export default FormHobi;
