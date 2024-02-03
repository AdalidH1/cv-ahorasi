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