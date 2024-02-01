// En la ruta de inicio de sesión
import { conn } from "@/libs/mysql";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";


// ...

export async function POST(req) {
  try {
    const { email, contra } = await req.json();
    const user = await conn.query("SELECT * FROM users WHERE email = ?", [email]);

    if (user.length === 1) {
      const match = await bcrypt.compare(contra, user[0].contra);
      if (match) {
        // Contraseña válida, puedes permitir el inicio de sesión
        return NextResponse.json({ message: "Login exitoso" });
      }
    }

    // Usuario no encontrado o contraseña incorrecta
    return NextResponse.error("Credenciales inválidas", 401);
  } catch (error) {
    console.error('Error en la consulta SQL:', error);
    return NextResponse.error("Error en la consulta SQL", 500);
  }
}
