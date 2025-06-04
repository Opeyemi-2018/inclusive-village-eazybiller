"use client";

import Image from "next/image";
import { VscDebugDisconnect } from "react-icons/vsc";
import { useEffect, useRef } from "react";

const SectionFour = () => {
  const clients = [
    "/images/edupay.jpg",
    "/images/edupay.jpg",
    "/images/edupay.jpg",
    "/images/edupay.jpg",
    "/images/edupay.jpg",
    "/images/sayswitch.jpg",
    "/images/herconomy.jpg",
    "/images/epiq.jpg",
    "/images/duplo.jpg",
    "/images/edupay.jpg",
    "/images/edupay.jpg",
    "/images/edupay.jpg",
    "/images/edupay.jpg",
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    const speed = 1;
    let position = 0;

    const animate = () => {
      position -= speed;
      if (position <= -container.scrollWidth / 2) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 space-y-8 px-3 overflow-hidden">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-3 items-center font-bold justify-between border border-gray-400 lg:rounded-full rounded-md max-w-[500px] mx-auto py-1 px-3">
        <div className="text-gray-600 dark:text-gray-400">
          Our Globally <span className="text-[#64ec9d]">20K+</span> Clients.
        </div>
        <VscDebugDisconnect size={25} />
        <div className="text-gray-600 dark:text-gray-400">
          Our Happy Clients <span className="text-[#64ec9d]">90%+</span>.
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex items-center justify-start lg:gap-6 gap-2 w-max py-4"
        >
          {clients.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={logo}
                alt="client logo"
                width={100}
                height={100}
                className="object-contain h-16 w-36 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
