"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

import { useLayoutEffect } from "react";

function Footer() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".idea", {
        y: 250,
        ease: "power4.out",
        delay: 1,
        duration: 2.5,
        scrollTrigger: {
          trigger: ".footer",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".container-email", {
        opacity: 0,
        ease: "power4.out",
        duration: 2.5,
        delay: 2,
        scrollTrigger: {
          trigger: ".footer",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleEmail = () => {
    window.open("mailto: josecheverri47@gmail.com");
  }

  return (
    <section className="footer">
      <div className="w-full h-full flex flex-col justify-center items-center ">
        <div className="container-title-footer">
          <h1 className="subtitle uppercase idea">Have an idea?</h1>
        </div>
        <div className="text-center text-3xl container-email">
          <h2 className="">Drop me an email:</h2>
          <h2 onClick={handleEmail}>josecheverri47@gmail.com</h2>
        </div>
      </div>
    </section>
  );
}

export default Footer;
