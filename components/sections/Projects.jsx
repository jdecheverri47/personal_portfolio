"use client";

import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

import weblabMockup from "@/public/images/weblab_mockup.png";
import payMockup from "@/public/images/pay&park_mockup.png";
import tutarjetaMockup from "@/public/images/tutarjetadigital.png";

gsap.registerPlugin(ScrollTrigger);
import { useLayoutEffect, useRef, useEffect } from "react";

function Projects() {
  const textOne = useRef(null);
  const textTwo = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.set(textTwo.current, {
      left: textTwo.current.getBoundingClientRect().width,
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.set(textOne.current, { xPercent: xPercent });
    gsap.set(textTwo.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent += 0.03 * direction;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".weblabs-container h1", {
        y: 250,
        ease: "power4.out",
        duration: 3.5,
        scrollTrigger: {
          trigger: ".weblabs-main",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".weblab_mockup_img", {
        opacity: 0,
        // x: -400,
        ease: "power4.out",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".weblabs-main",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".project.one p", {
        opacity: 0,
        ease: "power4.out",
        duration: 2.5,
        delay: 1.5,
        scrollTrigger: {
          trigger: ".weblabs-main",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".pay_park_img", {
        opacity: 0,
        ease: "power4.out",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".pay-main",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".pay-container h1", {
        y: 250,
        ease: "power4.out",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".pay-main",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".project.two p", {
        opacity: 0,
        ease: "power4.out",
        duration: 2.5,
        delay: 1,
        scrollTrigger: {
          trigger: ".pay-main",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".ieConnect_img", {
        opacity: 0,
        ease: "power4.out",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".tutarjeta-container",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".tutarjeta-container h1", {
        y: 250,
        ease: "power4.out",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".tutarjeta-container",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".project.three p", {
        opacity: 0,
        ease: "power4.out",
        duration: 2.5,
        delay: 1,
        scrollTrigger: {
          trigger: ".tutarjeta-container",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="Projects" className="">
      <div className="title_projects_container">
        <div className="title_projects overflow-x-hidden">
          <h2 className="uppercase slider" ref={textOne}>
            • My Projects • Selected Projects&nbsp;{" "}
          </h2>
          <h2 className="uppercase slider" ref={textTwo}>
            • My Projects • Selected Projects&nbsp;{" "}
          </h2>
        </div>
      </div>

      <article className="projects_container">
        <div className="weblabs_project">
          <div className="w-fit h-full flex flex-col md:flex-row justify-center items-center gap-4 mt-[2rem] md:mt-[5rem] mx-auto weblabs-main ">
            <Image
              src={weblabMockup}
              alt=""
              className="w-[95%] h-[95%] lg:w-1/2 lg:h-1/2 weblab_mockup_img"
            />

            <div className="xs:w-[25rem] xs:h-[15rem] px-[1rem] sm:w-[35rem] sm:h-[30rem] sm:pl-[2rem] ">
              <div className="weblabs-container overflow-hidden mt-10">
                <h1 className="subtitle">WebLabs</h1>
              </div>

              <div className="project one">
                <p className="text-xl font-normal pt-5">
                  Explore the digital realm with Weblabs, my software
                  development company that pushes boundaries and redefines
                  online experiences. Our website, crafted with the dynamic trio
                  of Three.js, Next.js, and GSAP, reflects our commitment to
                  innovation. Dive into a world where cutting-edge technology
                  meets seamless user interfaces, showcasing our expertise in
                  creating captivating digital solutions. At Weblabs, we
                  transform ideas into immersive online realities. Discover the
                  future of web development with us! 🚀✨
                </p>
              </div>
            </div>
          </div>

          <div className="w-fit h-full flex flex-col justify-center items-center gap-4 mt-[2rem] md:mt-[5rem] mx-auto pay-main md:flex-row-reverse">
            <Image
              src={payMockup}
              alt=""
              className="w-[95%] h-[95%] lg:w-1/2 lg:h-1/2 mt-5 pay_park_img"
            />

            <div className="xs:w-[25rem] xs:h-[15rem] px-[1rem] sm:w-[35rem] sm:h-[30rem] sm:pl-[2rem]">
              <div className="overflow-hidden pay-container  mt-10">
                <h1 className="subtitle">Pay&Park</h1>
              </div>

              <div className="project two">
                <p className="text-xl font-normal pt-5">
                  Introducing Pay&Park, a groundbreaking mobile application
                  revolutionizing parking systems for both iOS and Android
                  platforms. Developed using Kotlin and Swift, our app
                  seamlessly optimizes parking processes. With an advanced
                  architecture built on Spring Boot, Pay&Park integrates
                  cutting-edge technologies such as AI-powered camera
                  surveillance for efficient recognition and object tracking.
                  Experience the future of smart parking, where innovation meets
                  practicality, and every park becomes a seamless experience.
                  🌐🤖🅿️
                </p>
              </div>
            </div>
          </div>

          <div className="w-fit h-full flex flex-col md:flex-row justify-center items-center gap-4 mt-[4rem] md:mt-[5rem] mx-auto ">
            <Image
              src={tutarjetaMockup}
              alt=""
              className="w-1/2 h-1/2 md:w-[30%] md:h-[30%] md:pr-[2rem] ieConnect_img"
            />

            <div className="xs:w-[25rem] xs:h-[15rem] px-[1rem] sm:w-[35rem] sm:h-[30rem] sm:pl-[2rem] mt-6">
              <div className="overflow-hidden tutarjeta-container">
                <h1 className="subtitle">MiTarjetaDigital</h1>
              </div>

              <div className="project three">
                <p className="text-xl font-normal pt-5">
                  MiTarjetaDigital is your go-to mobile application for
                  efficient contact management and streamlined data exchange.
                  With a user-friendly interface, the app generates QR codes,
                  allowing you to effortlessly save and exchange contact
                  information with your vendors. Say goodbye to traditional
                  business cards – embrace a centralized and fluid data exchange
                  process between clients and vendors. Simplify your networking
                  experience with MiTarjetaDigital, where connections are just a
                  scan away. 🤝🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Projects;
