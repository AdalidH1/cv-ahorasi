// components/Navbar.js
"use client"
import React from 'react';
import Link from 'next/link';
import { SessionProvider, signOut, useSession } from 'next-auth/react';


const Navbar = () => {
  const {data: session} = useSession()
  console.log(session)
  
  async function logout() {
    await signOut();
  }
  return (
    <nav className="bg-white-200 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-white text-xl font-bold bg-blue-500 rounded-lg p-8 hover:bg-blue-600">
            CVApp
            </Link>
          </div>
          <div>
            <Link href="/dashboard/viewCV" className="text-blue-500 mr-4 font-bold">
             Curriculums
            </Link>
            {session?.user ? (
              <>
            <Link href="/" className="text-blue-500 mr-4 ">
            {session.user.name}
           </Link>
             <button onClick={logout}>Cerrar sesión</button>
             </>
            ) : (
              <>
              <Link href="/register" className="text-blue-500 mr-4 ">
             Registrarse
            </Link>
            <Link href="/login" className="text-blue-500 mr-4 ">
             Login
            </Link>
            </>
            )}
            
            </>
            )}
            
            {/* Puedes agregar más enlaces según tus necesidades */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default function ProfileWrapper({session}) {
  return (
    <SessionProvider session={session}>
      <Navbar />
    </SessionProvider>
  );
}
