"use client";

const Hero = () => {
  return (
    <div className="relative mt-10">
      <div className="aspect-w-16 aspect-h-9 ">
        <iframe
          className="rounded-lg"
          src="https://www.youtube.com/embed/gQQn9sqIs4E?autoplay=1&mute=1&loop=1&playlist=gQQn9sqIs4E&ab_channel=TnCTravelnChil"
          title="YouTube video player"
          allow="autoplay; "
        />
      </div>

      {/* <div className="relative h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Welcome to My Site</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-12">Discover the amazing Places</p>
        <a href="#" className="bg-white text-black px-8 py-3 rounded-full uppercase font-semibold tracking-wide hover:bg-gray-200">Get Started</a>
      </div>
    </div> */}
    </div>
  );
};

export default Hero;
