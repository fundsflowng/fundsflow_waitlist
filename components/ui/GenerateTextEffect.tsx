"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  time,
  diff,
  className,
}: {
  words: string;
  className?: string;
  diff?: boolean;
  time: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(time),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${
                diff && idx === 0
                  ? "text-primain_blue opacity-0"
                  : "dark:text-white text-black opacity-0"
              }`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className={`dark:text-white font-mullish text-main_black leading-snug tracking-wide`}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
