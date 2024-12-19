
import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div>
      {/* Section Header */}
      <section className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-cyan-600">
              My Projects Showcase
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-300">
              I have built a variety of projects showcasing my skills in HTML, CSS, JavaScript, and TypeScript. 
              By incorporating Next.js and Tailwind CSS, I have created responsive, efficient web applications 
              with a strong focus on UI/UX. Each project demonstrates my dedication to mastering modern web 
              development tools and frameworks.
            </p>
          </div>

          {/* Responsive Grid for Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Individual Image Blocks */}
            {[
              '/image1_files/image1.jpg',
              '/image2_files/image2.jpg',
              '/image3_files/image3.jpg',
              '/image4_files/image4.jpg',
              '/image5_files/image5.jpg',
              '/image6_files/image6.jpg',
              '/image7.jpg',
              '/image8.jpg',
            ].map((src, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group">
                <Image
                  src={src}
                  alt={`Project ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Link Section */}
      <div className="bg-gray-900 py-8 text-center">
        <p className="text-cyan-200 text-xl font-semibold">
          Interested in seeing more? Visit my GitHub:
        </p>
        <a
          href="https://github.com/AishaJunaid607"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 text-lg text-cyan-700 hover:text-blue-500 border border-cyan-700 rounded-md transition-colors"
        >
          View My GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default page;
