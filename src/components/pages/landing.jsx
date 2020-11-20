import Layout from "../../layouts/default-layout";

export default function Landing() {
  return (
    <Layout>
      <section className="hero">
        <div>
          <h1>Find Genuine Pharmacy and Medications Nearby</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo risus,
            at a malesuada tellus vel nibh. Eleifend nunc, porta tortor metus,
            pharetra erat eu in vitae. Integer semper pretium, mattis vel, id
            orci.
          </p>
        </div>

        <div>
          <img src="/assets/svgs/hero_image.svg" alt="hero" />
        </div>
      </section>
    </Layout>
  );
}
