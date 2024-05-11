import React from "react";

const Artist = () => {
  return (
    <section className="bg-pink-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Artists
        </h2>
        <h4 classNameName="text-center mb-12">
          At the heart of our gallery, lies a community of local talent.
          Discover the artists behind the talent, get to know their stories
          beyond their art
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="group relative">
            <img
              src="src/component/Artist/artist1.jpg"
              alt="Artist 1"
              className="w-full  h-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 opacity-0 transition duration-300 group-hover:opacity-100">
              <p className="text-white text-3xl font-semibold text-center">
                Sangita Kumari
              </p>
            </div>
          </div>
          <div className="group relative">
            <img
              src="src/component/Artist/artist2.jpg"
              alt="Artist 2"
              className="w-full  h-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 opacity-0 transition duration-300 group-hover:opacity-100">
              <p className="text-white text-3xl font-semibold text-center">
                Rashmi Karn
              </p>
            </div>
          </div>
          <div className="group relative">
            <img
              src="src/component/Artist/artist3.jpg"
              alt="Artist 3"
              className="w-full h-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 opacity-0 transition duration-300 group-hover:opacity-100">
              <p className="text-white text-3xl font-semibold text-center">
                Dikshya Karn
              </p>
            </div>
          </div>
          <div className="group relative">
            <img
              src="src/component/Artist/artist4.jpg"
              alt="Artist 4"
              className="w-full h-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 opacity-0 transition duration-300 group-hover:opacity-100">
              <p className="text-white  font-bold text-3xl text-center">
                Khusi Vijay
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;
