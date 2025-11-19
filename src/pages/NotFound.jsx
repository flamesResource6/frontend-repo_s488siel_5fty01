import React from 'react'

export default function NotFound(){
  return (
    <div className="min-h-screen grid place-items-center bg-slate-950 text-white">
      <div className="text-center px-6">
        <h1 className="text-6xl font-black">404</h1>
        <p className="mt-2 text-slate-300">The page youre looking for doesnt exist.</p>
        <a href="/" className="inline-block mt-6 px-5 py-3 rounded-xl bg-white/10 border border-white/10">Back Home</a>
      </div>
    </div>
  )
}
