// components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
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
            <Link href="/curriculums" className="text-blue-500 mr-4 font-bold">
             Curriculums
            </Link>
            <Link href="/curriculums" className="text-blue-500 mr-4 ">
             Perfil
            </Link>
            <Link href="/register" className="text-blue-500 mr-4 ">
             Registrarse
            </Link>
            <Link href="/login" className="text-blue-500 mr-4 ">
             Login
            </Link>
            {/* Puedes agregar más enlaces según tus necesidades */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
