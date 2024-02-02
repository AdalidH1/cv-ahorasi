import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    // Extraemos el ID de los parámetros de la solicitud
    const { id } = params;

    // Verificamos que el ID sea un número entero positivo
    if (!/^\d+$/.test(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    // Ejecutamos la consulta para obtener los datos de about_me por ID
    const result = await conn.query("SELECT * FROM about_me WHERE id = ?", [
      params.id,
    ]);

    // Verificamos si se encontraron datos
    if (result.length === 0) {
      return NextResponse.json(
        { error: "No se encontraron datos con el ID proporcionado" },
        { status: 404 }
      );
    }

    // Devolvemos los datos en formato JSON
    return NextResponse.json(result[0]);
  } catch (error) {
    // Manejamos cualquier error que pueda ocurrir durante la consulta
    console.error("Error al obtener datos de about_me por ID:", error);
    return NextResponse.json(
      { error: "Error al obtener datos de about_me por ID" },
      { status: 500 }
    );
  }
}
// UPDATE
export async function PUT({ body, params }) {
    try {
      // Extraemos el ID y los datos del cuerpo de la solicitud
      const id = params.id;
      const {
        nombre,
        apellido,
        email,
        telefono,
        direccion,
        cp,
        fecha_nacimiento,
        foto,
        ocupacion,
        descripcion,
      } = body;
  
      // Verificamos que el ID sea un número entero positivo
      if (!/^\d+$/.test(id)) {
        return NextResponse.json({ error: "ID inválido" }, { status: 400 });
      }
  
      // Ejecutamos la consulta para actualizar los datos de about_me por ID
      await conn.query(
        "UPDATE about_me SET nombre=?, apellido=?, email=?, telefono=?, direccion=?, cp=?, fecha_nacimiento=?, foto=?, ocupacion=?, descripcion=? WHERE id=?",
        [
          nombre,
          apellido,
          email,
          telefono,
          direccion,
          cp,
          fecha_nacimiento,
          foto,
          ocupacion,
          descripcion,
          id,
        ]
      );
  
      // Devolvemos una respuesta JSON exitosa
      return NextResponse.json({ message: "Datos actualizados correctamente" });
    } catch (error) {
      // Manejamos cualquier error que pueda ocurrir durante la actualización
      console.error("Error al actualizar datos de about_me por ID:", error);
      return NextResponse.json(
        { error: "Error al actualizar datos de about_me por ID" },
        { status: 500 }
      );
    }
  }