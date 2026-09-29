'use client'

import { useEffect, useState } from 'react'

export default function Page() {
  const [isBlinking, setIsBlinking] = useState(false)
  const [isLookingLeft, setIsLookingLeft] = useState(false)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsBlinking(true)

      window.setTimeout(() => {
        setIsBlinking(false)
        setIsLookingLeft((value) => !value)
      }, 180)
    }, 3200)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <main className="fixed inset-0 flex h-dvh w-screen items-center justify-center overflow-hidden bg-[#020a07] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,105,73,0.42),transparent_62%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-25 [background:repeating-linear-gradient(0deg,transparent_0px,transparent_4px,rgba(102,255,183,0.18)_5px)]" />

      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(74,222,128,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.15)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-emerald-100/10 to-transparent" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-[clamp(3rem,9vh,8rem)]">
        <div className="flex items-center gap-[clamp(3rem,16vw,16rem)]">
          <Eye isBlinking={isBlinking} isLookingLeft={isLookingLeft} />
          <Eye isBlinking={isBlinking} isLookingLeft={isLookingLeft} />
        </div>

        <div className="h-[clamp(2rem,5vw,4rem)] w-[clamp(9rem,22vw,20rem)] rounded-b-full border-b-[clamp(0.55rem,1vw,1rem)] border-emerald-300 shadow-[0_8px_14px_rgba(74,222,128,0.28)]" />
      </div>

      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-base font-bold tracking-[0.15em] text-emerald-50 md:bottom-10 md:text-2xl">
        profiled assumpt<span className="text-emerald-400">AI</span>on
      </p>
    </main>
  )
}

function Eye({
  isBlinking,
  isLookingLeft,
}: {
  isBlinking: boolean
  isLookingLeft: boolean
}) {
  return (
    <div
      className={[
        'relative flex size-[clamp(5rem,13vw,12rem)] items-center justify-center overflow-hidden rounded-[30%] border-[clamp(0.35rem,0.8vw,0.8rem)] border-[#27875e] bg-[#031c12] shadow-[inset_0_0_28px_rgba(0,0,0,0.9),0_0_32px_rgba(34,197,94,0.32)] transition-transform duration-150',
        isBlinking ? 'scale-y-[0.07]' : 'scale-y-100',
      ].join(' ')}
    >
      <div
        className={[
          'size-[35%] rounded-full bg-emerald-300 shadow-[0_0_12px_#6ee7b7,0_0_35px_#22c55e] transition-transform duration-500',
          isLookingLeft ? '-translate-x-[35%]' : 'translate-x-[35%]',
        ].join(' ')}
      />

      <div className="pointer-events-none absolute size-[60%] rounded-full border border-emerald-300/20" />
    </div>
  )
}