// curri/route.js
import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await conn.query("SELECT * FROM curri");
  return NextResponse.json(result);
}

export async function DELETE(req) {
    try {
        const {id_curri} = await req.json()
      const result = await conn.query("DELETE FROM curri WHERE id = ?", [id_curri]);

        return NextResponse.json(result)
    
      
      } catch (error) {
        return NextResponse.json({
          message: error.message
        })
      }
}
