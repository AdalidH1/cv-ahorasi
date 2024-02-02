"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";

const CurriculumView = ({ id }) => {
  const generatePDF = () => {
    const element = document.getElementById("resume-preview"); // ID del contenedor de la vista previa
    html2pdf(element);
  };
  const [curriculum, setCurriculum] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/cvJoin/${id}`);
        setCurriculum(result.data);
      } catch (error) {
        console.error("Error fetching curriculum data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!curriculum) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("es-MX", options);
  };

  // Función para obtener las iniciales del nombre y apellido
  const obtenerIniciales = (nombre, apellido) => {
    const firstLetterName =
      nombre && nombre.length > 0 ? nombre.charAt(0).toUpperCase() : "";
    const firstLetterSurname =
      apellido && apellido.length > 0 ? apellido.charAt(0).toUpperCase() : "";
    return `${firstLetterName}${firstLetterSurname}`;
  };

  return (
    <div className="flex flex-col items-center  mx-auto rounded-md my-8 pl-9">
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md my-8 pl-9 " id="resume-preview" >
        <h1 className="text-4xl font-bold mb-4 text-slate-800 flex items-center justify-center">{`${curriculum.nombre} ${curriculum.apellido}`}</h1>
        <p className="text-slate-800 flex items-center justify-center mb-3 font-bold">
          {curriculum.ocupacion}
        </p>
        <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-2xl">
          {obtenerIniciales(curriculum.nombre, curriculum.apellido)}
        </div>
        <h2 className="text-2xl font-bold mb-2 text-slate-800">
          Datos de contacto
        </h2>
        <ul className="list-disc ml-6 text-slate-800">
          <li>Email: {curriculum.email}</li>
          <li>Teléfono: {curriculum.telefono}</li>
          <li>Dirección: {curriculum.direccion}</li>
          <li>Código postal: {curriculum.cp}</li>
          <li>
            Fecha de nacimiento: {formatDate(curriculum.fecha_nacimiento)}
          </li>
        </ul>

        <h2 className="text-2xl font-bold my-2 text-slate-800">Acerca de mí</h2>
        <p className="text-slate-800">{curriculum.about_me_description}</p>
        <h2 className="text-2xl font-bold my-2 text-slate-800">Competencias</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong className="text-slate-800">
              {curriculum.competencia_habilidad}
            </strong>
            : {curriculum.competencia_descripcion}
          </li>
        </ul>
        <h2 className="text-2xl font-bold my-2 text-slate-800">Educación</h2>
        <ul className="list-disc ml-6 text-slate-800">
          <li>
            <strong className="text-slate-800">
              {curriculum.educacion_titulo}
            </strong>
            : {curriculum.educacion_institucion},{" "}
            {curriculum.educacion_localidad}
            <br />
            Fecha de inicio: {formatDate(curriculum.educacion_fecha_inicio)}
            {formatDate(curriculum.educacion_fecha_fin) && (
              <> - Fecha de fin: {formatDate(curriculum.educacion_fecha_fin)}</>
            )}
            <br />
            {curriculum.educacion_descripcion}
          </li>
        </ul>
        <h2 className="text-2xl font-bold my-2 text-slate-800">
          Experiencia laboral
        </h2>
        <ul className="list-disc ml-6 text-slate-800">
          <li>
            <strong className="text-slate-800">
              {curriculum.experiencia_puesto}
            </strong>
            : {curriculum.experiencia_empresa},{" "}
            {curriculum.experiencia_localidad}
            <br />
            Fecha de inicio: {formatDate(curriculum.experiencia_fecha_inicio)}
            {formatDate(curriculum.experiencia_fecha_fin) && (
              <>
                {" "}
                - Fecha de fin: {formatDate(curriculum.experiencia_fecha_fin)}
              </>
            )}
            <br />
            {curriculum.experiencia_descripcion}
          </li>
        </ul>
        <h2 className="text-2xl font-bold my-2 text-slate-800">Idiomas</h2>
        <ul className="list-disc ml-6 text-slate-800">
          <li>
            <strong className="text-slate-800">
              {curriculum.idioma_idioma}
            </strong>
            : {curriculum.idioma_nivel}
          </li>
        </ul>
        <h2 className="text-2xl font-bold my-2 text-slate-800">Pasatiempos</h2>
        <ul className="list-disc ml-6 text-slate-800">
          <li className="text-slate-800">{curriculum.pasatiempo}</li>
        </ul>
      </div>
      <button
        type="button"
        onClick={generatePDF}
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Imprimir Currículum
      </button>
    </div>
  );
};

export default CurriculumView;
