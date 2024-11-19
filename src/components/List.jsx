import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const List = () => {
  const [movies] = useState([
    { id: 1, title: "Harry Potter", img: "./img/1.jpeg" },
    { id: 2, title: "The Dark Knight", img: "./img/2.jpeg" },
    { id: 3, title: "Jumanji", img: "./img/3.jpeg" },
    { id: 4, title: "Fight Club", img: "./img/4.jpeg" },
    { id: 5, title: "Fast X", img: "./img/5.jpeg" },
    { id: 6, title: "Pat Rung", img: "./img/6.jpeg" },
    { id: 7, title: "End Game", img: "./img/7.jpeg" },
    { id: 8, title: "Avengers", img: "./img/8.jpeg" },
    { id: 9, title: "Archer", img: "./img/9.jpeg" },
    { id: 10, title: "Home Alone", img: "./img/10.jpeg" },
  ]);

  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("myList"));
    if (savedList) {
      setMyList(savedList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  const addToMyList = (movie) => {
    if (!myList.find((item) => item.id === movie.id)) {
      setMyList([...myList, movie]);
    } else {
      alert("Film sudah ada di daftar!");
    }
  };

  const removeFromMyList = (movieId) => {
    setMyList(myList.filter((movie) => movie.id !== movieId));
  };

  // Pengaturan carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#0d0f1b", color: "white" }}>
      <div className="flex justify-between mb-4">
        <h1 className="text-4xl font-bold">Daftar Film</h1>
        <button className="text-white text-lg hidden lg:block hover:text-gray-300">Lihat Semua</button>
      </div>

      <Slider {...carouselSettings}>
  {movies.map((movie) => (
    <div key={movie.id} className="p-2 relative group">
      {/* Layer overlay untuk hover */}
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
        <button
          onClick={() => addToMyList(movie)}
          className="mb-2 px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-600"
        >
          Tambahkan ke Daftar Saya
        </button>
      </div>
      {/* Gambar film */}
      <img src={movie.img} alt={movie.title} className="w-full h-full object-cover" />
    </div>
  ))}
</Slider>

  
      <h2 className="text-4xl font-bold mt-8 mb-4">Daftar Saya</h2>
      {myList.length === 0 ? (
        <p className="text-center">Tidak ada film dalam daftar.</p>
      ) : (
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {myList.map((movie) => (
            <div key={movie.id} className="flex flex-col items-center justify-center">
              <div className="relative w-full h-full">
                <img src={movie.img} alt={movie.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => removeFromMyList(movie.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    
  );
};

export default List;