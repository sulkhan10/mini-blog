"use client"; // This is a client component 👈🏽

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Importing useRouter from next/router
import Navbar from "@/components/Navbar";

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
      <Navbar />
      <div>
        HOME PAGE
      </div>
    </main>
  );
}
