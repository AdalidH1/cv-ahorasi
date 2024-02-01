import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export function POST() {
    conn.query("INSERT INTO about_me SET ?", {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        direccion: direccion,
        cp: cp,
        fecha_nacimiento: fecha_nacimiento,
        foto: foto,
        ocupacion: ocupacion,
        descripcion: descripcion
    })
    return NextResponse.json("a")
}