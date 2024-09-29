const Footer = () => {
  return (
    <footer className="border-t border-gray-600 py-10 px-10">
        <div className="flex justify-between">
          <div>
            <img src="../src/assets/logo.png" width="163" alt="Logo" />
            <h4 className="mt-4">© 2024 Chill® All Rights Reserved.</h4>
          </div>
          <div className="flex gap-10">
            <div>
              <h3 className="mb-6 text-xl font-semibold">Genre</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Aksi</a></li>
                <li><a href="#" className="hover:underline">Anak-anak</a></li>
                <li><a href="#" className="hover:underline">Anime</a></li>
                <li><a href="#" className="hover:underline">Britania</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-xl font-semibold">Bantuan</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Kontak Kami</a></li>
                <li><a href="#" className="hover:underline">Privasi Policy</a></li>
                <li><a href="#" className="hover:underline">Syarat dan Kebijakan</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
