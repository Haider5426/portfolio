import Image from "next/image";
import portrait from "../../public/images/pfp-hero.jpg";

const TECH_TAGS = ["Next.js", "Python", "PostgreSQL"];

const STATS = [
  { num: "100+", label: "projects delivered" },
  { num: "5+", label: "years experience" },
  { num: "1", label: "live SaaS product" },
];

export default function Hero() {
  return (
    <section id="intro" className="hero" aria-labelledby="hero-headline">
      {/* Decorative aurora backdrop — must be a direct child of .hero, the
          CSS keys off that relationship for both positioning and stacking. */}
      <div className="hero-aurora" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>

      <div className="wrap hero-wrap">
        <div className="hero-grid">
          <div className="hero-tags reveal" data-reveal="1">
            {TECH_TAGS.map((tag) => (
              <span className="tech-pill" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <h1 id="hero-headline" className="headline reveal-motion">
            Hello, I&rsquo;m <span className="accent">Haider Khan</span>.
          </h1>

          <div className="hero-body reveal" data-reveal="3">
            <p className="lede">
              Turning raw data into software people actually use.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">
                See the work
              </a>
              <a href="#contact" className="btn">
                Get in touch
              </a>
            </div>
          </div>

          {/* Eager (it is above the fold) but deliberately NOT preloaded: the
              headline is the LCP element, and a high-priority image preload
              would compete with the font on the critical path.
              No entrance transform here (unlike the headline): on a busier
              main thread — e.g. with the aurora's blur+animation load — a
              transform on this large a box has enough time-to-run that
              Chrome's shift observer picks it up and scores it as CLS. */}
          <figure className="hero-portrait">
            <div className="portrait-frame">
              <Image
                src={portrait}
                alt="Haider Khan"
                sizes="(max-width: 900px) 168px, 280px"
                placeholder="blur"
                loading="eager"
                quality={62}
                className="portrait-img"
              />
            </div>
          </figure>
        </div>

        <div className="hero-stats reveal" data-reveal="5">
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat-num">{stat.num}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
