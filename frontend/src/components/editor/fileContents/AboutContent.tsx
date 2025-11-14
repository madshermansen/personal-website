import Link from "next/link";

export default function AboutContent() {
  return (
    <div className="font-mono text-sm leading-relaxed">
      <div className="mb-2">
        <span className="text-accent">import</span>{" "}
        <span className="text-secondary">{"{ Developer }"}</span>{" "}
        <span className="text-accent">from</span>{" "}
        <span className="text-primary">'@types/portfolio'</span>
        <span className="text-text/70">;</span>
      </div>

      <div className="mb-2 mt-4">
        <span className="text-accent">export const</span>{" "}
        <span className="text-secondary">about</span>{" "}
        <span className="text-text/70">= ():</span>{" "}
        <span className="text-secondary">Developer</span>{" "}
        <span className="text-text/70">{"=> {"}</span>
      </div>

      <div className="ml-4">
        <div className="mb-2">
          <span className="text-text/70">return {"{"}</span>
        </div>

        <div className="ml-4">
          <div className="mb-2">
            <span className="text-accent">name</span>
            <span className="text-text/70">: </span>
            <span className="text-primary">"Mads Hermansen"</span>
            <span className="text-text/70">,</span>
          </div>

          <div className="mb-2">
            <span className="text-accent">role</span>
            <span className="text-text/70">: </span>
            <span className="text-primary">"Full Stack Developer"</span>
            <span className="text-text/70">,</span>
          </div>

          <div className="mb-4">
            <span className="text-accent">bio</span>
            <span className="text-text/70">: </span>
            <span className="text-primary">"Tech enthusiast diving into Masters in Software Engineering at NTNU"</span>
            <span className="text-text/70">,</span>
          </div>

          <div className="mb-2">
            <span className="text-accent">currentWork</span>
            <span className="text-text/70">: </span>
            <span className="text-primary">"Contributing to mobile development at "</span>
            <span className="text-text/70"> + </span>
            <Link href="https://ssesh.no" className="text-primary hover:text-accent transition-colors underline">
              "ssesh"
            </Link>
            <span className="text-text/70">,</span>
          </div>

          <div className="mb-4">
            <span className="text-accent">passion</span>
            <span className="text-text/70">: </span>
            <span className="text-primary">"Learning new things, collaborating on exciting projects, full-stack & mobile development"</span>
            <span className="text-text/70">,</span>
          </div>

          <div className="mb-2">
            <span className="text-accent">skills</span>
            <span className="text-text/70">: {"{"}</span>
          </div>

          <div className="ml-4 mb-2">
            <div className="mb-1">
              <span className="text-accent">frontend</span>
              <span className="text-text/70">: [</span>
              <span className="text-primary">"React"</span>
              <span className="text-text/70">, </span>
              <span className="text-primary">"Next.js"</span>
              <span className="text-text/70">, </span>
              <span className="text-primary">"TypeScript"</span>
              <span className="text-text/70">],</span>
            </div>
            <div className="mb-1">
              <span className="text-accent">backend</span>
              <span className="text-text/70">: [</span>
              <span className="text-primary">"Node.js"</span>
              <span className="text-text/70">, </span>
              <span className="text-primary">"Express"</span>
              <span className="text-text/70">, </span>
              <span className="text-primary">"MySQL"</span>
              <span className="text-text/70">],</span>
            </div>
            <div>
              <span className="text-accent">mobile</span>
              <span className="text-text/70">: [</span>
              <span className="text-primary">"React Native"</span>
              <span className="text-text/70">, </span>
              <span className="text-primary">"Expo"</span>
              <span className="text-text/70">]</span>
            </div>
          </div>

          <div className="mb-2">
            <span className="text-text/70">{"},"}</span>
          </div>

          <div className="mb-4">
            <span className="text-accent">hobbies</span>
            <span className="text-text/70">: [</span>
            <span className="text-primary">"Hanging with friends"</span>
            <span className="text-text/70">, </span>
            <span className="text-primary">"Calisthenics"</span>
            <span className="text-text/70">],</span>
          </div>

          <div className="mb-2">
            <span className="text-accent">education</span>
            <span className="text-text/70">: {"{"}</span>
          </div>

          <div className="ml-4 mb-2">
            <div className="mb-1">
              <span className="text-accent">degree</span>
              <span className="text-text/70">: </span>
              <span className="text-primary">"Masters in Software Systems"</span>
              <span className="text-text/70">,</span>
            </div>
            <div className="mb-1">
              <span className="text-accent">institution</span>
              <span className="text-text/70">: </span>
              <span className="text-primary">"NTNU"</span>
              <span className="text-text/70">,</span>
            </div>
            <div>
              <span className="text-accent">status</span>
              <span className="text-text/70">: </span>
              <span className="text-primary">"In Progress"</span>
            </div>
          </div>

          <div className="mb-2">
            <span className="text-text/70">{"}"}</span>
          </div>
        </div>

        <div className="mb-2">
          <span className="text-text/70">{"};"}</span>
        </div>
      </div>

      <div>
        <span className="text-text/70">{"};"}</span>
      </div>
    </div>
  );
}
