import Link from "next/link";

export default function AboutContent() {
  return (
    <div className="font-mono text-sm leading-relaxed">
      <div className="mb-2">
        <span className="monokai-keyword">import</span>{" "}
        <span className="monokai-value">{"{ Developer }"}</span>{" "}
        <span className="monokai-keyword">from</span>{" "}
        <span className="monokai-string">'@types/portfolio'</span>
        <span className="text-text/70">;</span>
      </div>

      <div className="mb-2 mt-4">
        <span className="monokai-keyword">export const</span>{" "}
        <span className="monokai-function">about</span>{" "}
        <span className="text-text/70">= ():</span>{" "}
        <span className="monokai-value">Developer</span>{" "}
        <span className="monokai-operator">=&gt;</span>{" "}
        <span className="text-text/70">{"{"}</span>
      </div>

      <div className="ml-4">
        <div className="mb-2">
          <span className="monokai-keyword">return</span>{" "}
          <span className="text-text/70">{"{"}</span>
        </div>

        <div className="ml-4">
          <div className="mb-2">
            <span className="monokai-property">name</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">"Mads Hermansen"</span>
            <span className="text-text/70">,</span>
          </div>

          <div className="mb-2">
            <span className="monokai-property">role</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">"Full Stack Developer"</span>
            <span className="text-text/70">,</span>
          </div>

          <div className="mb-4">
            <span className="monokai-property">bio</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">"Tech enthusiast diving into Masters in Software Engineering at NTNU"</span>
            <span className="text-text/70">,</span>
          </div>

          <div className="mb-2">
            <span className="monokai-property">currentWork</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">"Contributing to mobile development at "</span>
            <span className="text-text/70"> + </span>
            <Link href="https://ssesh.no" className="monokai-string hover:monokai-property transition-colors underline">
              "ssesh"
            </Link>
            <span className="text-text/70">,</span>
          </div>

          <div className="mb-4">
            <span className="monokai-property">passion</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">"Learning new things, collaborating on exciting projects, full-stack & mobile development"</span>
            <span className="text-text/70">,</span>
          </div>

          <div className="mb-2">
            <span className="monokai-property">skills</span>
            <span className="text-text/70">: {"{"}</span>
          </div>

          <div className="ml-4 mb-2">
            <div className="mb-1">
              <span className="monokai-property">frontend</span>
              <span className="text-text/70">: [</span>
              <span className="monokai-string">"React"</span>
              <span className="text-text/70">, </span>
              <span className="monokai-string">"Next.js"</span>
              <span className="text-text/70">, </span>
              <span className="monokai-string">"TypeScript"</span>
              <span className="text-text/70">],</span>
            </div>
            <div className="mb-1">
              <span className="monokai-property">backend</span>
              <span className="text-text/70">: [</span>
              <span className="monokai-string">"Node.js"</span>
              <span className="text-text/70">, </span>
              <span className="monokai-string">"Express"</span>
              <span className="text-text/70">, </span>
              <span className="monokai-string">"MySQL"</span>
              <span className="text-text/70">],</span>
            </div>
            <div>
              <span className="monokai-property">mobile</span>
              <span className="text-text/70">: [</span>
              <span className="monokai-string">"React Native"</span>
              <span className="text-text/70">, </span>
              <span className="monokai-string">"Expo"</span>
              <span className="text-text/70">]</span>
            </div>
          </div>

          <div className="mb-2">
            <span className="text-text/70">{"},"}</span>
          </div>

          <div className="mb-4">
            <span className="monokai-property">hobbies</span>
            <span className="text-text/70">: [</span>
            <span className="monokai-string">"Hanging with friends"</span>
            <span className="text-text/70">, </span>
            <span className="monokai-string">"Calisthenics"</span>
            <span className="text-text/70">],</span>
          </div>

          <div className="mb-2">
            <span className="monokai-property">education</span>
            <span className="text-text/70">: {"{"}</span>
          </div>

          <div className="ml-4 mb-2">
            <div className="mb-1">
              <span className="monokai-property">degree</span>
              <span className="text-text/70">: </span>
              <span className="monokai-string">"Masters in Software Systems"</span>
              <span className="text-text/70">,</span>
            </div>
            <div className="mb-1">
              <span className="monokai-property">institution</span>
              <span className="text-text/70">: </span>
              <span className="monokai-string">"NTNU"</span>
              <span className="text-text/70">,</span>
            </div>
            <div>
              <span className="monokai-property">status</span>
              <span className="text-text/70">: </span>
              <span className="monokai-string">"In Progress"</span>
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
