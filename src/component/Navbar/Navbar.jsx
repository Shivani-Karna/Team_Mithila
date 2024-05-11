import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-400 p-4 shadow-md static">
      <div className="container mx-auto flex justify-between items-center xl:w-2/3">
        <div className="flex items-center">
          <img
            src="src/component/Navbar/logo1.png"
            alt="Logo"
            className="h-24 w-auto mr-4"
          />
          <p className="text-yellow-600 font-bold text-5xl">शशिकृत 🙏</p>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-black font-bold text-2xl hover:text-gray-800 transition duration-300"
          >
            Mithila Painting
          </a>
          <a
            href="#"
            className="text-black font-bold text-2xl hover:text-gray-800 transition duration-300"
          >
            Handicraft
          </a>
          <a
            href="#"
            className="text-black font-bold text-2xl hover:text-gray-800 transition duration-300"
          >
            Online Courses
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="text-white text-2xl font-bold bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </a>
          <a
            href="#"
            className="text-white text-2xl font-bold bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
