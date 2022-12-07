import React from "react";
import { Link } from "react-router-dom";

function Thanks() {
  return (
    <div class="bg-black h-screen flex items-center">
      <div class="container mx-auto text-center">
        <p class="text-white sm:text-6xl text-4xl">Thank You</p>
        <Link to="/">
          <p class="text-gray-600 sm:text-3xl text-2xl pt-6">/Home</p>
        </Link>
      </div>
    </div>
  );
}

export default Thanks;
