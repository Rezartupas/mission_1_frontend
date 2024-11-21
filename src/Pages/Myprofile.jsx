import Header from "../components/Header"
import Footer from "../components/Footer"

const Myprofile = () => {
    return (
        <div className="bg-zinc-950 text-white min-h-screen">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Profil Saya</h1>
                <div className="bg-zinc-900 p-6 rounded-lg">
                    <div className="flex items-center gap-4 mb-6">
                        <img 
                            src="../src/assets/avatar.png"
                            alt="Profile" 
                            className="w-31 h-24 rounded-full"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">Username</h2>
                            <p className="text-gray-400">Member sejak 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Myprofile