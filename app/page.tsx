"use client"

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  return <SessionProvider>
    <RealHome />
  </SessionProvider>
}

function RealHome(){
  const session = useSession();

  return <div>
    {session.status === 'authenticated' && <button onClick={()=>signOut()}>Log out</button>}

    {session.status === 'unauthenticated' && <button onClick={()=>signIn()}>Log in</button>}
  </div>
}