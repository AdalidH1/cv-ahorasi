import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await conn.query("SELECT * FROM pasatiempos")
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
      const {pasatiempo, id_curri} = await req.json()
    const result = await conn.query("INSERT INTO pasatiempos SET ?", {
      id_curri,  
      pasatiempo
    })
  
    return NextResponse.json({
        id_curri,  
        pasatiempo,
        id: result.insertId
        
    })
    } catch (error) {
      return NextResponse.json({
        message: error.message
      })
    }
  }