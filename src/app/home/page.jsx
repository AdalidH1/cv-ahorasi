// src/app/Home.jsx
import React from 'react';

const Home = () => (
  <>
  <header className="bg-blue-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Gestiona tus Curriculums de manera eficiente</h1>
        <p className="text-lg">Crea, personaliza y explora curriculums de manera sencilla</p>
        <button className="mt-8 bg-white text-blue-500 px-6 py-2 rounded-full font-bold hover:bg-blue-100">
          Comienza Ahora
        </button>
      </header>
  
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Por qué elegirnos</h2>
          <p className="text-gray-600">Descubre las características que hacen única nuestra aplicación</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Fácil de Usar</h3>
            <p>Interfaz intuitiva que facilita la creación y gestión de curriculums.</p>
          </div>
  
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Personalización</h3>
            <p>Personaliza tus curriculums con múltiples opciones y diseños atractivos.</p>
          </div>
  
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Exploración Fácil</h3>
            <p>Explora curriculums de otros usuarios y encuentra inspiración.</p>
          </div>
        </div>
      </section>
      </>
);

export default Home;
