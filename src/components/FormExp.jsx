// FormExp.js

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const schema = yup.object({
  puesto: yup.string().required("El puesto es requerido"),
  empresa: yup.string().required("La empresa es requerida"),
  localidad: yup.string().required("La localidad es requerida"),
  fecha_inicio: yup.date().required("La fecha de inicio es requerida"),
  fecha_fin: yup.date().required("La fecha de fin es requerida"),
  descripcion: yup.string().required("La descripción es requerida"),
}).required();

const FormExp = () => {
  
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {

    try {
      const response = await fetch("/api/experience", {
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
        toast.error("Error en el registro");  
      }

    } catch (error) {
      console.error("Error registrando experiencia", error);
      toast.error("Error en el registro");
    }

  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-lg">
      <h1 className="text-black font-bold text-xl text-center mb-2">
        Experiencia
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="flex space-x-6">

          <div>

            <div className="mb-4">
              <label htmlFor="puesto" className="block text-sm font-semibold text-gray-600">
                Puesto
              </label>
              
              <input 
                type="text"
                id="puesto"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600" 
                {...register("puesto")}
              />

              <p className="text-red-600">{errors.puesto?.message}</p>

            </div>

            <div className="mb-4">
              <label htmlFor="empresa" className="block text-sm font-semibold text-gray-600">
                Empresa
              </label>

              <input 
                type="text"
                id="empresa"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
                {...register("empresa")} 
              />

              <p className="text-red-600">{errors.empresa?.message}</p>
              
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

              <p className="text-red-600">{errors.localidad?.message}</p>

            </div>

          </div>
          
          <div>

            <div className="mb-4">
              <label htmlFor="fecha_inicio" className="block text-sm font-semibold text-gray-600">
                Fecha de Inicio  
              </label>
              
              <input 
                type="date"
                id="fecha_inicio"
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
          <label htmlFor="descripcion" className="block text-sm font-semibold text-gray-600">
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

        <div className="flex justify-between">
          
          <button            
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

}

export default FormExp;