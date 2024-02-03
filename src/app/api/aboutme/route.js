import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Ejecutamos la consulta para obtener todos los datos de la tabla about_me
        const result = await conn.query("SELECT * FROM about_me");

        // Devolvemos los datos en formato JSON
        return NextResponse.json(result);
    } catch (error) {
        // Manejamos cualquier error que pueda ocurrir durante la consulta
        console.error("Error al obtener datos de about_me:", error);
        return NextResponse.json({ error: "Error al obtener datos de about_me" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
      const {nombre, apellido, email, telefono, direccion, cp, fecha_nacimiento, foto, ocupacion, descripcion, id_curri} = await req.json()
    const result = await conn.query("INSERT INTO about_me SET ?", {
      id_curri,  
      nombre,
      apellido,
      email,
      telefono,
      direccion,
      cp,
      fecha_nacimiento,
      foto,
      ocupacion,
      descripcion
    })
  
    return NextResponse.json({
        id_curri,  
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
        id: result.insertId
        
    })
    } catch (error) {
      return NextResponse.json({
        message: error.message
      })
    }
  }
