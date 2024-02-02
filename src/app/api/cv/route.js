import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
    const res = await conn.query("SELECT * FROM curri")
    return NextResponse.json(res)
}