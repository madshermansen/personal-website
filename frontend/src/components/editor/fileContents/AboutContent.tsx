import Link from "next/link";

export default function AboutContent() {
  return (
    <div className="font-mono text-sm leading-relaxed">
      {/* Comments and imports */}
      <div className="mb-4">
        <span className="monokai-comment">{'/**'}</span>
      </div>
      <div className="mb-0">
        <span className="monokai-comment"> * Personal information and professional profile</span>
      </div>
      <div className="mb-0">
        <span className="monokai-comment"> * @module About</span>
      </div>
      <div className="mb-4">
        <span className="monokai-comment">{' */'}</span>
      </div>

      <div className="mb-4">
        <span className="monokai-keyword">interface</span>{" "}
        <span className="monokai-value">Skills</span>{" "}
        <span className="text-text/70">{"{"}</span>
        <div className="ml-4">
          <div><span className="monokai-property">frontend</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">[];</span></div>
          <div><span className="monokai-property">backend</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">[];</span></div>
          <div><span className="monokai-property">mobile</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">[];</span></div>
        </div>
        <span className="text-text/70">{"}"}</span>
      </div>

      <div className="mb-4">
        <span className="monokai-keyword">interface</span>{" "}
        <span className="monokai-value">Education</span>{" "}
        <span className="text-text/70">{"{"}</span>
        <div className="ml-4">
          <div><span className="monokai-property">degree</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">institution</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">status</span><span className="text-text/70">:</span> <span className="monokai-string">&apos;In Progress&apos;</span> <span className="text-text/70">|</span> <span className="monokai-string">&apos;Completed&apos;</span><span className="text-text/70">;</span></div>
        </div>
        <span className="text-text/70">{"}"}</span>
      </div>

      <div className="mb-4">
        <span className="monokai-keyword">interface</span>{" "}
        <span className="monokai-value">Developer</span>{" "}
        <span className="text-text/70">{"{"}</span>
        <div className="ml-4">
          <div><span className="monokai-property">name</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">role</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">bio</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">currentWork</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">passion</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">skills</span><span className="text-text/70">:</span> <span className="monokai-value">Skills</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">hobbies</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">[];</span></div>
          <div><span className="monokai-property">education</span><span className="text-text/70">:</span> <span className="monokai-value">Education</span><span className="text-text/70">;</span></div>
        </div>
        <span className="text-text/70">{"}"}</span>
      </div>

      <div className="mb-4">
        <span className="monokai-comment">{'/**'}</span>
        <div className="monokai-comment"> * Returns developer profile information</div>
        <div className="monokai-comment"> * @returns {"{"}Developer{"}"} Complete developer profile</div>
        <span className="monokai-comment">{' */'}</span>
      </div>

      <div className="mb-2">
        <span className="monokai-keyword">export const</span>{" "}
        <span className="monokai-function">getDeveloperProfile</span>{" "}
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
            <span className="monokai-string">&quot;Contributing to mobile development at ssesh&quot;</span>
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
              <span className="monokai-string">&quot;React&quot;</span>
              <span className="text-text/70">, </span>
              <span className="monokai-string">&quot;Next.js&quot;</span>
              <span className="text-text/70">, </span>
              <span className="monokai-string">&quot;TypeScript&quot;</span>
              <span className="text-text/70">],</span>
            </div>
            <div className="mb-1">
              <span className="monokai-property">backend</span>
              <span className="text-text/70">: [</span>
              <span className="monokai-string">&quot;Node.js&quot;</span>
              <span className="text-text/70">, </span>
              <span className="monokai-string">&quot;Express&quot;</span>
              <span className="text-text/70">, </span>
              <span className="monokai-string">&quot;MySQL&quot;</span>
              <span className="text-text/70">],</span>
            </div>
            <div>
              <span className="monokai-property">mobile</span>
              <span className="text-text/70">: [</span>
              <span className="monokai-string">&quot;React Native&quot;</span>
              <span className="text-text/70">, </span>
              <span className="monokai-string">&quot;Expo&quot;</span>
              <span className="text-text/70">]</span>
            </div>
          </div>

          <div className="mb-2">
            <span className="text-text/70">{"},"}</span>
          </div>

          <div className="mb-4">
            <span className="monokai-property">hobbies</span>
            <span className="text-text/70">: [</span>
            <span className="monokai-string">&quot;Hanging with friends&quot;</span>
            <span className="text-text/70">, </span>
            <span className="monokai-string">&quot;Calisthenics&quot;</span>
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
              <span className="monokai-string">&quot;Masters in Software Systems&quot;</span>
              <span className="text-text/70">,</span>
            </div>
            <div className="mb-1">
              <span className="monokai-property">institution</span>
              <span className="text-text/70">: </span>
              <span className="monokai-string">&quot;NTNU&quot;</span>
              <span className="text-text/70">,</span>
            </div>
            <div>
              <span className="monokai-property">status</span>
              <span className="text-text/70">: </span>
              <span className="monokai-string">&quot;In Progress&quot;</span>
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

      <div className="mb-2">
        <span className="text-text/70">{"};"}</span>
      </div>

      <div className="mb-4 mt-6">
        <span className="monokai-comment">// Export the profile for use in components</span>
      </div>
      <div>
        <span className="monokai-keyword">export default</span>{" "}
        <span className="monokai-function">getDeveloperProfile</span>
        <span className="text-text/70">;</span>
      </div>
    </div>
  );
}
