import { useState } from "react";
import KZ from "../public/KZ.svg";

import styles from "../styles/Hero.module.css";
import Image from "next/image";
export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-8 lg:px-[180px] xs:px-[40px]">
      <a href="/">
        <Image src={KZ} alt="KZ Logo" width={50} />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 hover:scale-110"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8  bg-yellow-400"></span>
            <span className="block h-0.5 w-8  bg-yellow-400"></span>
            <span className="block h-0.5 w-8  bg-yellow-400"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8 "
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-yellow-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] font-black text-yellow-300 z-50">
              <li className=" my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className=" my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className=" my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
              <li className=" my-8 uppercase">
                <a href="https://www.instagram.com/kauanzajac/">Instagram</a>
              </li>
              <li className=" my-8 uppercase">
                <a href="https://www.linkedin.com/in/kauan-zajac-12bb761a1/">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-[12px]">
          <li>
            <a href="#" class={styles.navLinks}>
              <span class={styles.socialMediaLinks}>Home</span>
            </a>
          </li>
          <li>
            <a href="#" class={styles.navLinks}>
              <span class={styles.socialMediaLinks}>Projects</span>
            </a>
          </li>
          <li>
            <a href="#" class={styles.navLinks}>
              <span class={styles.socialMediaLinks}>Contact</span>
            </a>
          </li>
          <li>
            <a href="#" class={styles.navLinks}>
              <span class={styles.socialMediaLinks}>About</span>
            </a>
          </li>
        </ul>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 80vh;
          top: 0;
          left: 0;
          background: #7e22ce;
          border-radius: 20px;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
      <div class="DESKTOP-MENU hidden  items-center lg:flex lg:flex-col  gap-5  lg:pt-10  sm:pt-3 text-[12px]">
        <a href="https://www.instagram.com/kauanzajac/" class={styles.navLinks}>
          <span class={styles.linkTop}>Instagram</span>
          <span class={styles.linkBottom}>Instagram</span>
        </a>
        <a
          href="https://www.linkedin.com/in/kauan-zajac-12bb761a1/"
          class={styles.navLinks}
        >
          <span class={styles.linkTop}>Linkedin</span>
          <span class={styles.linkBottom}>Linkedin</span>
        </a>
      </div>
    </div>
  );
}
