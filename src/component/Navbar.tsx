import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
       <div className="bg-yellow-600 w-full h-[100px]">
  <div className="flex w-full ">
  <div className="pt-[20px] ml-[20px] max-w-30%">
    <Image src="/image_files/image.jpg" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveN_aY8mXIyQRJykef1nNs-QIbtuqyLfjPmYo4kx0hngSHHgwXUW70uuglJc5-8kYbGA&usqp=CAU" width={70} height={70}/>
  </div>
  <div className="flex  pt-[30px] w-[70%]">
    <ul className="flex gap-8 ml-[30%] text-[20px] font-semibold ">
      <li className="hover:text-yellow-200"><a href="/">Home</a></li>
      <Link className="hover:text-yellow-200"href="/about">About</Link>
      <Link className="hover:text-yellow-200"href="/projects">Projects</Link>
      
      
      <Link className="hover:text-yellow-200"href="/skills">Skills</Link>
      

    </ul>
  </div>
  <div className=" ml-[5%] mr-[10%] pt-[35px]">
    <button className="bg-yellow-800 text-white  w-[120px] h-[40px] rounded-xl hover:bg-yellow-200">Download CV</button>
  </div>
 </div>
 </div>
    </div>
  )
}

export default Navbar