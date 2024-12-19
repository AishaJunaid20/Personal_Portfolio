

import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-11 p-4">
        {/* Image section */}
        <div className="relative w-full max-w-[300px] md:max-w-[400px]">
          <Image 
            src="/images_files/images.jpg" 
            alt="Aisha Junaid" 
            width={400} 
            height={400} 
            className="rounded-xl object-cover" 
          />
        </div>

        {/* Text section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-cyan-700">
            Hello <br /> I am <br /> Aisha Junaid
          </h2>
        </div>
      </div>
    </div>
  );
}

