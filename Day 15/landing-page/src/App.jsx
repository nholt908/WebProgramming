import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="justify-center flex flex-col min-h-screen bg-gray-300 items-center p-6">
        <header className="text-center m-6">
          <h1 className="font-bold text-gray-800 text-4xl">Welcome To My Landing Page</h1>
          <p className="text-gray-600 mt-2">Discover more about what I do!</p>
        </header>
        <main className="max-w-3xl bg-white mt-2 rounded-2xl shadow-lg text-center p-2">
          <p className="text-gray-600 mb-4">I like web programming!</p>
          <button className="bg-blue-500 text-white hover:bg-blue-900 rounded-md transition px-3">Get Started</button>
        </main>
        <footer className="w-full text-center text-gray-700 mt-4">All rights reserved</footer>
      </div>
    </>
  )
}

export default App
