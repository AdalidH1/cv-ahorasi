import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
    const res = await conn.query("SELECT * FROM curri WHERE id = ?", [params.id])
    return NextResponse.json(res)
}