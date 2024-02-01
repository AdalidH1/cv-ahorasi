"use client";
// src/app/components/Login.jsx
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [contra, setContra] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, contra }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Exito!");
        console.log("Login exitoso:", data);
        router.push("/home"); // Redirige a la página de inicio después del login exitoso
        router.refresh();
      } else {
        console.error("Error en el login:", response.statusText);
        toast.error("Error al iniciar sesión", response.statusText);
      }
    } catch (error) {
      toast.error("Oops! hubo un error con el servidor");
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-500">
        Inicio de Sesión
      </h2>
      <form onSubmit={handleSubmit}>
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
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
