// curri/route.js
import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

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
  }
}
