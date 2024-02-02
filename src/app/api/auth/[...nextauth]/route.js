import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

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

                const userFound = await db.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                
                if (!userFound) throw new Error('Usuario no encontrado')

                const matchPassword = await bcrypt.compare(credentials.password, userFound.password)
                
                if(!matchPassword) throw new Error('Contraseña incorrecta')
                
                return {
                    id: userFound.id,
                    name: userFound.username,
                    email: userFound.email
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