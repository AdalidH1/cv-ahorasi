import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
    const res = await conn.query("SELECT * FROM curri WHERE id = ?", [params.id])
    return NextResponse.json(res)
}

export async function DELETE(req, {params}) {
    try {
        const result = await conn.query("DELETE FROM curri WHERE id = ?", [
            params.id
        ])

        if (result.affectedRows === 0) {
            return NextResponse.json(
                {
                    message: "Curriculum no encontrado"
                },
                {
                    status: 404
                }
            )
        }

        return new Response(null, {
            status: 204
        })
    } catch (error) {
        return NextResponse.json({
            message: error.message
        },{
            status: 500
        })
    }
}