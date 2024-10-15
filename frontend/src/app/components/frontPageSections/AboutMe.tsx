import Link from "next/link";

export default function AboutMe() {
  return (
    <div>
      <h1 id="about" className="font-semibold text-2xl">
        ABOUT
      </h1>
      <hr className="border-accent border-2" />

      <p>
        Hey there! I&apos;m Mads {"(or 金羝威)"}, a tech enthusiast currently
        diving into my Masters in Software Engineering at NTNU. I&apos;m all
        about learning new things and collaborating on exciting projects, and
        I&apos;ve found my sweet spot in full-stack development, especially on
        the mobile side. I&apos;m currently contributing to the mobile
        development efforts at the start-up
        <Link href="https://ssesh.no" className="font-bold text-accent">
          {" "}
          ssesh
        </Link>
        . When I&apos;m not coding or studying, you&apos;ll likely find me
        hanging out with friends or doing some calisthenics.
      </p>
    </div>
  );
}
