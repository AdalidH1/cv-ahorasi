// components/Navbar.js
"use client";
import React from "react";
import Link from "next/link";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import useUser from "@/hooks/useUser";
import { useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
  const userId = useUser();

  useEffect(() => {

    const logo = document.getElementById("logo");
  
    gsap.from(logo, {
      duration: 2,
      x: -200, // empieza en x:-100
      ease: "power3.inOut" 
    });
  
    gsap.to(logo, {
      x: 0,
      duration: 1, 
      scale: 1.2, // pulse zoom
      repeat: 1,
      ease: "sine.inOut"
    });
  
  }, []);

  async function logout() {
    await signOut();
  }
  return (
    <nav className="bg-white-200 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            {session?.user ? (
              <Link
                href="/dashboard/home"
                className="text-white text-xl font-bold bg-blue-500 rounded-lg p-8 hover:bg-blue-600"
              >
                CVApp
              </Link>
            ) : (
            <div id="logo" className="text-white text-xl font-bold bg-blue-500 rounded-lg p-8 hover:bg-blue-600">
              CVApp
            </div>
            )}
          </div>
          <div>
            {session?.user ? (
              <>
                <Link
                  className="text-blue-500 mr-4 font-bold"
                  href="/dashboard/form_cv"
                >
                  Crear nuevo
                </Link>
                <Link href="/viewCV" className="text-blue-500 mr-4 ">
                  Ver Curriculums
                </Link>

                <button
                  onClick={logout}
                  className="text-blue-500 mr-4 font-bold"
                >
                  Cerrar sesión
                </button>
                <Link href="/" className="text-blue-500 ">
                  {session.user.name} {userId}
                </Link>
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

            {/* Puedes agregar más enlaces según tus necesidades */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default function ProfileWrapper({ session }) {
  return (
    <SessionProvider session={session}>
      <Navbar />
    </SessionProvider>
  );
}
