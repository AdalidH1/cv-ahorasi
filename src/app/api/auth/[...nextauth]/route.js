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
                try {
                    const userFound = await conn.query("SELECT id, nombre, email, contra FROM users WHERE email = ?", [credentials.email]);

                    if (!userFound || userFound.length === 0) {
                        throw new Error('Usuario no encontrado');
                    }

                    const matchPassword = await bcrypt.compare(credentials.password, userFound[0].contra);

                    if (!matchPassword) {
                        throw new Error('Contraseña incorrecta');
                    }

                    return {
                        id: userFound[0].id,
                        name: userFound[0].nombre,
                        email: userFound[0].email
                    };
                } catch (error) {
                    console.error('Error en la autenticación:', error);
                    throw new Error('Error en la autenticación');
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
