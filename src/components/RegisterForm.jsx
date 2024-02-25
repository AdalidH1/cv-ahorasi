// components/RegisterForm.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contra, setContra] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Realiza la solicitud de registro a tu API
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, contra }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Registro exitoso!",
          text: "Te has registrado correctamente",
        });

        router.push("/login");
      } else {
        // Mostrar error
        const errorData = await response.json();

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorData.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error en el registro",
        text: error.message,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-md shadow-lg">
      <form onSubmit={handleRegister}>
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
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
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
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
            id="contra"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
            required
            value={contra}
            onChange={(e) => setContra(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-sm font-bold hover:bg-blue-600"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
