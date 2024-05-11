import React from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";

import { addItem } from "../../utils/cartSlice";

const MithilaPaintingList = () => {
  const paintings = [
    {
      id: 1,
      name: "Madhubani Peacock",
      price: "$150",
      imageSrc: "src/component/productLists/madhubaniPeackcock.jpg",
      imageAlt: "Madhubani Peacock",
      description:
        "Vibrant Mithila painting featuring a majestic peacock, symbolizing beauty and grace.",
      artist: "Sita Devi",
    },
    {
      id: 2,
      name: "Krishna Leela",
      price: "$180",
      imageSrc:
        "https://www.indicinspirations.com/cdn/shop/products/krishna-leela-gowardhan-parvat-madhubani-painting-a4-frame-paintings-869927.jpg?v=1664448598",
      imageAlt: "Krishna Leela",
      description:
        "Colorful Mithila painting depicting the playful antics of Lord Krishna.",
      artist: "Bharti Dayal",
    },
    {
      id: 3,
      name: "Sita Haran",
      price: "$200",
      imageSrc: "src/component/productLists/sitaHaran.jpg",
      imageAlt: "Sita Haran",
      description:
        "Mithila painting illustrating the abduction of Sita by Ravana from the Ramayana.",
      artist: "Mahasundari Devi",
    },
    {
      id: 4,
      name: "Tree of Life",
      price: "$220",
      imageSrc: "src/component/productLists/treeOfLife.jpg",
      imageAlt: "Tree of Life",
      description:
        "Intricate Mithila painting depicting the Tree of Life, symbolizing fertility and prosperity.",
      artist: "Jyoti Swayamprabha",
    },
    {
      id: 5,
      name: "Village Scene",
      price: "$190",
      imageSrc: "src/component/productLists/village.jpg",
      imageAlt: "Village Scene",
      description:
        "Scenic Mithila painting capturing the essence of rural life with vibrant colors.",
      artist: "Savitri Devi",
    },
    {
      id: 6,
      name: "Ganesha Blessings",
      price: "$250",
      imageSrc: "src/component/productLists/ganesh.jpg",
      imageAlt: "Ganesha Blessings",
      description:
        "Beautiful Mithila painting portraying Lord Ganesha bestowing blessings and prosperity.",
      artist: "Ambika Devi",
    },
  ];
  const dispatch = useDispatch();
  const handleAddItems = (itemCard) => {
    dispatch(addItem(itemCard));
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-4">
        {paintings.map((painting) => (
          <div
            key={painting.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={painting.imageSrc}
              alt={painting.imageAlt}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{painting.name}</h3>
              <p className="text-gray-700 mb-2">{painting.description}</p>
              <p className="text-gray-900 font-bold mb-2">
                Artist: {painting.artist}
              </p>
              <p className="text-gray-900 font-semibold mb-2">
                Price: {painting.price}
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={() => handleAddItems(painting)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MithilaPaintingList;
