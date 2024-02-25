// curri/route.js
import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

<<<<<<< HEAD
export async function GET() {
  try {
    const result = await conn.query("SELECT * FROM curri");
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(req, params) {
  try {
    const { id_curri } = params.curri_id;
    const result = await conn.query("DELETE FROM curri WHERE id = ?", [id_curri]);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({
      message: error.message,
    });
=======
export async function GET(req, { params }) {
  const result = await conn.query("SELECT * FROM curri WHERE id = ?", [
    params.id,
  ]);
  return NextResponse.json(result[0]);
}
export async function DELETE(req, { params }) {
  try {
    const result = await conn.query("DELETE FROM curri WHERE id = ?", [
      params.id,
    ]);
    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "Curriculum no encontrado",
        },
        {
          status: 204,
        }
      );
    }
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
>>>>>>> a4988e34b7c769bb26db741c2c04a98ff7c3d54b
  }
}
