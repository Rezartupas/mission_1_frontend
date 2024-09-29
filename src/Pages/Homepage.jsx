import AvatarDropdown from "../components/AvatarDropdown";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="bg-zinc-950 text-white">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-5">
        <div className="flex items-center gap-10">
          <img src="../src/assets/Logo.png" alt="Logo" className="w-36 h-20" />
          <ul className="flex gap-10">
            <li>
              <a href="#Series" className="hover:text-gray-300">
                Series
              </a>
            </li>
            <li>
              <a href="#Film" className="hover:text-gray-300">
                Film
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Daftar Saya
              </a>
            </li>
          </ul>
        </div>
        <AvatarDropdown></AvatarDropdown>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[88vh]" style={{ backgroundImage: `url('../src/assets/das.png')` }}>
        <div className="absolute bottom-12 left-24 w-1/2 text-left">
          <h1 className="text-white text-4xl font-bold mb-4">Duty After School</h1>
          <p className="text-white text-lg mb-6">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-gray-500"
            >
              Mulai
            </a>
            <a href="#" className="border border-gray-300 py-2 px-4 rounded-lg hover:underline bg-slate-800">
              ⨀ Lihat selengkapnya
            </a>
            <a href="#" className='flex items-center'>18+</a>
          </div>      
          </div>
          <div className="absolute right-24 bottom-12"><img src="../src/assets/Frame 65.png" alt="Hero Image" /></div>  
      </section>

      {/* Section Melanjutkan Tonton Film */}
      <main className="my-20 px-10" id="Film">
        <h1 className="text-3xl mb-8">Melanjutkan Tonton Film</h1>
        <div className="relative">
          <span className="absolute left-0 top-1/2 -translate-y-1/2">
            <img src="../src/assets/arrowleft.png" width="44" alt="Left Arrow" />
          </span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2">
            <img src="../src/assets/arrowright.png" width="44" alt="Right Arrow" />
          </span>
          <div className="flex gap-8 justify-center overflow-x-auto">
            {[
              { title: "Don't Look Up", rating: 4.2, image: "../src/assets/component.png" },
              { title: "All of Us Are Dead", rating: 3.2, image: "../src/assets/component2.png" },
              { title: "Bluelock", rating: 4.5, image: "../src/assets/component1.png" },
              { title: "A Man Called Otto", rating: 4.7, image: "../src/assets/component3.png" },
            ].map((movie, index) => (
              <div
                key={index}
                className="w-80 h-40 bg-cover bg-no-repeat rounded-lg p-4 flex justify-between items-end"
                style={{ backgroundImage: `url(${movie.image})` }}
              >
                <p>{movie.title}</p>
                <p className="flex items-center gap-1">
                  <img src="../src/assets/star.png" width="12" alt="Star" />
                  {movie.rating}/5
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Top Rating Hari Ini */}
      <main className="my-20 px-10" id="Series">
        <h1 className="text-3xl mb-8">Top Rating Film dan Series Hari Ini</h1>
        <div className="relative">
          <span className="absolute left-0 top-1/2 -translate-y-1/2">
            <img src="../src/assets/arrowleft.png" width="44" alt="Left Arrow" />
          </span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2">
            <img src="../src/assets/arrowright.png" width="44" alt="Right Arrow" />
          </span>
          <div className="flex gap-8 justify-center overflow-x-auto">
            {[1, 2, 3, 4, 5].map((index) => (
              <img
                key={index}
                src={`../src/assets/${index}.jpeg`}
                alt={`Movie ${index}`}
                className="w-56 h-80 rounded-lg"
              />
            ))}
          </div>
        </div>
      </main>

      {/* Film Trending */}
      <main className="my-20 px-10">
        <h1 className="text-3xl mb-8">Film Trending</h1>
        <div className="relative">
          <span className="absolute left-0 top-1/2 -translate-y-1/2">
            <img src="../src/assets/arrowleft.png" width="44" alt="Left Arrow" />
          </span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2">
            <img src="../src/assets/arrowright.png" width="44" alt="Right Arrow" />
          </span>
          <div className="flex gap-8 justify-center overflow-x-auto">
            {[6, 7, 8, 9, 10].map((index) => (
              <img
                key={index}
                src={`../src/assets/${index}.jpeg`}
                alt={`Movie ${index}`}
                className="w-56 h-80 rounded-lg"
              />
            ))}
          </div>
        </div>
      </main>

      {/* Rilis Baru */}
      <main className="my-20 px-10">
        <h1 className="text-3xl mb-8">Rilis Baru</h1>
        <div className="relative">
          <span className="absolute left-0 top-1/2 -translate-y-1/2">
            <img src="../src/assets/arrowleft.png" width="44" alt="Left Arrow" />
          </span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2">
            <img src="../src/assets/arrowright.png" width="44" alt="Right Arrow" />
          </span>
          <div className="flex gap-8 justify-center overflow-x-auto">
            {[11, 12, 13, 14, 15].map((index) => (
              <img
                key={index}
                src={`../src/assets/${index}.jpeg`}
                alt={`Movie ${index}`}
                className="w-56 h-80 rounded-lg"
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
