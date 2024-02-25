"use client";
// src/app/components/Login.jsx
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      contra: data.contra,
      id: data.id,
      redirect: false,
    });
    if (res.error) {
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: res.error,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: "Has iniciado sesión correctamente",
      });

      router.push("/dashboard/home");
    }
  });
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        Inicio de Sesión
      </h2>
      {error && <p className="text-red-500 text-xs m-2">{error}</p>}
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-600"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Este campo es requerido.",
              },
            })}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="contra"
            className="block text-sm font-semibold text-gray-600"
          >
            Contraseña
          </label>
          <input
            type="password"
            {...register("contra", {
              required: {
                value: true,
                message: "Este campo es requerido.",
              },
            })}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          />
          {errors.contra && (
            <span className="text-red-500 text-xs">
              {errors.contra.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-sm font-bold hover:bg-blue-600"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
