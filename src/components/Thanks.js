import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

function Thanks() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section class="dark:bg-black h-screen flex items-center">
      <div class="container mx-auto text-center">
        <p class="dark:text-white sm:text-6xl text-4xl">Thank You</p>
        <Link to="/">
          <p class="text-gray-600 sm:text-3xl text-2xl pt-6">/Home</p>
        </Link>
      </div>
    </section>
  );
}

export default Thanks;
