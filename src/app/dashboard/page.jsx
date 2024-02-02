"use client"
import axios from 'axios'
import { SessionProvider, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

function Dashboard() {
  const {data:session} = useSession()
  console.log(session)
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    // Realiza la solicitud GET a la ruta de la API
    axios.get(`/api/hobbies/1`).then((response) => {
      setDatos(response.data);
    });
  }, []);
      console.log(datos)
  return (
    <div>
      <h1 className=' font-bold text-black'>hola {session?.user.name}</h1>
    </div>
  )
}


export default function ProfileWrapper({session}) {
  return (
    <SessionProvider session={session}>
      <Dashboard />
    </SessionProvider>
  );
}