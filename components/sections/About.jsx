"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { useLayoutEffect } from "react";

function About() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-article .subtitle", {
        y: 100,
        ease: "power4.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: "#About",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".description", {
        opacity: 0,
        ease: "power4.out",
        duration: 1.5,
        delay: 1,
        scrollTrigger: {
          trigger: "#About",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="About">
      <article className="about-article">
        <div className="about-sub-container">
          <h1 className="subtitle">About</h1>
        </div>
        <div>
          <p className="description">
            I&apos;m a 22-year-old developer and UI/UX designer specializing in
            front-end development. With a track record of contributing to
            high-profile projects, I seamlessly navigate both front-end and
            back-end challenges. Fluent in English, German, and Spanish, my
            multilingual proficiency enhances global collaboration. Known for my
            proactive approach, I thrive in dynamic environments, solving
            problems creatively. Let&apos;s connect and bring innovation to your next
            project! 🚀
          </p>
        </div>
      </article>
    </section>
  );
}

export default About;
