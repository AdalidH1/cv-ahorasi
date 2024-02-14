// components/RegisterForm.js
"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  pasatiempo: yup.string().required("Define al menos una actividad")

}).required();

const FormHobi = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    });
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
        router.push("/viewCV");
      } else {
        toast.error("Error en el registro");  
      }

    } catch (error) {
      console.error("Error registrando experiencia", error);
      toast.error("Error en el registro");
    }
    }
      

 

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
          {...register("pasatiempo")}
        />
          <p className="text-red-600">{errors.pasatiempo?.message}</p>
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
        Finalizar
      </button>
      </div>
    </form>
  </div>
  );
};

export default FormHobi;
