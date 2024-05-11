import React from "react";
import Navbar from "../Navbar/Navbar";

const FestiveMaterialList = () => {
  const festiveItems = [
    {
      id: 1,
      name: "Sugarcane Diyas",
      price: "$10",
      imageSrc: "src/component/productLists/diya.jpeg",
      imageAlt: "Sugarcane Diyas",
      description:
        "Traditional sugarcane diyas, perfect for lighting during Chhath Puja, handmade by rural women.",
      artisan: "Radha Kumari",
    },
    {
      id: 2,
      name: "Rice Rangoli",
      price: "$15",
      imageSrc: "src/component/productLists/riceRangoli.jpg",
      imageAlt: "Rice Rangoli",
      description:
        "Beautiful rice rangoli designs, used to decorate homes during festivals, crafted by skilled rural women.",
      artisan: "Laxmi Devi",
    },
    {
      id: 3,
      name: "Bamboo Torches",
      price: "$20",
      imageSrc: "src/component/productLists/bambooTorch.jpg",
      imageAlt: "Bamboo Torches",
      description:
        "Traditional bamboo torches, essential for lighting during Chhath Puja ceremonies, handmade by rural artisans.",
      artisan: "Sita Kumari",
    },
    {
      id: 4,
      name: "Cow Dung Diyas",
      price: "$12",
      imageSrc: "src/component/productLists/cow-dung-diya.png",
      imageAlt: "Cow Dung Diyas",
      description:
        "Cow dung diyas, a symbol of purity and auspiciousness, handcrafted by talented rural women.",
      artisan: "Gita Devi",
    },
    {
      id: 5,
      name: "Banana Leaf Decorations",
      price: "$18",
      imageSrc: "src/component/productLists/bananaLeafDecor.jpg",
      imageAlt: "Banana Leaf Decorations",
      description:
        "Exquisite banana leaf decorations, used for puja rituals and festive adornments, crafted with care by rural artisans.",
      artisan: "Kamini Devi",
    },
    {
      id: 6,
      name: "Clay Pottery",
      price: "$25",
      imageSrc: "src/component/productLists/Clay-pottery.jpg",
      imageAlt: "Clay Pottery",
      description:
        "Traditional clay pottery, essential for offering prasad during Chhath Puja, handmade by rural women artisans.",
      artisan: "Sarita Devi",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-4">
        {festiveItems.map((item) => (
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

export default FestiveMaterialList;
