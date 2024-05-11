import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-48 md:h-screen">
      <img
        src="src/component/Hero/Lead-01-_DSC0950.jpg"
        alt="Hero Image"
        className="object-cover w-full "
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-4">
          Discover Art & Culture
        </h1>
        <p className="text-lg sm:text-xl xl:text-2xl mb-6">
          Experience the beauty of creativity and expression.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
