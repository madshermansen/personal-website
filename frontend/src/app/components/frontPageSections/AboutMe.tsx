import Link from "next/link";

export default function AboutMe() {
  return (
    <div>
      <h1 id="about" className="font-semibold">
        ABOUT
      </h1>

      <p>
        Hey there! I'm Mads, a tech enthusiast currently diving into my Masters
        in Software Engineering at NTNU. I'm all about learning new things and
        collaborating on exciting projects, and I've found my sweet spot in
        full-stack development, especially on the mobile side. I'm currently
        contributing to the mobile development efforts at the start-up
        <Link href="https://ssesh.no" className="font-bold text-accent"> ssesh</Link>. When I'm not coding or
        studying, you'll likely find me hanging out with friends or pursuing my
        hobbies like calisthenics.
      </p>
    </div>
  );
}
