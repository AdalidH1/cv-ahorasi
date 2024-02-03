import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await conn.query("SELECT * FROM idioma")
        return NextResponse.json(res)
    } catch (error) {
        return NextResponse.json({
            message: ("Error en la consulta", error.message)
        }, {
            status: 500
        })
    }
}

export async function POST(req) {
    try {
      const {idioma, nivel, id_curri} = await req.json()
    const result = await conn.query("INSERT INTO idioma SET ?", {
      id_curri,  
      idioma,
      nivel
    })
  
    return NextResponse.json({
        id_curri,  
        idioma,
        nivel,
        id: result.insertId
        
    })
    } catch (error) {
      return NextResponse.json({
        message: error.message
      })
    }
  }