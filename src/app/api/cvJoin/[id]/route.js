// Importaciones y configuración necesarias
import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

// Función GET para manejar las solicitudes GET
export async function GET(req, { params }) {
  try {
    // Extraemos el ID de los parámetros de la solicitud
   

    // Ejecutamos la consulta para obtener los datos de joined_cv_view por ID
    const result = await conn.query(
      "SELECT * FROM joined_cv_view WHERE curri_id = ?",
      [params.id]
    );

    // Verificamos si se encontraron datos
    if (result.length === 0) {
      return NextResponse.json(
        { error: "No se encontraron datos con el ID proporcionado" },
        { status: 404 }
      );
    }

    // Devolvemos los datos en formato JSON, desglosando las listas
    return NextResponse.json({
      ...result[0],
      competencia_habilidad: result[0].competencia_habilidad.split(','),
      competencia_descripcion: result[0].competencia_descripcion.split(','),
      educacion_titulo: result[0].educacion_titulo.split(','),
      educacion_institucion: result[0].educacion_institucion.split(','),
      educacion_localidad: result[0].educacion_localidad.split(','),
      educacion_fecha_inicio: result[0].educacion_fecha_inicio.split(','),
      educacion_fecha_fin: result[0].educacion_fecha_fin.split(','),
      educacion_descripcion: result[0].educacion_descripcion.split(','),
      experiencia_puesto: result[0].experiencia_puesto.split(','),
      experiencia_empresa: result[0].experiencia_empresa.split(','),
      experiencia_localidad: result[0].experiencia_localidad.split(','),
      experiencia_fecha_inicio: result[0].experiencia_fecha_inicio.split(','),
      experiencia_fecha_fin: result[0].experiencia_fecha_fin.split(','),
      experiencia_descripcion: result[0].experiencia_descripcion.split(','),
      idioma_idioma: result[0].idioma_idioma.split(','),
      idioma_nivel: result[0].idioma_nivel.split(','),
      pasatiempo: result[0].pasatiempo.split(','),
    });
  } catch (error) {
    // Manejamos cualquier error que pueda ocurrir durante la consulta
    console.error("Error al obtener datos de joined_cv_view por ID:", error);
    return NextResponse.json(
      { error: "Error al obtener datos de joined_cv_view por ID" },
      { status: 500 }
    );
  }
}
