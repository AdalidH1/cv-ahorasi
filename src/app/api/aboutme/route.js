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

export async function POST({ body }) {
    try {
        // Extraemos los datos del cuerpo de la solicitud
        const { nombre, apellido, email, telefono, direccion, cp, fecha_nacimiento, foto, ocupacion, descripcion } = body;

        // Ejecutamos la consulta para insertar datos en la tabla about_me
        await conn.query("INSERT INTO about_me SET ?", {
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
        });

        // Devolvemos una respuesta JSON exitosa
        return NextResponse.json({ message: "Datos insertados correctamente" });
    } catch (error) {
        // Manejamos cualquier error que pueda ocurrir durante la inserción
        console.error("Error al insertar datos en about_me:", error);
        return NextResponse.json({ error: "Error al insertar datos en about_me" }, { status: 500 });
    }
}
