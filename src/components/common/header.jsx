import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <a>
            <img src="/assets/svgs/logo.svg" alt="logo" />
          </a>
        </Link>

        <button
          className="header__menu"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <img
            src={
              showMobileMenu
                ? "/assets/svgs/u_multiply.svg"
                : "/assets/svgs/fi_menu.svg"
            }
            alt="menu"
          />
        </button>
      </div>

      <nav className={`navigation ${showMobileMenu ? "d-block" : ""}`}>
        <ul className="navigation__menu">
          <li className="navigation__menu-item">
            <Link href="/">
              <a className="navigation__menu-link">Login</a>
            </Link>
          </li>

          <li className="navigation__menu-item">
            <Link href="/">
              <a className="navigation__menu-link navigation__menu-link--sigin">
                Signin
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
