// pages/index.js
import Head from "next/head";
import Hero from "@/components/Hero";
import ActivityCadence from "@/components/ActivityCadence";
import FeaturedBuild from "@/components/FeaturedBuild";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { getContributionActivity } from "@/lib/github";

export async function getStaticProps() {
  const activity = await getContributionActivity();

  return {
    props: { activity },
    revalidate: 3600,
  };
}

const Home = ({ activity }) => {
  return (
    <>
      <Head>
        <title>Izsal Qurlinas Afandi — Fullstack &amp; Backend Engineer</title>
        <meta
          name="description"
          content="Experienced Fullstack Developer with strong capabilities in React, Next.js, React Native, Golang, and cloud technologies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <div className="space-y-6">
        <div className="reveal" style={{ "--delay": "0.02s" }}>
          <Hero />
        </div>

        <div className="reveal" style={{ "--delay": "0.08s" }}>
          <ActivityCadence activity={activity} />
        </div>

        <div className="reveal" style={{ "--delay": "0.14s" }}>
          <FeaturedBuild />
        </div>

        <div className="reveal" style={{ "--delay": "0.20s" }}>
          <Experience />
        </div>

        <div className="reveal" style={{ "--delay": "0.26s" }}>
          <Projects />
        </div>

        <div className="reveal" style={{ "--delay": "0.32s" }}>
          <Skills />
        </div>

        <div className="reveal" style={{ "--delay": "0.38s" }}>
          <Education />
        </div>

        <div className="reveal" style={{ "--delay": "0.44s" }}>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
