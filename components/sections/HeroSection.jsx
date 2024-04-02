'use client'
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { useLayoutEffect } from "react";

function HeroSection() {

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".title-center-container", {
        opacity: 0,
        y: 500,
        ease: "power4.out",
        duration: 2.5,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: "#hero",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      })
      gsap.from(".title-hero.left", {
        y: 250,
        ease: "power4.out",
        duration: 2.5,
        delay: 1,
        skewY: 4,
        scrollTrigger: {
          trigger: "#hero",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
      gsap.from(".title-hero.right", {
        y: 250,
        ease: "power4.out",
        delay: 1,
        duration: 2.5,
        skewY: 10,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: "#hero",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".title-hero.center", {
        y: 250,
        ease: "power4.out",
        duration: 2.5,
        delay: 2,
        skewY: 10,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: "#hero",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
      gsap.from(".title-hero.c-right", {
        y: 250,
        ease: "power4.out",
        duration: 2.5,
        delay: 2,
        skewY: 10,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: "#hero",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".divider", {
        width: 0,
        ease: "power4.out",
        duration: 2.5,
        delay: 1,
        scrollTrigger: {
          trigger: "#hero",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
    });
    return () => ctx.revert();

  }, []);
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="title-top-container">
          <div className="container">
            <h1 className="title-hero left">UI/UX</h1>
          </div>
          <div className="container">
            <h1 className="title-hero right">Designer</h1>
          </div>
        </div>
        <div className="title-center-container">
          <div className="container-divider">
            <span className="divider"></span>
            <h1 className="title-hero-divider">&</h1>
            <span className="divider"></span>
          </div>
        </div>
        <div className="title-bottom-container">
          <div className="container center">
            <h1 className="title-hero center">Software</h1>
          </div>
          <div className="container c-right">
            <h1 className="title-hero c-right">Engineer</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
