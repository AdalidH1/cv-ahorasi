import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const result = await conn.query("SELECT * FROM curri WHERE id = ?", [
    params.id,
  ]);
  return NextResponse.json(result[0]);
}
export async function DELETE(req, { params }) {
  try {
    const { id_curri } = await req.json();
    console.log("DELETE id_curri:", id_curri);
    const result = await conn.query("DELETE FROM curri WHERE id = ?", [id_curri]);
    console.log("DELETE result:", result);
    return new Response(JSON.stringify({ message: "Curriculum deleted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("DELETE error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
