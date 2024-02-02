// En la ruta de inicio de sesión
import { getSession } from 'next-auth/react';
import { conn } from "@/libs/mysql";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const session = await getSession({ req });

    // Verificar si ya hay una sesión activa
    if (session) {
      return NextResponse.json({ success: false, message: "Ya hay una sesión activa" });
    }

    const { email, contra } = await req.json();
    const user = await conn.query("SELECT * FROM users WHERE email = ?", [email]);

    if (user.length > 0) {
      const match = await bcrypt.compare(contra, user[0].contra);
      if (match) {
        // Contraseña válida, puedes permitir el inicio de sesión
        return NextResponse.json({ success: true, message: "Login exitoso" });
      } else {
        return NextResponse.json({success : false, message: "Contraseña incorrecta"})
      }
    } else {   
        return NextResponse.json({ success: false, message: "Usuario no existente"});
    }

  } catch (error) {
    console.error('Error en la consulta SQL:', error);
    return NextResponse.error("Error en la consulta SQL", 500);
} }
