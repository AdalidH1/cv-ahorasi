// components/Formulario.js
"use client";
import { useState } from 'react';

const Formulario = () => {
  const [seccionActual, setSeccionActual] = useState('about_me');
  const [experiencias, setExperiencias] = useState([{}]);
  const [educaciones, setEducaciones] = useState([{}]);
  const [competencias, setCompetencias] = useState([{}]);
  const [idiomas, setIdiomas] = useState([{}]);
  const [pasatiempos, setPasatiempos] = useState([{}]);

  const agregarCampo = (campo, setCampo) => {
    setCampo((prevCampos) => [...prevCampos, {}]);
  };

  const mostrarSeccion = (seccion) => {
    setSeccionActual(seccion);
  };

  return (
    <form className="max-w-2xl mx-auto mt-8">
      <div className="mb-6">
        <ul className="flex text-gray-400">
          <li
            className={`cursor-pointer mr-4 ${
              seccionActual === 'about_me' ? 'text-blue-500' : ''
            }`}
            onClick={() => mostrarSeccion('about_me')}
          >
            About Me
          </li>
          <li
            className={`cursor-pointer mr-4 ${
              seccionActual === 'experiencia' ? 'text-blue-500' : ''
            }`}
            onClick={() => mostrarSeccion('experiencia')}
          >
            Experiencia
          </li>
          <li
            className={`cursor-pointer mr-4 ${
              seccionActual === 'educacion' ? 'text-blue-500' : ''
            }`}
            onClick={() => mostrarSeccion('educacion')}
          >
            Educación
          </li>
          <li
            className={`cursor-pointer mr-4 ${
              seccionActual === 'competencias' ? 'text-blue-500' : ''
            }`}
            onClick={() => mostrarSeccion('competencias')}
          >
            Competencias
          </li>
          <li
            className={`cursor-pointer mr-4 ${
              seccionActual === 'idiomas' ? 'text-blue-500' : ''
            }`}
            onClick={() => mostrarSeccion('idiomas')}
          >
            Idiomas
          </li>
          <li
            className={`cursor-pointer mr-4 ${
              seccionActual === 'pasatiempos' ? 'text-blue-500' : ''
            }`}
            onClick={() => mostrarSeccion('pasatiempos')}
          >
            Pasatiempos
          </li>
        </ul>
      </div>

      {seccionActual === 'about_me' && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-slate-600">About Me</h2>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Nombre" className="border p-2" />
            <input type="text" placeholder="Apellido" className="border p-2" />
            <input type="text" placeholder="Email" className="border p-2" />
            <input type="text" placeholder="Telefono" className="border p-2" />
            <input type="text" placeholder="Direccion" className="border p-2" />
            <input type="text" placeholder="CP" className="border p-2" />
            <input type="text" placeholder="Fecha de Nacimiento" className="border p-2" />
            <input type="text" placeholder="Ocupacion" className="border p-2" />
            <input type="text" placeholder="Descripcion" className="border p-2" />
            {/* Otros campos de about_me */}
          </div>
        </div>
      )}

      {seccionActual === 'experiencia' && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-slate-600">Experiencia</h2>
          {experiencias.map((experiencia, index) => (
            <div key={index} className="mb-4">
              <input type="text" placeholder="Puesto" className="border p-2" />
            <input type="text" placeholder="Empresa" className="border p-2" />
            <input type="text" placeholder="Localidad" className="border p-2" />
            <input type="text" placeholder="Fecha de inicio" className="border p-2" />
            <input type="text" placeholder="Fecha de fin" className="border p-2" />
            <input type="text" placeholder="Descripción" className="border p-2" />
              {/* Otros campos de experiencia */}
            </div>
          ))}
          <button
            type="button"
            onClick={() => agregarCampo(experiencias, setExperiencias)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Agregar Experiencia
          </button>
        </div>
      )}

      {seccionActual === 'educacion' && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4" text-slate-600>Educación</h2>
          {educaciones.map((educacion, index) => (
            <div key={index} className="mb-4">
              <input type="text" placeholder="Titulo" className="border p-2" />
            <input type="text" placeholder="Institución" className="border p-2" />
            <input type="text" placeholder="Localidad" className="border p-2" />
            <input type="text" placeholder="Fecha de inicio" className="border p-2" />
            <input type="text" placeholder="Fecha de fin" className="border p-2" />
            <input type="text" placeholder="Descripción" className="border p-2" />
              {/* Otros campos de educación */}
            </div>
          ))}
          <button
            type="button"
            onClick={() => agregarCampo(educaciones, setEducaciones)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Agregar Educación
          </button>
        </div>
      )}

      {seccionActual === 'competencias' && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4" text-slate-600>Competencias</h2>
          {competencias.map((competencia, index) => (
            <div key={index} className="mb-4">
              <input type="text" placeholder="Habilidad" className="border p-2" />
              <input type="text" placeholder="Descripción" className="border p-2" />
              {/* Otros campos de competencias */}
            </div>
          ))}
          <button
            type="button"
            onClick={() => agregarCampo(competencias, setCompetencias)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Agregar Competencia
          </button>
        </div>
      )}

      {seccionActual === 'idiomas' && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4" text-slate-600>Idiomas</h2>
          {idiomas.map((idioma, index) => (
            <div key={index} className="mb-4">
             <input type="text" placeholder="Idioma" className="border p-2" />
              <input type="text" placeholder="Nivel" className="border p-2" />
              {/* Otros campos de idiomas */}
            </div>
          ))}
          <button
            type="button"
            onClick={() => agregarCampo(idiomas, setIdiomas)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Agregar Idioma
          </button>
        </div>
      )}

      {seccionActual === 'pasatiempos' && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-slate-600">Pasatiempos</h2>
          {pasatiempos.map((pasatiempo, index) => (
            <div key={index} className="mb-4">
              <input type="text" placeholder="Pasatiempo" className="border p-2" />
              {/* Otros campos de pasatiempos */}
            </div>
          ))}
          <button
            type="button"
            onClick={() => agregarCampo(pasatiempos, setPasatiempos)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Agregar Pasatiempo
          </button>
        </div>
      )}

      {/* Botón de enviar */}
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;