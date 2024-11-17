import Footer from "../components/Footer"
import Header from "../components/Header"

const Mylist = () => {
    return (
        <div className="bg-zinc-950 text-white">
            <Header></Header>

            {/* Semua Film & Series */}
            <div className="max-w-7xl mx-auto px-5 py-10 md:py-20">
                <h1 className="text-3xl md:text-5xl font-bold">Semua Film & Series</h1>

                <div className="flex justify-center">
                        <a href="#">
                            <img src="/public/1.jpeg" alt="poster 1"/>
                        </a>
                </div>

            </div>

            {/* Daftar Saya */}
            <div className="max-w-7xl mx-auto px-5 py-10 md:py-20">
                <h1 className="text-3xl md:text-5xl font-bold">Daftar Saya</h1>
                <p className="text-lg md:text-2xl mt-5">Daftar film & Series yang telah kamu tambahkan</p>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Mylist;