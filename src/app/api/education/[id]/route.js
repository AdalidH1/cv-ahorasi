import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
    try {
        const res = await conn.query("SELECT * FROM educacion WHERE id = ?", [params.id])
        return NextResponse.json(res)
    } catch (error) {
        return NextResponse.json({
            message: error.message
        },
        {
            status: 500
        })
    }
}

export async function PUT(req, { params }) {
    try {
      const data = await req.json();
    const result = await conn.query("UPDATE educacion SET ? WHERE id = ?", [
      data,
      params.id,
    ]);
  
    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "No se encontro la educacion",
        },
        {
          status: 404,
        }
      );
    } else {
      const updateComp = await conn.query(
        "SELECT * FROM educacion WHERE id = ?",
        [params.id]
      );
      return NextResponse.json(updateComp[0]);
    }
    } catch (error) {
      return NextResponse.json({
          message: error.message
      }, 
      {
          status: 500
      })
    }
  }