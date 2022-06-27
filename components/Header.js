import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [{ width, height }, setViewPort] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = (e) => {
    setViewPort({
      width: e.target.innerWidth,
      height: e.target.innerHeight,
    });
  };

  useEffect(() => {
    setViewPort({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="w-full h-screen relative bg-black/50 overflow-hidden">
        <Image
          src={"/images/h1.jpg"}
          layout="fill"
          className="object-cover -z-10"
        />
        <div className="flex items-center justify-center h-full flex-col">
          <h1 className="text-gray-100/90 tracking-widest text-4xl sm:text-7xl text-center font-smooch">
            Putri Nadia
          </h1>
          <h1 className="text-gray-100/90 tracking-widest text-4xl sm:text-7xl text-center mt-2 font-smooch">
            &
          </h1>
          <h1 className="text-gray-100/90 tracking-widest text-4xl sm:text-7xl text-center mt-2 font-smooch">
            Muhammad Badrun
          </h1>
          <h1 className="text-gray-100/90 tracking-widest text-xl sm:text-2xl text-center mt-6 md:mt-10 font-smooch">
            08/02/2024
          </h1>
        </div>

        <div className="absolute right-0 top-0">
          <Image
            src={"/images/s.png"}
            width={width < 640 ? 250 : 400}
            height={width < 640 ? 250 : 400}
          />
        </div>

        <div
          className={`absolute -left-8 ${
            width < 640 ? "bottom-0" : "bottom-16"
          } rotate-12`}
        >
          <Image
            src={"/images/p.png"}
            width={width < 640 ? 300 : 400}
            height={width < 640 ? 300 : 400}
          />
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 text-gray-100/90 animate-bounce"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
