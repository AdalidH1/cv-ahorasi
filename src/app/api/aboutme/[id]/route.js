import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";
import { Result } from "postcss";

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
export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const result = await conn.query("UPDATE about_me SET ? WHERE id = ? ", [
      data,
      params.id,
    ]);
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "Entrada no encontrada" },
        { stauts: 404 }
      );
    }
    const updatedFound = await conn.query(
      "SELECT * FROM about_me WHERE id = ?",
      [params.id]
    );

    // console.log(result);

    return NextResponse.json(updatedFound[0]);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
