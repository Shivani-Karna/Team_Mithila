import React from "react";

const Latest = () => {
  return (
    <div class="bg-gray-100 py-16 px-4 lg:px-0">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12">
          Latest Work
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="src/component/Latest_Works/Image7.jpeg"
              alt="Work 1"
              class="w-full h-48 object-cover object-center"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Painting</h3>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="src/component/Latest_Works/Image4.jpeg"
              alt="Work 2"
              class="w-full h-48 object-cover object-center"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Photography</h3>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="src/component/Latest_Works/Image6.jpeg"
              alt="Work 3"
              class="w-full h-48 object-cover object-center"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Sculpture</h3>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="src/component/Latest_Works/Image2.jpeg"
              alt="Work 4"
              class="w-full h-48 object-cover object-center"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Drawing Sketches</h3>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="src/component/Latest_Works/Image3.jpeg"
              alt="Work 5"
              class="w-full h-48 object-cover object-center"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Print</h3>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="src/component/Latest_Works/Image5.jpeg"
              alt="Work 6"
              class="w-full h-48 object-cover object-center"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Supplies</h3>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
