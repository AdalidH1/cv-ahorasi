// components/FormAbout.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { toast } from "react-toastify";

const FormAbout = () => {
  const schema = yup
    .object({
      nombre: yup.string().required("El nombre es obligatorio"),
      apellido: yup.string().required("El apellido es obligatorio"),
      email: yup
        .string()
        .email("Ingrese un email válido")
        .required("El email es obligatorio"),
      telefono: yup
        .string()
        .matches(/^\d{10}$/, "El teléfono debe tener 10 dígitos"),
      direccion: yup.string().required("La dirección es obligatoria"),
      cp: yup
        .string()
        .matches(/^\d{5}$/, "El código postal debe tener 5 dígitos"),
      fecha_nacimiento: yup
        .string()
        .required("La fecha de nacimiento es obligatoria"),
      ocupacion: yup.string().required("La ocupación es obligatoria"),
      descripcion: yup.string().required("La descripción es obligatoria"),
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

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/aboutme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Registro exitoso");
        router.push("/dashboard/form_exp");
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
      <h1 className="text-black font-bold text-xl text-center mb-2">
        Acerca de mi
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex space-x-6">
          <div>
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block text-sm font-semibold text-gray-600"
              >
                Nombre
              </label>

              <input
                type="text"
                id="nombre"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
                {...register("nombre")}
              />

              <p className="text-red-600">{errors.nombre?.message}</p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="apellido"
                className="block text-sm font-semibold text-gray-600"
              >
                Apellido
              </label>

              <input
                type="text"
                id="apellido"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
                {...register("apellido")}
              />

              <p className="text-red-600">{errors.apellido?.message}</p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600"
              >
                Correo Electrónico
              </label>

              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
                {...register("email")}
              />

              <p className="text-red-600">{errors.email?.message}</p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="telefono"
                className="block text-sm font-semibold text-gray-600"
              >
                Telefono
              </label>

              <input
                type="text"
                id="telefono"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
                {...register("telefono")}
              />

              <p className="text-red-600">{errors.telefono?.message}</p>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label
                htmlFor="direccion"
                className="block text-sm font-semibold text-gray-600"
              >
                Dirección
              </label>

              <input
                type="text"
                id="direccion"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
                {...register("direccion")}
              />

              <p className="text-red-600">{errors.direccion?.message}</p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="cp"
                className="block text-sm font-semibold text-gray-600"
              >
                C.P
              </label>

              <input
                type="text"
                id="cp"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
                {...register("cp")}
              />

              <p className="text-red-600">{errors.cp?.message}</p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="fecha_nacimiento"
                className="block text-sm font-semibold text-gray-600"
              >
                Fecha de nacimiento
              </label>

              <input
                type="date"
                id="fecha_nacimiento"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
                {...register("fecha_nacimiento")}
              />

              <p className="text-red-600">{errors.fecha_nacimiento?.message}</p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="ocupacion"
                className="block text-sm font-semibold text-gray-600"
              >
                Ocupación
              </label>

              <input
                type="text"
                id="ocupacion"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
                {...register("ocupacion")}
              />

              <p className="text-red-600">{errors.ocupacion?.message}</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="descripcion"
            className="block text-sm font-semibold text-gray-600"
          >
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

        <div className="flex justify-end">
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

export default FormAbout;
