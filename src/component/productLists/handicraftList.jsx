import React from "react";
import Navbar from "../Navbar/Navbar";

const HandicraftList = () => {
  const products = [
    {
      id: 1,
      name: "Handwoven Dhurrie Rug",
      price: "$50",
      imageSrc: "src/component/productLists/dhuri.jpeg",
      imageAlt: "Handwoven Dhurrie Rug",
      description:
        "Colorful handwoven dhurrie rug, adding warmth and character to any room, crafted by skilled rural women artisans.",
      artisan: "Sarita Devi",
    },
    {
      id: 2,
      name: "Terracotta Pottery Set",
      price: "$40",
      imageSrc: "src/component/productLists/potterySet.jpg",
      imageAlt: "Terracotta Pottery Set",
      description:
        "Set of handmade terracotta pottery, perfect for serving snacks or displaying flowers, lovingly made by rural women.",
      artisan: "Kamini Devi",
    },
    {
      id: 3,
      name: "Bamboo Basket",
      price: "$35",
      imageSrc: "src/component/productLists/bambooBasket.jpeg",
      imageAlt: "Bamboo Basket",
      description:
        "Stylish bamboo basket, ideal for storing fruits or organizing household items, crafted with care by rural artisans.",
      artisan: "Radha Kumari",
    },
    {
      id: 4,
      name: "Clay Figurines",
      price: "$25",
      imageSrc: "src/component/productLists/clay.jpg",
      imageAlt: "Clay Figurines",
      description:
        "Adorable clay figurines depicting rural life scenes, perfect for home decor or gifting, handmade by talented rural women.",
      artisan: "Laxmi Devi",
    },
    {
      id: 5,
      name: "Beaded Jewelry Set",
      price: "$30",
      imageSrc: "src/component/productLists/beadedSet.jpeg",
      imageAlt: "Beaded Jewelry Set",
      description:
        "Elegant beaded jewelry set, including necklace and earrings, crafted with precision by skilled women artisans.",
      artisan: "Gita Devi",
    },
    {
      id: 6,
      name: "Fabric Wall Hanging",
      price: "$45",
      imageSrc: "src/component/productLists/wallHanging.jpg",
      imageAlt: "Fabric Wall Hanging",
      description:
        "Handcrafted fabric wall hanging, adding a touch of bohemian charm to your space, made by rural women using traditional techniques.",
      artisan: "Sita Kumari",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-gray-900 font-bold mb-2">
                Artisan: {product.artisan}
              </p>
              <p className="text-gray-900 font-semibold mb-2">
                Price: {product.price}
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

export default HandicraftList;
