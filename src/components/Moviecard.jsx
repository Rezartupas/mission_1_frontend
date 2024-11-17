import React from "react";

const MovieCard = ({ imageSrc, title }) => {
  return (
    <div className="relative w-56 h-80 rounded-lg overflow-hidden group shadow-lg">
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
          Tambahkan
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
