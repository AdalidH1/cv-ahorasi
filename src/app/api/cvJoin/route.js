// Importa las dependencias necesarias
import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

// Define la función GET para obtener datos desde la vista
export async function GET() {
    try {
        // Ejecuta la consulta para obtener datos desde la vista_curri_about_me
        const result = await conn.query("SELECT * FROM vista_curri_about_me");

        // Devuelve los datos en formato JSON
        return NextResponse.json(result);
    } catch (error) {
        // Maneja cualquier error que pueda ocurrir durante la consulta
        console.error("Error al obtener datos de la vista_curri_about_me:", error);
        return NextResponse.json({ error: "Error al obtener datos de la vista_curri_about_me" }, { status: 500 });
    }
}
