"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";

import "../styles/headerStyles.css";
import logo from "../../public/images/logo.png";

function Header() {
  const [showHeader, setShowHeader] = useState(true);

  const handleRevert = (ctx) => {
    ctx.revert();
    document.querySelector("header").style.transition =
      "transform 0.5s ease-in-out";
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("header", {
        yPercent: -100,
        ease: "power4.out",
        onComplete: () => handleRevert(ctx),
        delay: 3.5,
        duration: 2.5,
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    let lastScroll = 0;

    function handleScroll() {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      const isScrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      const isScrollingDown = currentScroll > lastScroll;
      const isScrollingUp = currentScroll < lastScroll;

      const isScrolling = isScrollingDown && !isScrolledToBottom;

      if (isScrolling) {
        setShowHeader(false);
      } else if (isScrollingUp || isScrolledToBottom) {
        setShowHeader(true);
      }

      lastScroll = currentScroll;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${showHeader ? "show" : "hide"}`}>
      <nav className="nav">
        <div className="hidden md:block">
          <span>
            Open to offers <br />
            and collaborations
          </span>
        </div>
        <div>
          <Image src={logo} alt="" className="w-[10rem]" />
        </div>
        <div>
          <span>
            Portfolio <br /> Vol 1.
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
