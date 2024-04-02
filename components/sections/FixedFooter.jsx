"use client";
import Link from "next/link";

import { useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";

function FixedFooter() {
  const [showFooter, setShowFooter] = useState(true);

  const handleRevert = (ctx) => {
    ctx.revert();
    document.querySelector(".footer-fixed").style.transition =
      "transform 0.5s ease-in-out";
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-fixed", {
        yPercent: 100,
        onComplete: () => handleRevert(ctx),
        ease: "power4.out",
        delay: 3.5,
        duration: 2.5,
      });
    });
    return () => ctx.revert();
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
        setShowFooter(false);
      } else if (isScrollingUp || isScrolledToBottom) {
        setShowFooter(true);
      }

      lastScroll = currentScroll;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-screen h-[3rem] bg-[#fff] footer-fixed ${
        showFooter ? "show-footer" : "hide-footer"
      }`}
    >
      <div className="flex h-full justify-center items-center">
        <ul className="flex w-full h-full px-[1rem] md:px-[5rem] justify-between items-center text-lg">
          <Link href="#hero">
            <li className="foot-li">Back to top</li>
          </Link>
          <Link href="#About">
            <li className="foot-li">01 About</li>
          </Link>
          <Link href="#Projects">
            <li className="foot-li">02 Projects</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default FixedFooter;
