// src/hooks/useUser.js

import { useSession } from "next-auth/react" 

export default function useUser() {
  const { data: session } = useSession()

  return session?.user?.id
}