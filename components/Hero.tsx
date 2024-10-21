import Link from "next/link";

interface HeroProps {
  image: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaRoute: string;
  isBlogPage?: boolean;
}

const Hero = ({
  image,
  headline,
  description,
  ctaLabel,
  ctaRoute,
  isBlogPage,
}: HeroProps) => {
  return (
    <section
      className="hero h-[calc(100vh-4rem)]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-4xl">
          <h1 className="pb-5 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-violet-400 to-violet-50">
            {headline}
          </h1>
          <p className="mb-5">{description}</p>
          <Link
            href={ctaRoute}
            target={isBlogPage ? "_blank" : "_self"}
            className="btn btn-secondary"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
