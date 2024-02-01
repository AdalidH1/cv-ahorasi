import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await conn.query("SELECT * FROM users");
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({message: error.message}, {status: 500})
  }
}

export async function POST(req, res) {
  try {
    const { nombre, email, contra } = await req.json();
    const result = await conn.query("INSERT INTO users SET ?", {
      nombre: nombre,
      email: email,
      contra: contra,
    });
    console.log(result);
    return NextResponse.json({
      nombre,
      email,
      contra,
      id: result.insertId,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
