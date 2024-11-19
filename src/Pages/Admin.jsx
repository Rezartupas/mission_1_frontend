import { useState } from 'react';

const Admin = () => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    image: '',
    rating: '',
    category: 'trending' // trending, new, topRated
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the movie
    console.log('New movie data:', newMovie);
    // Reset form
    setNewMovie({
      title: '',
      description: '',
      image: '',
      rating: '',
      category: 'trending'
    });
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 justify-between" >
          <img src="./img/Logo.png" alt="Logo" className="w-36 h-20" />
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>
        
        {/* Add New Movie Form */}
        <div className="bg-zinc-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Movie</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Movie Title</label>
              <input
                type="text"
                value={newMovie.title}
                onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
                className="w-full p-2 rounded bg-zinc-700"
                required
              />
            </div>
            
            <div>
              <label className="block mb-1">Description</label>
              <textarea
                value={newMovie.description}
                onChange={(e) => setNewMovie({...newMovie, description: e.target.value})}
                className="w-full p-2 rounded bg-zinc-700"
                rows="4"
                required
              />
            </div>
            
            <div>
              <label className="block mb-1">Image URL</label>
              <input
                type="url"
                value={newMovie.image}
                onChange={(e) => setNewMovie({...newMovie, image: e.target.value})}
                className="w-full p-2 rounded bg-zinc-700"
                required
              />
            </div>
            
            <div>
              <label className="block mb-1">Rating</label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={newMovie.rating}
                onChange={(e) => setNewMovie({...newMovie, rating: e.target.value})}
                className="w-full p-2 rounded bg-zinc-700"
                required
              />
            </div>
            
            <div>
              <label className="block mb-1">Category</label>
              <select
                value={newMovie.category}
                onChange={(e) => setNewMovie({...newMovie, category: e.target.value})}
                className="w-full p-2 rounded bg-zinc-700"
                required
              >
                <option value="trending">Trending</option>
                <option value="new">New Release</option>
                <option value="topRated">Top Rated</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Movie
            </button>
          </form>
        </div>

        {/* Movie List Management */}
        <div className="bg-zinc-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Manage Movies</h2>
          <div className="space-y-4">
            {/* Here you would map through existing movies */}
            <p className="text-gray-400">Movie list management will be implemented here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;