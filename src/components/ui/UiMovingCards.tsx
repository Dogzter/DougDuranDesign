"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    header: string;
    body: React.ReactElement;
    text: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative max-w-[1200px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-2 py-3 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="min-w-[150px] max-w-[350px] relative rounded-2xl flex-shrink-0 border-zinc-600 px-5 py-3"
            /* style={{background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)" }} */
            style={{background: "rgba(255,255,255,0.1)"}}
            key={item.header}
          >
            <blockquote>
              <div aria-hidden="true" className="text-center user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]" />
              <h3 className="relative text-center text-xl bg-gradient-to-l antialiased from-red-800 via-yellow-200 to-orange-500 text-transparent bg-clip-text">
                {item.header}
              </h3>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-2">
                  <span className="text-sm text-gray-400">
                    {item.body}
                  </span>
                  <span className="text-sm text-gray-400 text-center">
                    {item.text}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};