"use client"
import { SessionProvider, useSession } from 'next-auth/react'
import React from 'react'

function Dashboard() {
  const {data:session} = useSession()
  console.log(session)
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