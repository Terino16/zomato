import React from "react";

const HeroComponent = () => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full h-48 object-cover"
        src="/Hero.png"
        alt="Product Image"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Product Title</div>

        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p class="text-gray-900 font-bold text-xl mt-2">Price: $9.99</p>
        <div class="flex items-center mt-2">
          <span class="text-gray-700">Veg:</span>
          <svg
            class="w-4 h-4 text-green-500 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 0a10 10 0 100 20 10 10 0 000-20zM5 10a5 5 0 1110 0 5 5 0 01-10 0zm6-4a1 1 0 100-2 1 1 0 000 2zm-.7 9.29a1 1 0 111.4-1.42 1 1 0 01-1.4 1.42zM7.44 7.44a1 1 0 111.42-1.42 1 1 0 01-1.42 1.42zM10 18a8 8 0 110-16 8 8 0 010 16z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
