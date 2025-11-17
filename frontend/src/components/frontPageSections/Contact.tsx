import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col gap-6 font-mono text-sm">
      <h2 className="text-2xl font-bold monokai-function">
        ## Get In Touch
      </h2>

      <div className="flex flex-col gap-4 p-4 bg-primary/5 border-l-4 border-primary/50 rounded">
        <p className="text-text/80 leading-relaxed">
          For inquiries, please contact me at:
        </p>
        <Link
          href="mailto:mdj.hermansen@gmail.com"
          className="monokai-string hover:monokai-property transition-colors text-base"
        >
          → mdj.hermansen@gmail.com
        </Link>
        <div className="text-text/80">
          → +47 482 94 974
        </div>

        <div className="text-text/80 text-sm mt-2">
          <p className="text-text/70">Location:</p>
          <p>Tormods gata 3A</p>
          <p>7030 TRONDHEIM, Norway</p>
        </div>

        <p className="text-text/80 leading-relaxed mt-2">
          Also check out my work on:
        </p>
        <Link
          href="https://github.com/madshermansen"
          className="monokai-property hover:monokai-string transition-colors"
        >
          → GitHub: @madshermansen
        </Link>
        <Link
          href="https://linkedin.com/in/mdhermansen"
          className="monokai-property hover:monokai-string transition-colors"
        >
          → LinkedIn: @mdhermansen
        </Link>
      </div>
    </div>
  );
}