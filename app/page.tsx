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
