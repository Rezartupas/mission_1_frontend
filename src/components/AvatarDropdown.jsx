import { useState } from 'react';

const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');

  useState(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setUsername(user.username);
    }
  }, []);

  // Fungsi untuk toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Avatar yang bisa di-klik */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-3 focus:outline-none"
      >
        <span className="text-white">{username}</span>
        <img
          className="w-20 h-13 rounded-full"
          src="../src/assets/avatar.png" 
          alt="Avatar"
        />
      </button>

      {/* Menu dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-zinc-900 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            <a href="#profile" className="block px-4 py-2 text-sm text-white hover:text-blue-500">
              Profil Saya
            </a>
            <a href="#settings" className="block px-4 py-2 text-sm text-white hover:text-blue-500">
              Ubah Premium
            </a>
            <a href="/" className="block px-4 py-2 text-sm text-white hover:text-blue-500">
              Keluar
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;