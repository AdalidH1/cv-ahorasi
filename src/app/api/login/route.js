// En la ruta de inicio de sesión
import { conn } from "@/libs/mysql";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";


// ...

export async function POST(req) {
  try {
    const { email, contra } = await req.json();
<<<<<<< HEAD:src/app/api/login/route.js
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
=======
    const user = await conn.query("SELECT * FROM users WHERE email = ?", [email]);

    if (user.length === 1) {
      const match = await bcrypt.compare(contra, user[0].contra);
      if (match) {
        // Contraseña válida, puedes permitir el inicio de sesión
        return NextResponse.json({ message: "Login exitoso" });
      }
>>>>>>> c9961729542375ddcae5daf4389119d6ca675ace:src/app/api/users/login/route.js
    }

    // Usuario no encontrado o contraseña incorrecta
    return NextResponse.error("Credenciales inválidas", 401);
  } catch (error) {
    console.error('Error en la consulta SQL:', error);
    return NextResponse.error("Error en la consulta SQL", 500);
  }
}
