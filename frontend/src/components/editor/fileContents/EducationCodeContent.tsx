export default function EducationCodeContent() {
  return (
    <div className="font-mono text-sm leading-relaxed">
      {/* Comments and imports */}
      <div className="mb-4">
        <span className="monokai-comment">{'/**'}</span>
      </div>
      <div className="mb-0">
        <span className="monokai-comment"> * Academic education and qualifications</span>
      </div>
      <div className="mb-0">
        <span className="monokai-comment"> * @module Education</span>
      </div>
      <div className="mb-4">
        <span className="monokai-comment">{' */'}</span>
      </div>

      <div className="mb-4">
        <span className="monokai-keyword">interface</span>{" "}
        <span className="monokai-value">EducationRecord</span>{" "}
        <span className="text-text/70">{"{"}</span>
        <div className="ml-4">
          <div><span className="monokai-property">startDate</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">endDate</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">title</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">institution</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">description</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">focus</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">[];</span></div>
        </div>
        <span className="text-text/70">{"}"}</span>
      </div>

      <div className="mb-4">
        <span className="monokai-comment">{'/**'}</span>
        <div className="monokai-comment"> * Academic qualifications and achievements</div>
        <div className="monokai-comment"> * @constant</div>
        <span className="monokai-comment">{' */'}</span>
      </div>

      <div className="mb-2">
        <span className="monokai-keyword">export const</span>{" "}
        <span className="monokai-value">education</span>
        <span className="text-text/70">:</span>{" "}
        <span className="monokai-value">EducationRecord</span>
        <span className="text-text/70">[] = [</span>
      </div>

      <div className="ml-4">
        <div className="mb-4">
          <span className="text-text/70">{"{"}</span>
        </div>
        <div className="ml-4">
          <div className="mb-2">
            <span className="monokai-property">startDate</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;July 2024&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">endDate</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;Present&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">title</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;Masters in Informatics, Software Systems&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">institution</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;Norwegian University of Science and Technology&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">description</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;Master&apos;s degree in informatics with a</span>
          </div>
          <div className="mb-2 ml-4">
            <span className="monokai-string">specialization in software systems.&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">focus</span>
            <span className="text-text/70">: [</span>
          </div>
          <div className="ml-4 mb-2">
            <span className="monokai-string">&quot;Software Engineering&quot;</span>
            <span className="text-text/70">,</span>
            <br />
            <span className="monokai-string">&quot;Databases&quot;</span>
            <span className="text-text/70">,</span>
            <br />
            <span className="monokai-string">&quot;Algorithms&quot;</span>
            <span className="text-text/70">,</span>
            <br />
            <span className="monokai-string">&quot;Web Development&quot;</span>
          </div>
          <div className="mb-2">
            <span className="text-text/70">]</span>
          </div>
        </div>
        <div className="mb-2">
          <span className="text-text/70">{"}"}</span>
        </div>
      </div>

      <div className="mb-2">
        <span className="text-text/70">{"];"}</span>
      </div>

      <div className="mb-4 mt-6">
        <span className="monokai-comment">{'/**'}</span>
        <div className="monokai-comment"> * Get most recent education</div>
        <div className="monokai-comment"> * @returns {"{"}EducationRecord{"}"} Latest education record</div>
        <span className="monokai-comment">{' */'}</span>
      </div>

      <div className="mb-2">
        <span className="monokai-keyword">export const</span>{" "}
        <span className="monokai-function">getCurrentEducation</span>{" "}
        <span className="text-text/70">= ():</span>{" "}
        <span className="monokai-value">EducationRecord</span>{" "}
        <span className="monokai-operator">=&gt;</span>{" "}
        <span className="text-text/70">{"{"}</span>
      </div>

      <div className="ml-4 mb-2">
        <span className="monokai-keyword">return</span>{" "}
        <span className="monokai-value">education</span>
        <span className="text-text/70">[</span>
        <span className="monokai-number">0</span>
        <span className="text-text/70">];</span>
      </div>

      <div className="mb-2">
        <span className="text-text/70">{"};"}</span>
      </div>

      <div className="mb-4 mt-6">
        <span className="monokai-comment">{'// Export for use in components'}</span>
      </div>
      <div>
        <span className="monokai-keyword">export default</span>{" "}
        <span className="monokai-value">education</span>
        <span className="text-text/70">;</span>
      </div>
    </div>
  );
}
