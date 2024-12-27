const HeroSection = () => {
    return (
      <div className="relative flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <img
          className="h-44 lg:h-full w-full object-cover shadow-lg rounded-md transform hover:scale-105 transition-transform duration-500"
          src="../img/hero1.png"
          alt="Hero"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  