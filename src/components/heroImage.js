import background from "../assets/hero.jpg";

function HeroImage() {
  return (
    <section
      className="w-full h-[34rem] object-cover relative"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <header className="top-[250px] left-[40px] sm:left-[120px] md:left-[200px] lg:left-[600px] mx-auto text-8xl text-zinc-50 text-center absolute tracking-widest">
        SPACE X
      </header>
    </section>
  );
}

export default HeroImage;
