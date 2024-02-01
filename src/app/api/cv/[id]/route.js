import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json("obtener uno")
}

export function DELETE() {
    return NextResponse.json("eliminar uno")
}

export function PUT() {
    return NextResponse.json("actualizar uno")
}