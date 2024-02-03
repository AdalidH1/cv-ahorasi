import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await conn.query("SELECT * FROM experiencia")
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
      const {puesto, empresa, localidad, fecha_inicio, fecha_fin, descripcion, id_curri} = await req.json()
    const result = await conn.query("INSERT INTO experiencia SET ?", {
      id_curri,  
      puesto,
      empresa,
      localidad,
      fecha_inicio,
      fecha_fin,
      descripcion
    })
  
    return NextResponse.json({
        id_curri,  
        puesto,
      empresa,
      localidad,
      fecha_inicio,
      fecha_fin,
      descripcion,
        id: result.insertId
        
    })
    } catch (error) {
      return NextResponse.json({
        message: error.message
      })
    }
  }