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
          <h1 className="font-bold text-gray-800 text-4xl">Nicole Holt</h1>
          <p className="text-gray-600 mt-2 p-1">Computer Science Student</p>
          <img src='/Nicole.jpg' className='rounded border-4 border-gray-700 max-h-96'></img>
        </header>
        <main className="max-w-7xl bg-white mt-2 rounded-2xl shadow-lg text-center p-2">
          <p className="text-gray-600 mb-4">I started my Computer Science degree at Arkansas Tech University in the fall of 2022. I have a strong interest in web development. I have been on the Dean's List every semester that I have been at Tech. I am a member of Sigma Alpha Iota, a music fraternity supporting the development of music across the world. In my spare time, I enjoy playing video games, drawing, and reading.</p>
          <h3>Education</h3>
          <ul className="text-gray-600 mb-4">
            <li>Bachelor's of Science in Computer Science - Expected May 2026</li>
            <li>Associate of Applied Science in Information Technology - December 2024</li>
            <li>Associate of Applied Science in Cybersecurity - December 2024</li>
          </ul>
          <p ></p>
        </main>
        <footer className="w-full text-center text-gray-700 mt-4">Github: <a href='https://github.com/nholt908' target='blank' className='underline'>nholt908</a> Email: nicoleholt90888@gmail.com</footer>
      </div>
    </>
  )
}

export default App
