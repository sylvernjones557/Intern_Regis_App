import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-2 bg-blue-700 text-white fixed top-0 w-full">
      <p className="w-[90%] mx-auto text-2xl font-bold text-center p-2">
        Registration Form App
      </p>
      <ul className="w-[90%] mx-auto flex gap-4 justify-center">
        <Link to="/"><li>Form</li></Link>
        <Link to="/users"><li>All Users</li></Link>
      </ul>
    </header>
  );
};

export default Header;
