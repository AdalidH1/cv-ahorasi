import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
    const { email, contra } = await req.json();
    const sql = "SELECT * FROM users WHERE email = ? AND contra = ?";
    const params = [email, contra];
        const result = await conn.query(sql, params);
        
        if (result.length > 0) {
            return NextResponse.json({ success: true, message: "Inicio de sesión exitoso" });
        } else {
            return NextResponse.json({ success: false, message: "Credenciales incorrectas" });
        }
    } catch (error) {
        console.error('Error en la consulta SQL:', error);
        return NextResponse.error("Error en la consulta SQL", 500);
    }
}
