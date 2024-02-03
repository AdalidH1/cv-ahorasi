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

