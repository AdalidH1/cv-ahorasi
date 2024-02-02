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