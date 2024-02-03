import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
    const result = await conn.query("SELECT * FROM competencias")
    return NextResponse.json(result)
}

export async function POST(req) {
    try {
      const {habilidad, descripcion, id_curri} = await req.json()
    const result = await conn.query("INSERT INTO competencias SET ?", {
      id_curri,  
      habilidad,
      descripcion
    })
  
    return NextResponse.json({
        id_curri,  
        habilidad,
        descripcion,
        id: result.insertId
        
    })
    } catch (error) {
      return NextResponse.json({
        message: error.message
      })
    }
  }