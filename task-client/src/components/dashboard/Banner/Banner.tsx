import Image from "next/image"

const Banner = () => {
  return (
 <div className="max-w-7xl mx-auto px-4 flex items-center justify-between mt-10 z-10 relative">
          <div>
            <h2 className="text-lg text-green-400">Hi Thomas</h2>
            <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
          </div>
          <div className="hidden md:block">
            <Image
              src="/banner.png"
              width={350}
              height={350}
              alt="banner"
              className="object-cover"
            />
          </div>
        </div>
  )
}

export default Banner
