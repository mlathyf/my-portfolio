import { heroContent } from "../constants";
import heroImg from "../assets/heroImage2.svg";

export default function Hero() {
  return (
    <section className="flex flex-col items-center min-h-screen lg:flex-row p-8 gap-10  max-w-7xl mx-auto">
      {/* Text Content */}
      <div className="text-center flex-1 lg:text-left space-y-4">
        <h3 className="text-xl md:text-2xl text-slate-700">
          {heroContent.greeting}{" "}
          <span className="font-bold text-accent">{heroContent.name}</span>
        </h3>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {heroContent.headline}
        </h1>

        <p className="text-lg text-slate-700 max-w-lg mx-auto lg:mx-0">
          {heroContent.bio}
        </p>

        <button className="px-8 py-3 font-bold text-lg border-b-2 bg-accent text-white rounded-lg transition-all duration-150 drop-shadow-xl transform hover:scale-102 hover:bg-accent/90 hover:drop-shadow-2xl">
          {heroContent.ctaText}
        </button>
      </div>

      {/* Hero Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={heroImg}
          alt="Hero Image"
          className="w-full max-w-124 h-auto"
        />
      </div>
    </section>
  );
}
