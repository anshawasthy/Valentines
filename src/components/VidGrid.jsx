import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const VidGrid = () => {
  const [startAnim, setStartAnim] = useState(false);
  const [showAngry, setShowAngry] = useState(false);

  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  /* -------------------------
     Intersection Observer
  --------------------------*/
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnim(true);
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* -------------------------
     Show Image After 52 sec
  --------------------------*/
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAngry(true);
    }, 52 * 1000);

    return () => clearTimeout(timer);
  }, []);

  /* -------------------------
     Confetti Function
  --------------------------*/
  const triggerConfetti = () => {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["heart"],
      colors: ["#FFC0CB", "#FF69B4", "#FF1493", "#C71585"],
    };

    confetti({ ...defaults, particleCount: 50, scalar: 2 });
    confetti({ ...defaults, particleCount: 25, scalar: 3 });
    confetti({ ...defaults, particleCount: 10, scalar: 4 });
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="VidGrid"
        className={`min-h-screen px-4 relative ${
          startAnim ? "blur-animate" : ""
        }`}
      >
        <div className="container relative top-40 flex flex-col items-center z-10 bg-white/30 backdrop-blur-md border w-[50vw] border-white/30 rounded-lg p-6 max-w-4xl mx-auto shadow-lg">
          
          <div className="bg-pink-400 overflow-x-auto mask-fade-all no-scrollbar w-[50vw]">
            <video
              ref={videoRef}
              className="mask-fade-all w-full rounded-lg"
              playsInline
              preload="auto"
              src="/vids/bu.MP4"
            />
          </div>
        </div>
      </section>

      {/* Angry Bubu Image */}
      {showAngry && (
        <img
          src="/IMG_9009.png"
          alt="angry bubu"
          onMouseEnter={triggerConfetti}
          className="
            fixed bottom-10 right-10
            w-32 cursor-pointer
            transition-transform duration-300
            hover:scale-125
            drop-shadow-xl
          "
        />
      )}
    </>
  );
};

export default VidGrid;