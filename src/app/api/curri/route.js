<<<<<<< HEAD
// // curri/route.js
// import { conn } from "@/libs/mysql";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const result = await conn.query("SELECT * FROM curri");
//     return NextResponse.json(result);
//   } catch (error) {
//     return NextResponse.json({ message: error.message }, { status: 500 });
//   }
// }

// export async function DELETE(req, params) {
//   try {
//     const { id_curri } = params.curri_id;
//     const result = await conn.query("DELETE FROM curri WHERE id = ?", [id_curri]);

//     return NextResponse.json(result);
//   } catch (error) {
//     return NextResponse.json({
//       message: error.message,
//     });
//   }
// }
=======
// curri/route.js
import useUser from "@/hooks/useUser";
import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

i

export async function GET() {
  try {
    const result = await conn.query("SELECT * FROM curri");
    console.log("GET result:", result); // Agrega este mensaje de depuración
    return NextResponse.json(result);
  } catch (error) {
    console.error("GET error:", error); // Agrega este mensaje de depuración
    return NextResponse.json({
      message: error.message
    });
  }
}
export async function POST(req) {
  try {
    const user = useUser(); // Obtén el id del usuario

    // Inserta un nuevo registro en la tabla curri y obtén su id
    const curriResult = await conn.query("INSERT INTO curri (id_usuario) VALUES (?)", [user.id]);
    const curriId = curriResult.insertId;

    return NextResponse.json({ id: curriId });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
    }, { status: 500 });
  }
}
>>>>>>> a4988e34b7c769bb26db741c2c04a98ff7c3d54b
