import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(req) {
  try {
    // Obtén los datos del cuerpo de la solicitud
    const { nombre, email, contra } = await req.json();
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(contra, saltRounds);
    // Verifica si el usuario ya existe en la base de datos
    const existingUser = await conn.query("SELECT * FROM users WHERE email = ?", [email]);

    if (existingUser.length > 0) {
      // El usuario ya existe, devuelve un error
      return NextResponse.json({ message: "El usuario ya está registrado" }, { status: 400 });
    }

    // Si el usuario no existe, procede con el registro
    const result = await conn.query("INSERT INTO users SET ?", {
      nombre: nombre,
      email: email,
      contra: hashedPassword,
    });

    // Devuelve la información del usuario registrado
    return NextResponse.json({
      nombre,
      email,
      id: result.insertId,
    });
  } catch (error) {
    // Maneja cualquier error durante el proceso de registro
    console.error(error);
    return NextResponse.json({ message: "Error en el registro" }, { status: 500 });
  }
}
