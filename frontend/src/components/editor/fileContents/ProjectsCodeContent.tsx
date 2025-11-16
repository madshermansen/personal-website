export default function ProjectsCodeContent() {
  return (
    <div className="font-mono text-xs whitespace-nowrap">
      <div className="leading-relaxed"><span className="monokai-comment">{'/**'}</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * Recent projects and portfolio showcase</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * @module Projects</span></div>
      <div className="leading-relaxed"><span className="monokai-comment">{' */'}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">import</span>{" "}<span className="text-text/70">{"{"}</span>{" "}<span className="monokai-value">ProjectList</span>{" "}<span className="text-text/70">{"}"}</span>{" "}<span className="monokai-keyword">from</span>{" "}<span className="monokai-string">&apos;@/components/projects&apos;</span><span className="text-text/70">;</span></div>
      <div className="leading-relaxed"><span className="monokai-keyword">import</span>{" "}<span className="monokai-value">Link</span>{" "}<span className="monokai-keyword">from</span>{" "}<span className="monokai-string">&apos;next/link&apos;</span><span className="text-text/70">;</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">interface</span>{" "}<span className="monokai-value">Project</span>{" "}<span className="text-text/70">{"{"}</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">name</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">description</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">technologies</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">[];</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">githubUrl</span><span className="text-text/70">?:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">liveUrl</span><span className="text-text/70">?:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">featured</span><span className="text-text/70">:</span> <span className="monokai-keyword">boolean</span><span className="text-text/70">;</span></div>
      <div className="leading-relaxed"><span className="text-text/70">{"}"}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-comment">{'/**'}</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * Portfolio of recent projects</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * @constant</span></div>
      <div className="leading-relaxed"><span className="monokai-comment">{' */'}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">const</span>{" "}<span className="monokai-value">recentProjects</span><span className="text-text/70">:</span>{" "}<span className="monokai-value">Project</span><span className="text-text/70">[] = [</span></div>
      <div className="ml-4 leading-relaxed"><span className="text-text/70">{"{"}</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-property">name</span><span className="text-text/70">: </span><span className="monokai-string">&quot;Personal Portfolio Website&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-property">description</span><span className="text-text/70">: </span><span className="monokai-string">&quot;Interactive VS Code-style portfolio with</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">split-screen editor interface and dynamic content.&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-property">technologies</span><span className="text-text/70">: [</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;Next.js&quot;</span><span className="text-text/70">, </span><span className="monokai-string">&quot;TypeScript&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;Tailwind CSS&quot;</span><span className="text-text/70">, </span><span className="monokai-string">&quot;Framer Motion&quot;</span></div>
      <div className="ml-8 leading-relaxed"><span className="text-text/70">],</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-property">featured</span><span className="text-text/70">: </span><span className="monokai-keyword">true</span></div>
      <div className="ml-4 leading-relaxed"><span className="text-text/70">{"},"}</span></div>
      <div className="leading-relaxed"></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-comment">{'// More projects loaded from CMS...'}</span></div>
      <div className="leading-relaxed"><span className="text-text/70">{"];"}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-comment">{'/**'}</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * Projects component showing recent work</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * @returns {"{"}JSX.Element{"}"} Rendered projects list</span></div>
      <div className="leading-relaxed"><span className="monokai-comment">{' */'}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">export default function</span>{" "}<span className="monokai-function">RecentProjects</span><span className="text-text/70">() {"{"}</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-keyword">return</span>{" "}<span className="text-text/70">(</span></div>
      <div className="ml-8 leading-relaxed"><span className="text-text/70">&lt;</span><span className="monokai-keyword">div</span>{" "}<span className="monokai-property">className</span><span className="monokai-operator">=</span><span className="monokai-string">&quot;flex flex-col gap-6&quot;</span><span className="text-text/70">&gt;</span></div>
      <div className="ml-8 leading-relaxed"><span className="text-text/70">&lt;</span><span className="monokai-keyword">h2</span>{" "}<span className="monokai-property">className</span><span className="monokai-operator">=</span><span className="monokai-string">&quot;text-2xl font-bold&quot;</span><span className="text-text/70">&gt;</span></div>
      <div className="ml-8 leading-relaxed"><span className="text-text/70">## Recent Projects</span></div>
      <div className="ml-8 leading-relaxed"><span className="text-text/70">&lt;/</span><span className="monokai-keyword">h2</span><span className="text-text/70">&gt;</span></div>
      <div className="ml-8 leading-relaxed"><span className="text-text/70">&lt;</span><span className="monokai-value">ProjectList</span>{" "}<span className="text-text/70">/&gt;</span></div>
      <div className="ml-8 leading-relaxed"><span className="text-text/70">&lt;</span><span className="monokai-value">Link</span>{" "}<span className="monokai-property">href</span><span className="monokai-operator">=</span><span className="monokai-string">&quot;/projects&quot;</span><span className="text-text/70">&gt;</span></div>
      <div className="ml-8 leading-relaxed"><span className="text-text/70">→ View Project Archive</span></div>
      <div className="ml-8 leading-relaxed"><span className="text-text/70">&lt;/</span><span className="monokai-value">Link</span><span className="text-text/70">&gt;</span></div>
      <div className="ml-8 leading-relaxed"><span className="text-text/70">&lt;/</span><span className="monokai-keyword">div</span><span className="text-text/70">&gt;</span></div>
      <div className="ml-4 leading-relaxed"><span className="text-text/70">);</span></div>
      <div className="leading-relaxed"><span className="text-text/70">{"}"}</span></div>
    </div>
  );
}
