import React from "react";
import { Link } from "react-router-dom";

const Variety = () => {
  return (
    <div className="bg-red-200 py-16 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 relative">
          Our Work
        </h2>
        <p className="text-center mt-8">
          Nepali Madhesi Women's art for sale from different artists that joined
          us, and trust us, to promote their work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link to={"painting-list"}>
            <div className="hover:bg-gray-100 bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="src/component/Variety/Variety1.jpg"
                alt="Painting"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Painting</h3>
                <p className="text-gray-700">
                  Discover our collection of breathtaking paintings created by
                  talented artists.
                </p>
              </div>
            </div>
          </Link>
          <Link to={"decor-list"}>
            <div className="hover:bg-gray-100 bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="src/component/Variety/Variety2.jpg"
                alt="Decor"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Decor</h3>
                <p className="text-gray-700">
                  Explore our exquisite decor pieces to adorn your living
                  spaces.
                </p>
              </div>
            </div>
          </Link>

          <Link to={"handicraft-list"}>
            <div className="hover:bg-gray-100 bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="src/component/Variety/Variety3.jpg"
                alt="Handicrafts"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Handicrafts</h3>
                <p className="text-gray-700">
                  Browse through our unique handcrafted items, each telling a
                  story.
                </p>
              </div>
            </div>
          </Link>
          <Link to={"festive-list"}>
            <div className="hover:bg-gray-100 bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="src/component/Variety/Variety4.png"
                alt="Festive Material"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Festive Material</h3>
                <p className="text-gray-700">
                  Get ready for celebrations with our vibrant festive materials
                  and decorations.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Variety;
