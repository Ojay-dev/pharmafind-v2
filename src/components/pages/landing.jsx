import Link from "next/link";
import Layout from "../../layouts/default-layout";

export default function Landing() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero__text-section">
          <h1 className="hero__text">
            Find Genuine Pharmacy and Medications Nearby
          </h1>
          <p className="hero__subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo risus,
            at a malesuada tellus vel nibh. Eleifend nunc, porta tortor metus,
            pharetra erat eu in vitae. Integer semper pretium, mattis vel, id
            orci.
          </p>
        </div>

        <div className="hero__image-section">
          <img
            src="/assets/svgs/hero_image.svg"
            alt="hero"
            className="hero__image"
          />
        </div>
      </section>

      <section className="search-area">
        <form className="search-area__form">
          <input
            type="text"
            placeholder="Enter prescribed drug name"
            className="search-area__med-keyword"
          />

          <div className="search-area__location-field">
            <input
              type="text"
              placeholder="Location name"
              className="search-area__location-input"
            />
            <img src="/assets/svgs/u_map-marker.svg" alt="" />
          </div>

          <input type="submit" value="Search" className="search-area__submit" />
        </form>
      </section>

      <section className="description">
        <div className="description__text-area">
          <h2 className="description__text">How it Works</h2>
          <p className="description__subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            vestibulum nunc ut neque, enim. Tellus.
          </p>
        </div>

        <div className="steps">
          <div>
            <img
              src="/assets/svgs/description_illustration.svg"
              alt="illustration"
              className="steps__image"
            />
          </div>

          <div className="steps__text-area">
            <div className="steps__list">
              <span className="steps__number">1</span>
              <div className="steps__description">
                <h3 className="steps__description-text">
                  Search for pharmacy to get genuine medications
                </h3>
                <p className="steps__description-subtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultrices nisi nisl risus lobortis.
                </p>
              </div>
            </div>

            <div className="steps__list">
              <span className="steps__number">2</span>
              <div className="steps__description">
                <h3 className="steps__description-text">
                  See pharmacy in your prefered Locations
                </h3>
                <p className="steps__description-subtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultrices nisi nisl risus lobortis.
                </p>
              </div>
            </div>

            <div className="steps__list">
              <span className="steps__number">3</span>
              <div className="steps__description">
                <h3 className="steps__description-text">
                  See available prescribe medications and cost
                </h3>
                <p className="steps__description-subtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultrices nisi nisl risus lobortis.
                </p>
              </div>
            </div>

            <div className="steps__list">
              <span className="steps__number">4</span>
              <div className="steps__description">
                <h3 className="steps__description-text">
                  Make neccessary order and get delivery to your Location
                </h3>
                <p className="steps__description-subtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultrices nisi nisl risus lobortis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trusted-org">
        <h4 className="trusted-org__text">Trusted by :</h4>
        <div className="trusted-org__logo">
          <img
            src="/assets/images/eHealth_Africa.png"
            alt="eHealth"
            className="trusted-org__logo--image"
          />
          <img
            src="/assets/images/pcn_logo_circles.png"
            alt="PCN"
            className="trusted-org__logo--image"
          />
          <img
            src="/assets/images/WHO.png"
            alt="who"
            className="trusted-org__logo--image"
          />
          <img
            src="/assets/images/image_489718966.png"
            alt="medical and dental council"
            className="trusted-org__logo--image"
          />
        </div>
      </section>

      <section className="CTA-section">
        <h4 className="CTA-section__text">Get More Access for Your Pharmacy</h4>
        <p className="CTA-section__subtext">
          Find out why over 20,000 Pharmacy trust PHARMAFIND
        </p>
        <div className="CTA-section__link-container">
          <Link href="/">
            <a className="CTA-section__link">Signup your Pharmacy</a>
          </Link>
        </div>
      </section>

      <section className="testimonial">
        <div className="testimonial__box">
          <p className="testimonial__text">
            Really easy to use and customize. easy to understand. PHARMAFIND
            helped me with find my way around a good pharmacy, a good service!
            Thank you very much!
          </p>

          <div className="recipient">
            <img
              src="/assets/images/Ellipse.png"
              alt=""
              className="recipient__image"
            />
            <span className="recipient__name">Joke Bello</span>
          </div>
        </div>

        {/* <div className="testimonial__box">
          <p className="testimonial__text">
            Really easy to use and customize. easy to understand. PHARMAFIND
            helped me with find my way around a good pharmacy, a good service!
            Thank you very much!
          </p>

          <div className="recipient">
            <img
              src="/assets/images/Ellipse.png"
              alt=""
              className="recipient__image"
            />
            <span className="recipient__name">Joke Bello</span>
          </div>
        </div>

        <div className="testimonial__box">
          <p className="testimonial__text">
            Really easy to use and customize. easy to understand. PHARMAFIND
            helped me with find my way around a good pharmacy, a good service!
            Thank you very much!
          </p>

          <div className="recipient">
            <img
              src="/assets/images/Ellipse.png"
              alt=""
              className="recipient__image"
            />
            <span className="recipient__name">Joke Bello</span>
          </div>
        </div> */}
      </section>
    </Layout>
  );
}
