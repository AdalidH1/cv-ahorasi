import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { conn } from "@/libs/mysql";

const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "email@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "password" },
            },
            async authorize(credentials, req) {
                let connection;

                try {
                    connection = await conn.getConnection();
                    const [rows] = await connection.query("SELECT id, nombre, email, contra FROM users WHERE email = ?", [credentials.email]);

                    if (!rows || rows.length === 0) {
                        console.error('Usuario no encontrado');
                        throw new Error('Usuario no encontrado');
                    }

                    const userFound = rows[0];

                    const matchPassword = await bcrypt.compare(credentials.password, userFound.contra);

                    if (!matchPassword) {
                        throw new Error('Contraseña incorrecta');
                    }

                    return {
                        id: userFound.id,
                        name: userFound.nombre,
                        email: userFound.email
                    };
                } catch (error) {
                    console.error('Error en la autenticación:', error);
                    throw new Error('Error en la autenticación');
                } finally {
                    if (connection) {
                        connection.release();
                    }
                }
            }
        })
    ],
    pages: {
        signIn: '/login',
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
