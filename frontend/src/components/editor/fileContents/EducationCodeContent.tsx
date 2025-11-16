export default function EducationCodeContent() {
  return (
    <div className="font-mono text-xs whitespace-nowrap">
      <div className="leading-relaxed"><span className="monokai-comment">{'/**'}</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * Academic education and qualifications</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * @module Education</span></div>
      <div className="leading-relaxed"><span className="monokai-comment">{' */'}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">interface</span>{" "}<span className="monokai-value">EducationRecord</span>{" "}<span className="text-text/70">{"{"}</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">startDate</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">endDate</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">title</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">institution</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">description</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">focus</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">[];</span></div>
      <div className="leading-relaxed"><span className="text-text/70">{"}"}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-comment">{'/**'}</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * Academic qualifications and achievements</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * @constant</span></div>
      <div className="leading-relaxed"><span className="monokai-comment">{' */'}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">export const</span>{" "}<span className="monokai-value">education</span><span className="text-text/70">:</span>{" "}<span className="monokai-value">EducationRecord</span><span className="text-text/70">[] = [</span></div>
      <div className="ml-4 leading-relaxed"><span className="text-text/70">{"{"}</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-property">startDate</span><span className="text-text/70">: </span><span className="monokai-string">&quot;July 2024&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-property">endDate</span><span className="text-text/70">: </span><span className="monokai-string">&quot;Present&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-property">title</span><span className="text-text/70">: </span><span className="monokai-string">&quot;Masters in Informatics, Software Systems&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-property">institution</span><span className="text-text/70">: </span><span className="monokai-string">&quot;Norwegian University of Science and Technology&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-property">description</span><span className="text-text/70">: </span><span className="monokai-string">&quot;Master&apos;s degree in informatics with a</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">specialization in software systems.&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-property">focus</span><span className="text-text/70">: [</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;Software Engineering&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;Databases&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;Algorithms&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;Web Development&quot;</span></div>
      <div className="ml-8 leading-relaxed"><span className="text-text/70">]</span></div>
      <div className="ml-4 leading-relaxed"><span className="text-text/70">{"}"}</span></div>
      <div className="leading-relaxed"><span className="text-text/70">{"];"}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-comment">{'/**'}</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * Get most recent education</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * @returns {"{"}EducationRecord{"}"} Latest education record</span></div>
      <div className="leading-relaxed"><span className="monokai-comment">{' */'}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">export const</span>{" "}<span className="monokai-function">getCurrentEducation</span>{" "}<span className="text-text/70">= ():</span>{" "}<span className="monokai-value">EducationRecord</span>{" "}<span className="monokai-operator">=&gt;</span>{" "}<span className="text-text/70">{"{"}</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-keyword">return</span>{" "}<span className="monokai-value">education</span><span className="text-text/70">[</span><span className="monokai-number">0</span><span className="text-text/70">];</span></div>
      <div className="leading-relaxed"><span className="text-text/70">{"};"}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-comment">{'// Export for use in components'}</span></div>
      <div className="leading-relaxed"><span className="monokai-keyword">export default</span>{" "}<span className="monokai-value">education</span><span className="text-text/70">;</span></div>
    </div>
  );
}
