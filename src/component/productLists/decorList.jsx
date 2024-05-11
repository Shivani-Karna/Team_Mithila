import React from "react";
import Navbar from "../Navbar/Navbar";

const DecorList = () => {
  const decorItems = [
    {
      id: 1,
      name: "Bamboo Suppa",
      price: "$35",
      imageSrc: "https://m.media-amazon.com/images/I/712JG8H6c2L.jpg",
      imageAlt: "Bamboo Wall Shelf",
      description:
        "Handcrafted bamboo suppa perfect for filtering grains, made by skilled rural women artisans.",
      artisan: "Radha Kumari",
    },
    {
      id: 2,
      name: "Bamboo Lanterns",
      price: "$25",
      imageSrc: "src/component/productLists/bamboolanterns.jpeg",
      imageAlt: "Bamboo Lanterns",
      description:
        "Set of bamboo lanterns, adding warmth and ambiance to any space, crafted with care by rural women.",
      artisan: "Laxmi Devi",
    },
    {
      id: 3,
      name: "Bamboo Wind Chimes",
      price: "$20",
      imageSrc: "src/component/productLists/bambooChimes.jpeg",
      imageAlt: "Bamboo Wind Chimes",
      description:
        "Beautiful bamboo wind chimes, creating soothing sounds, handmade by talented rural women artisans.",
      artisan: "Sita Kumari",
    },
    {
      id: 4,
      name: "Bamboo Wall Art",
      price: "$40",
      imageSrc: "src/component/productLists/bambooWallArt.jpg",
      imageAlt: "Bamboo Wall Art",
      description:
        "Intricate bamboo wall art, adding a touch of nature-inspired elegance to your home, crafted by skilled rural women.",
      artisan: "Gita Devi",
    },
    {
      id: 5,
      name: "Bamboo Coasters",
      price: "$15",
      imageSrc:
        "https://m.media-amazon.com/images/I/81KazGO0WML._AC_UF894,1000_QL80_.jpg",
      imageAlt: "Bamboo Coasters",
      description:
        "Set of bamboo coasters, protecting your furniture in style, lovingly made by rural women.",
      artisan: "Kamini Devi",
    },
    {
      id: 6,
      name: "Bamboo Vase",
      price: "$30",
      imageSrc: "src/component/productLists/bambooVase.jpeg",
      imageAlt: "Bamboo Vase",
      description:
        "Elegant bamboo vase, adding a natural touch to your decor, handcrafted by rural women artisans.",
      artisan: "Sarita Devi",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-4">
        {decorItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <p className="text-gray-900 font-bold mb-2">
                Artisan: {item.artisan}
              </p>
              <p className="text-gray-900 font-semibold mb-2">
                Price: {item.price}
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DecorList;
