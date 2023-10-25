"use client"; // This is a client component 👈🏽

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Importing useRouter from next/router

export default function Layout({ children }) {
  const pathname = usePathname(); // Using useRouter to get the current path

  useEffect(() => {
    // Using useEffect to run a function every time the path changes
    if (pathname === "/") {
      // If the path is "/" (the homepage)...
      document.body.classList.add("home"); // ...add the class "home" to the body
    } else {
      // If the path is anything other than "/"...
      document.body.classList.remove("home"); // ...remove the class "home" from the body
    }
  }, [pathname]); // The function inside useEffect will run every time the path changes
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <Link href="/">
              <a>
                <Image
                  src="/logo.svg"
                  alt="MINI BLOG"
                  width={200}
                  height={50}
                />
              </a>
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="container">
          <p>
            Created by{" "}
            <a href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              MINI BLOG
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
