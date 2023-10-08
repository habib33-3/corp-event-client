const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('./banner.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-extrabold text-white">CorpEvent</h1>
            <p className="mb-5 text-3xl text-justify font-bold text-zinc-300">
            Crafting Memorable Moments, One Event at a Time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
