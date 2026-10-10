'use client'

import { useRouter } from 'next/navigation'
import PersonaPresets from './src/components/persona-presets'

export default function Home() {
  const router = useRouter()

  return (
   <div className="min-h-screen bg-zinc-900">
      <h1 className="text-3xl font-bold mb-4 text-white">Homepage</h1>
      <button 
            onClick={() => router.push('/robot-face')}
            className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Robot face
        </button>

      <PersonaPresets />
   </div>
  )
}