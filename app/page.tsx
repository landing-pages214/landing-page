"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="page">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-inner">
          <div className="logo">Kyle Goertzen</div>

          <nav>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero reveal">
        <div className="hero-badge">Professional Landing Page</div>

        <h1>
          Kyle
          <span>Goertzen</span>
        </h1>

        <p className="subtitle">
          Building modern digital experiences with clean design, reliable
          development, and personalized solutions.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="button primary">
            Get In Touch
          </a>

          <a href="#about" className="button secondary">
            Learn More
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="glass reveal">
        <h2>About</h2>

        <p>
          Kyle Goertzen provides professional services focused on modern web
          development, responsive design, and streamlined digital solutions.
          Whether you need a landing page, business website, or custom project,
          the goal is delivering clean and effective results.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services">
        <h2 className="section-title reveal">Services</h2>

        <div className="feature-grid">
          <div className="feature-card reveal">
            <div className="icon">💻</div>
            <h3>Web Development</h3>
            <p>Modern websites and applications built for performance.</p>
          </div>

          <div className="feature-card reveal">
            <div className="icon">🎨</div>
            <h3>UI / UX Design</h3>
            <p>Clean, responsive, and user-friendly interfaces.</p>
          </div>

          <div className="feature-card reveal">
            <div className="icon">⚡</div>
            <h3>Fast Performance</h3>
            <p>Optimized experiences across desktop and mobile devices.</p>
          </div>

          <div className="feature-card reveal">
            <div className="icon">🛠️</div>
            <h3>Custom Solutions</h3>
            <p>Tailored solutions designed around your goals.</p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
<section id="work">
  <h2 className="section-title reveal">Featured Projects</h2>

  <p className="portfolio-subtitle reveal">
    A selection of websites, landing pages, and web applications I've designed
    and developed.
  </p>

  <div className="portfolio-grid">

    <a
      href="https://landing-pages214.github.io/page"
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-card reveal"
    >
      <img
        src="https://image.thum.io/get/width/1200/https://landing-pages214.github.io/page"
        alt="Business Landing Page"
      />
      <div className="portfolio-content">
        <span className="tag">Landing Page</span>
        <h3>Business Landing Page</h3>
        <p>Modern responsive website focused on conversion and clean design.</p>
      </div>
    </a>

    <a
      href="https://landing-pages214.github.io/page1"
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-card reveal"
    >
      <img
        src="https://image.thum.io/get/width/1200/https://landing-pages214.github.io/page1"
        alt="Corporate Website"
      />
      <div className="portfolio-content">
        <span className="tag">Corporate</span>
        <h3>Corporate Website</h3>
        <p>Professional business website with modern layout and branding.</p>
      </div>
    </a>

    <a
      href="https://landing-pages214.github.io/page2"
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-card reveal"
    >
      <img
        src="https://image.thum.io/get/width/1200/https://landing-pages214.github.io/page2"
        alt="Marketing Website"
      />
      <div className="portfolio-content">
        <span className="tag">Marketing</span>
        <h3>Marketing Website</h3>
        <p>Built to showcase services and generate customer engagement.</p>
      </div>
    </a>

    <a
      href="https://landing-pages214.github.io/curly-octo-broccoli"
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-card reveal"
    >
      <img
        src="https://image.thum.io/get/width/1200/https://landing-pages214.github.io/curly-octo-broccoli"
        alt="Creative Project"
      />
      <div className="portfolio-content">
        <span className="tag">Creative</span>
        <h3>Creative Web Project</h3>
        <p>Custom responsive design with a unique visual identity.</p>
      </div>
    </a>

    <a
      href="https://landing-pages214.github.io/Gym"
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-card reveal"
    >
      <img
        src="https://image.thum.io/get/width/1200/https://landing-pages214.github.io/Gym"
        alt="Gym Website"
      />
      <div className="portfolio-content">
        <span className="tag">Fitness</span>
        <h3>Gym Website</h3>
        <p>Membership-focused landing page with strong call-to-action design.</p>
      </div>
    </a>

    <a
      href="https://landing-pages214.github.io/Tv"
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-card reveal"
    >
      <img
        src="https://image.thum.io/get/width/1200/https://landing-pages214.github.io/Tv"
        alt="Streaming Platform"
      />
      <div className="portfolio-content">
        <span className="tag">Entertainment</span>
        <h3>Streaming Platform UI</h3>
        <p>Modern streaming-inspired interface with immersive layouts.</p>
      </div>
    </a>

    <a
      href="https://landing-pages214.github.io/Kyle20000-landing-page"
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-card reveal"
    >
      <img
        src="https://image.thum.io/get/width/1200/https://landing-pages214.github.io/Kyle20000-landing-page"
        alt="Portfolio"
      />
      <div className="portfolio-content">
        <span className="tag">Portfolio</span>
        <h3>Personal Portfolio</h3>
        <p>Professional personal website showcasing services and projects.</p>
      </div>
    </a>

    <a
      href="https://landing-page-nine-kappa-54.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-card reveal"
    >
      <img
        src="https://image.thum.io/get/width/1200/https://landing-page-nine-kappa-54.vercel.app/"
        alt="Landing Page"
      />
      <div className="portfolio-content">
        <span className="tag">Modern UI</span>
        <h3>Vercel Landing Page</h3>
        <p>Fast-loading modern website deployed on Vercel infrastructure.</p>
      </div>
    </a>

    <a
      href="https://wallet-landing-one.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-card reveal"
    >
      <img
        src="https://image.thum.io/get/width/1200/https://wallet-landing-one.vercel.app/"
        alt="Wallet App"
      />
      <div className="portfolio-content">
        <span className="tag">FinTech</span>
        <h3>Wallet Landing Page</h3>
        <p>Fintech-inspired product website with premium presentation.</p>
      </div>
    </a>

    <a
      href="https://www.friendcodeforum.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-card reveal"
    >
      <img
        src="https://image.thum.io/get/width/1200/https://www.friendcodeforum.com/"
        alt="Forum"
      />
      <div className="portfolio-content">
        <span className="tag">Community</span>
        <h3>Friend Code Forum</h3>
        <p>Online community platform focused on discussion and engagement.</p>
      </div>
    </a>
   </div>
 </section>

      {/* CONTACT */}
      <section id="contact" className="glass reveal">
        <h2>Contact</h2>

        <div className="contact-info">
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:2509467004">250-946-7004</a>
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:kgoertzen14@gmail.com">
              kgoertzen14@gmail.com
            </a>
          </p>
        </div>

        <form
          action="https://formspree.io/f/xvzdrwkg"
          method="POST"
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
          />

          <button type="submit" className="button primary">
            Send Message
          </button>
        </form>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <h2>Let’s Work Together</h2>

        <p>
          Reach out today to discuss your project, ideas, or business needs.
        </p>

        <a href="#contact" className="button primary large">
          Contact Kyle
        </a>
      </section>

      {/* FOOTER */}
      <footer className="reveal">
        © {new Date().getFullYear()} Kyle Goertzen. All rights reserved.
      </footer>
    </main>
  );
}
