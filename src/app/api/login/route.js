// En la ruta de inicio de sesión
import { conn } from "@/libs/mysql";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, contra } = await req.json();
    const user = await conn.query("SELECT id, contra FROM users WHERE email = ?", [email]);

    if (user.length > 0) {
      const storedHash = user[0].contra;

      // Verificar la contraseña utilizando bcrypt
      const match = await bcrypt.compare(contra, storedHash);

      if (match) {
        // Contraseña válida, puedes permitir el inicio de sesión
        return NextResponse.json({ success: true, message: "Login exitoso" });
      } else {
        return NextResponse.json({ success: false, message: "Contraseña incorrecta" });
      }
    } else {   
      return NextResponse.json({ success: false, message: "Usuario no existente" });
    }
  } catch (error) {
    console.error('Error en la consulta SQL:', error);
    return NextResponse.error("Error en la consulta SQL", 500);
  }
}