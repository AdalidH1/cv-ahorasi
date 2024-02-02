import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { conn } from "@/libs/mysql";

const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                id : { label: "ID", type: "text", placeholder: "id" },
                contra: { label: "Password", type: "password", placeholder: "password" },
                email: { label: "Email", type: "text", placeholder: "email@gmail.com" },
            },
            async authorize(credentials, req) {
                try {
                    const userFound = await conn.query("SELECT * FROM users WHERE email = ?", [credentials.email]);

                    if (!userFound || userFound.length === 0) {
                        throw new Error('Usuario no encontrado');
                    }
                    console.log('Contraseña proporcionada:', credentials.contra);
                    console.log('Contraseña almacenada:', userFound[0].contra);
                    const matchPassword = await bcrypt.compare(credentials.contra, userFound[0].contra);

                    if (!matchPassword) {
                        throw new Error('Contraseña incorrecta');
                    }
                    

                    return {
                        id: credentials.id,
                        name: userFound[0].nombre,
                        email: userFound[0].email
                    };
                } catch (error) {
                    throw new Error('Error en la autenticación: ' + error.message);
                }
            }
        })
    ],
    // callbacks: {
    //     session: async ({ session, user }) => {
    //       if (session.user) {
    //         session.user.id = user.id;
    //         session.user.name = user.name;
    //         session.user.email = user.email;
    //       }
    //       return session;
    //     },
    // },
    pages: {
        signIn: '/login',
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }