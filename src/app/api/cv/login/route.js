import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
    const { email, contra } = await req.json();
    const sql = "SELECT * FROM users WHERE email = ? AND contra = ?";
    const params = [email, contra];
        const result = await conn.query(sql, params);
        console.log({
            email,
            contra
        })
        return NextResponse.json({
            email,
            contra
        });
    } catch (error) {
        console.error('Error en la consulta SQL:', error);
        return NextResponse.error("Error en la consulta SQL", 500);
    }
}
