import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const result = await conn.query("SELECT * FROM competencias WHERE id = ?", [
    params.id,
  ]);
  return NextResponse.json(result[0]);
}

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
  const result = await conn.query("UPDATE competencias SET ? WHERE id = ?", [
    data,
    params.id,
  ]);

  if (result.affectedRows === 0) {
    return NextResponse.json(
      {
        message: "No se encontro la competencia",
      },
      {
        status: 404,
      }
    );
  } else {
    const updateComp = await conn.query(
      "SELECT * FROM competencias WHERE id = ?",
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
