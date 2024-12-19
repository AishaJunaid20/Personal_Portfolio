

import React from 'react'

const skills = () => {
  return (
    <div className="px-4 py-8 sm:px-8 md:px-16">
      <h2 className="text-center text-4xl font-bold text-cyan-700 mb-8 sm:mb-12">
        My Skills
      </h2>
      <ul>
        <li className="mb-5">
          <div className="flex justify-between items-center text-xl font-semibold text-white">
            <span>HTML</span>
            <span className="text-sm text-gray-400">75%</span>
          </div>
          <div className="h-3 bg-red-900 rounded-xl mt-2">
            <div className="w-[75%] h-full bg-red-600 rounded-xl transition-all duration-500"></div>
          </div>
        </li>
        <li className="mb-5">
          <div className="flex justify-between items-center text-xl font-semibold text-white">
            <span>CSS</span>
            <span className="text-sm text-gray-400">70%</span>
          </div>
          <div className="h-3 bg-blue-500 rounded-xl mt-2">
            <div className="w-[70%] h-full bg-blue-400 rounded-xl transition-all duration-500"></div>
          </div>
        </li>
        <li className="mb-5">
          <div className="flex justify-between items-center text-xl font-semibold text-white">
            <span>TypeScript</span>
            <span className="text-sm text-gray-400">65%</span>
          </div>
          <div className="h-3 bg-orange-700 rounded-xl mt-2">
            <div className="w-[65%] h-full bg-orange-400 rounded-xl transition-all duration-500"></div>
          </div>
        </li>
        <li className="mb-5">
          <div className="flex justify-between items-center text-xl font-semibold text-white">
            <span>JavaScript</span>
            <span className="text-sm text-gray-400">59%</span>
          </div>
          <div className="h-3 bg-yellow-500 rounded-xl mt-2">
            <div className="w-[59%] h-full bg-yellow-200 rounded-xl transition-all duration-500"></div>
          </div>
        </li>
        <li className="mb-5">
          <div className="flex justify-between items-center text-xl font-semibold text-white">
            <span>Next.js</span>
            <span className="text-sm text-gray-400">60%</span>
          </div>
          <div className="h-3 bg-pink-950 rounded-xl mt-2">
            <div className="w-[60%] h-full bg-pink-600 rounded-xl transition-all duration-500"></div>
          </div>
        </li>
        <li className="mb-5">
          <div className="flex justify-between items-center text-xl font-semibold text-white">
            <span>TailwindCSS</span>
            <span className="text-sm text-gray-400">55%</span>
          </div>
          <div className="h-3 bg-purple-800 rounded-xl mt-2">
            <div className="w-[55%] h-full bg-purple-600 rounded-xl transition-all duration-500"></div>
          </div>
        </li>
        <li className="mb-5">
          <div className="flex justify-between items-center text-xl font-semibold text-white">
            <span>React</span>
            <span className="text-sm text-gray-400">45%</span>
          </div>
          <div className="h-3 bg-green-500 rounded-xl mt-2">
            <div className="w-[45%] h-full bg-green-200 rounded-xl transition-all duration-500"></div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default skills
