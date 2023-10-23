"use client"; // This is a client component 👈🏽

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Importing useRouter from next/router

export default function Home() {
  const pathname = usePathname(); // Using the useRouter hook

  console.log("Current pathname:", pathname);

  useEffect(() => {
    const handleActiveLinks = () => {
      const currentPath = pathname;
      const menuLinks = document.querySelectorAll(".menu__link");

      menuLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
          link.classList.add("menu__link--active");
        } else {
          link.classList.remove("menu__link--active");
        }
      });
    };

    // Run the function when the component mounts
    handleActiveLinks();

    // Add a listener for route changes to update active links
    // router.events.on("routeChangeComplete", handleActiveLinks);

    // // Cleanup the listener when the component unmounts
    // return () => {
    //   router.events.off("routeChangeComplete", handleActiveLinks);
    // };
  }, [pathname]);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-white via-white dark:from-black dark:via-black bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://www.textures4photoshop.com/tex/thumbs/seamless-notebook-paper-texture-free-thumb36.jpg")',
      }}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between  text-sm lg:flex">
        <p>
          {" "}
          HALO&nbsp;
          {/* <code className=" font-bold">src/app/page.tsx</code> */}
        </p>

        <div className="flex gap-6">
          <Link href="/about" className="menu__link">
            About
            <svg viewBox="0 0 152.9 43.4">
              <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
            </svg>
          </Link>
          <Link href="/" className="menu__link">
            Home
            <svg viewBox="0 0 152.9 43.4">
              <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
            </svg>
          </Link>

          {/* Add other menu items here */}
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link href="/about">
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              // className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
      </div>
        <div >
          ABOUT PAGE
        </div>
    </main>
  );
}
