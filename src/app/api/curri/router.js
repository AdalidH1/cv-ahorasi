// curri/route.js
import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await conn.query("SELECT * FROM curri");
    console.log("GET result:", result); // Agrega este mensaje de depuración
    return NextResponse.json(result);
  } catch (error) {
    console.error("GET error:", error); // Agrega este mensaje de depuración
    return NextResponse.json({
      message: error.message
    });
  }
}

export async function DELETE(req) {
  try {
    const { id_curri } = await req.json();
    console.log("DELETE id_curri:", id_curri); // Agrega este mensaje de depuración
    const result = await conn.query("DELETE FROM curri WHERE id = ?", [id_curri]);
    console.log("DELETE result:", result); // Agrega este mensaje de depuración
    return NextResponse.json(result);
  } catch (error) {
    console.error("DELETE error:", error); // Agrega este mensaje de depuración
    return NextResponse.json({
      message: error.message
    });
  }
}