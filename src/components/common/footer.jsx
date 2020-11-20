import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__menu">
        <div className="footer__menu-section">
          <h5 className="footer__title">Download</h5>
          <nav className="app-link">
            <div className="app-link__item">
              <img src="/assets/svgs/u_apple-alt.svg" alt="apple" />
              <Link href="/">
                <a className="app-link__item-link">iOS App</a>
              </Link>
            </div>

            <div className="app-link__item">
              <img src="/assets/svgs/u_google-play.svg" alt="play" />
              <Link href="/">
                <a className="app-link__item-link">iOS App</a>
              </Link>
            </div>
          </nav>
        </div>

        <div>
          <h5 className="footer__title">Contact</h5>
          <nav className="app-link">
            <div className="app-link__item">
              <img src="/assets/svgs/fi_phone.svg" alt="apple" />
              <span className="app-link__item-link">015150198</span>
            </div>

            <div className="app-link__item">
              <img src="/assets/svgs/u_envelope-alt.svg" alt="play" />
              <span className="app-link__item-link">info@pharmafind.com</span>
            </div>

            <div className="app-link__item">
              <img src="/assets/svgs/fi_home.svg" alt="play" />
              <span className="app-link__item-link app-link__item-link--address">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                duis sem ut nunc.
              </span>
            </div>
          </nav>
        </div>
      </div>

      <div className="footer__horizontal-rule" />
      <div className="footer__copyright">PHARMAFIND 2020</div>
    </footer>
  );
}
