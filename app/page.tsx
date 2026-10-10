'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
   <div>
      <h1>Homepage</h1>
      <button onClick={() => router.push('/robot-face')}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >Robot face</button>
   </div>
  )
}