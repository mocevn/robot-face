// 'use client'

// import { useEffect, useState } from 'react'

// export default function Page() {
//   const [isBlinking, setIsBlinking] = useState(false)
//   const [isLookingLeft, setIsLookingLeft] = useState(false)

//   useEffect(() => {
//     const interval = window.setInterval(() => {
//       setIsBlinking(true)

//       window.setTimeout(() => {
//         setIsBlinking(false)
//         setIsLookingLeft((value) => !value)
//       }, 180)
//     }, 3200)

//     return () => window.clearInterval(interval)
//   }, [])

//   return (
//     <main className="fixed inset-0 flex h-dvh w-screen items-center justify-center overflow-hidden bg-[#020a07] text-white">
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,105,73,0.42),transparent_62%)]" />

//       <div className="pointer-events-none absolute inset-0 opacity-25 [background:repeating-linear-gradient(0deg,transparent_0px,transparent_4px,rgba(102,255,183,0.18)_5px)]" />

//       <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(74,222,128,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.15)_1px,transparent_1px)] [background-size:60px_60px]" />

//       <div className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-emerald-100/10 to-transparent" />

//       <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-[clamp(3rem,9vh,8rem)]">
//         <div className="flex items-center gap-[clamp(3rem,16vw,16rem)]">
//           <Eye isBlinking={isBlinking} isLookingLeft={isLookingLeft} />
//           <Eye isBlinking={isBlinking} isLookingLeft={isLookingLeft} />
//         </div>

//         <div className="h-[clamp(2rem,5vw,4rem)] w-[clamp(9rem,22vw,20rem)] rounded-b-full border-b-[clamp(0.55rem,1vw,1rem)] border-emerald-300 shadow-[0_8px_14px_rgba(74,222,128,0.28)]" />
//       </div>

//       <p className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-base font-bold tracking-[0.15em] text-emerald-50 md:bottom-10 md:text-2xl">
//         profiled assumpt<span className="text-emerald-400">AI</span>on
//       </p>
//     </main>
//   )
// }

// function Eye({
//   isBlinking,
//   isLookingLeft,
// }: {
//   isBlinking: boolean
//   isLookingLeft: boolean
// }) {
//   return (
//     <div
//       className={[
//         'relative flex size-[clamp(5rem,13vw,12rem)] items-center justify-center overflow-hidden rounded-[30%] border-[clamp(0.35rem,0.8vw,0.8rem)] border-[#27875e] bg-[#031c12] shadow-[inset_0_0_28px_rgba(0,0,0,0.9),0_0_32px_rgba(34,197,94,0.32)] transition-transform duration-150',
//         isBlinking ? 'scale-y-[0.07]' : 'scale-y-100',
//       ].join(' ')}
//     >
//       <div
//         className={[
//           'size-[35%] rounded-full bg-emerald-300 shadow-[0_0_12px_#6ee7b7,0_0_35px_#22c55e] transition-transform duration-500',
//           isLookingLeft ? '-translate-x-[35%]' : 'translate-x-[35%]',
//         ].join(' ')}
//       />

//       <div className="pointer-events-none absolute size-[60%] rounded-full border border-emerald-300/20" />
//     </div>
//   )
// }

export default function Home() {
  return (
    <main className="fixed inset-0 h-dvh w-screen touch-none overflow-hidden bg-black">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 75%, rgba(94, 45, 143, 0.24), transparent 28%),
            radial-gradient(circle at 85% 20%, rgba(28, 72, 130, 0.2), transparent 28%)
          `,
        }}
      />

      {/* Sterren */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 700"
      >
        <g fill="white">
          <circle cx="74" cy="92" r="2" opacity="0.9" />
          <circle cx="145" cy="244" r="1.5" opacity="0.7" />
          <circle cx="219" cy="105" r="2.5" opacity="0.8" />
          <circle cx="323" cy="54" r="1.5" opacity="0.7" />
          <circle cx="402" cy="170" r="2" opacity="0.9" />
          <circle cx="518" cy="76" r="1.5" opacity="0.7" />
          <circle cx="638" cy="130" r="2.5" opacity="0.8" />
          <circle cx="742" cy="55" r="1.5" opacity="0.9" />
          <circle cx="881" cy="147" r="2" opacity="0.8" />
          <circle cx="948" cy="280" r="1.5" opacity="0.7" />
          <circle cx="90" cy="518" r="1.5" opacity="0.8" />
          <circle cx="187" cy="620" r="2.5" opacity="0.7" />
          <circle cx="307" cy="549" r="1.5" opacity="0.9" />
          <circle cx="472" cy="636" r="2" opacity="0.8" />
          <circle cx="599" cy="535" r="1.5" opacity="0.7" />
          <circle cx="716" cy="608" r="2.5" opacity="0.8" />
          <circle cx="849" cy="529" r="1.5" opacity="0.9" />
          <circle cx="944" cy="642" r="2" opacity="0.7" />
        </g>

        <g fill="#72F6DA">
          <circle cx="116" cy="382" r="2" opacity="0.85" />
          <circle cx="278" cy="288" r="1.5" opacity="0.8" />
          <circle cx="736" cy="321" r="2" opacity="0.8" />
          <circle cx="854" cy="430" r="1.5" opacity="0.8" />
        </g>
      </svg>

      <div className="relative flex h-full w-full items-center justify-center px-3 py-4 sm:px-6">
        <svg
          aria-labelledby="robot-title robot-description"
          className="h-auto w-[min(98vw,650px)]"
          fill="none"
          role="img"
          viewBox="0 0 420 330"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title id="robot-title">Schattige robot in de ruimte</title>
          <desc id="robot-description">
            Een grote donkerblauwe robotkop met een turquoise gezichtsscherm,
            ogen en een glimlach.
          </desc>

          <defs>
            <linearGradient id="blue" x1="58" x2="362" y1="28" y2="291">
              <stop stopColor="#5C87C6" />
              <stop offset="0.5" stopColor="#2C4D83" />
              <stop offset="1" stopColor="#142540" />
            </linearGradient>

            <linearGradient id="screen" x1="130" x2="305" y1="65" y2="260">
              <stop stopColor="#B2FFE8" />
              <stop offset="0.48" stopColor="#66E4CD" />
              <stop offset="1" stopColor="#24AAA8" />
            </linearGradient>
          </defs>

          {/* Antenne */}
          <path
            d="M210 45V24"
            stroke="#050A12"
            strokeLinecap="round"
            strokeWidth="12"
          />
          <circle
            cx="210"
            cy="17"
            fill="#75F8DB"
            r="14"
            stroke="#050A12"
            strokeWidth="7"
          />
          <circle cx="205" cy="12" fill="white" opacity="0.75" r="4" />

          {/* Linkeroor */}
          <path
            d="M73 122C40 127 29 162 39 198C46 224 62 238 88 225L107 204V141L73 122Z"
            fill="#1D345D"
            stroke="#050A12"
            strokeLinejoin="round"
            strokeWidth="10"
          />
          <circle
            cx="70"
            cy="174"
            fill="#365B95"
            r="37"
            stroke="#050A12"
            strokeWidth="8"
          />
          <circle
            cx="70"
            cy="174"
            fill="#1A2E52"
            r="20"
            stroke="#050A12"
            strokeWidth="6"
          />

          {/* Rechteroor */}
          <path
            d="M347 126C378 132 390 166 380 201C374 225 360 236 337 225L325 204V145L347 126Z"
            fill="#1D345D"
            stroke="#050A12"
            strokeLinejoin="round"
            strokeWidth="10"
          />
          <circle
            cx="351"
            cy="175"
            fill="#365B95"
            r="29"
            stroke="#050A12"
            strokeWidth="8"
          />

          {/* Hoofd */}
          <path
            d="M105 48C143 25 277 24 320 48C346 63 356 91 354 142L351 225C350 267 329 287 289 293C235 300 154 296 113 282C86 272 73 248 75 208L80 113C82 77 90 57 105 48Z"
            fill="url(#blue)"
            stroke="#050A12"
            strokeLinejoin="round"
            strokeWidth="12"
          />

          {/* Highlight op behuizing */}
          <path
            d="M105 82C135 52 183 43 223 46"
            stroke="#76A0D7"
            strokeLinecap="round"
            strokeWidth="13"
          />

          {/* Gezichtsscherm */}
          <path
            d="M132 68C172 56 264 59 294 74C314 85 321 108 320 150L317 213C316 240 304 254 279 258C233 264 159 260 137 248C120 239 115 222 116 194L120 116C121 91 125 75 132 68Z"
            fill="url(#screen)"
            stroke="#050A12"
            strokeLinejoin="round"
            strokeWidth="9"
          />

          {/* Reflectie */}
          <path
            d="M142 94C166 75 199 72 225 80C197 96 171 116 145 145C141 129 140 109 142 94Z"
            fill="#EDFFF9"
            opacity="0.72"
          />
          <path
            d="M286 210C279 224 267 231 252 234"
            stroke="#EDFFF9"
            opacity="0.82"
            strokeLinecap="round"
            strokeWidth="8"
          />

          {/* Ogen */}
          <ellipse cx="178" cy="153" fill="#050A12" rx="14" ry="29">
            <animate
              attributeName="ry"
              dur="4s"
              repeatCount="indefinite"
              values="29;29;2;2;29;29"
            />
          </ellipse>

          <ellipse cx="257" cy="153" fill="#050A12" rx="14" ry="29">
            <animate
              attributeName="ry"
              dur="4s"
              repeatCount="indefinite"
              values="29;29;2;2;29;29"
            />
          </ellipse>

          {/* Glimlach */}
          <path
            d="M170 201C190 221 232 221 253 201"
            stroke="#050A12"
            strokeLinecap="round"
            strokeWidth="10"
          />

          {/* Wangen */}
          <ellipse
            cx="147"
            cy="195"
            fill="#B5FFF0"
            opacity="0.36"
            rx="12"
            ry="6"
          />
          <ellipse
            cx="285"
            cy="195"
            fill="#B5FFF0"
            opacity="0.36"
            rx="12"
            ry="6"
          />

          {/* Klein lampje */}
          <circle cx="291" cy="101" fill="#EEFFF9" opacity="0.9" r="8" />
        </svg>
      </div>
    </main>
  )
}