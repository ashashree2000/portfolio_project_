import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm Your Name
          </h1>
          <p className="text-lg md:text-xl mb-8">
            I'm a passionate web developer specializing in building modern and
            responsive web applications.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Portfolio
          </button>
        </div>
        <div>
          <Image
            src="/photo.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
