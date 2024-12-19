import React from 'react'

import Image from 'next/image'

const About = () => {
  return (
    <div className="bg-gray-900 text-white px-4 py-16 sm:px-8 md:px-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-600 mb-8">
            <span className="text-white">About</span> Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0">
            My name is Aisha Junaid, and I am currently studying in my second year of intermediate in Computer Science at 
            Khatoon-e-Pakistan College. I have been interested in technology and programming since childhood, which led me 
            to start learning HTML and CSS early on. Over time, I expanded my skills to include JavaScript and TypeScript, 
            and I am now working on mastering Next.js and Tailwind CSS to build modern and efficient web applications. I am passionate
            about front-end development and excited to continue growing my skills and exploring new technologies in the field.
          </p>
        </div>

        <div className="flex justify-center md:justify-start md:w-1/2">
          <Image 
            src="/about_files/about.jpg" 
            className="rounded-xl shadow-2xl border-4 border-cyan-500" 
            alt="About Me" 
            height={400} 
            width={400} 
            layout="intrinsic"
          />
        </div>
      </div>

  
    </div>
  )
}

export default About

