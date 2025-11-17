/**
 * SkillsCodeContent Component
 * Displays TypeScript code representation of technical skills
 */

export default function SkillsCodeContent() {
  return (
    <div className="font-mono text-xs whitespace-nowrap">
      <div className="leading-relaxed"><span className="monokai-comment">{'/**'}</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * Technical skills and tools proficiency</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * @module Skills</span></div>
      <div className="leading-relaxed"><span className="monokai-comment">{' */'}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">type</span> <span className="monokai-value">SkillCategory</span> <span className="text-text/70">= </span><span className="monokai-string">&apos;frontend&apos;</span><span className="text-text/70"> | </span><span className="monokai-string">&apos;backend&apos;</span><span className="text-text/70"> | </span><span className="monokai-string">&apos;mobile&apos;</span><span className="text-text/70"> | </span><span className="monokai-string">&apos;tools&apos;</span><span className="text-text/70">;</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">interface</span> <span className="monokai-value">TechnicalSkills</span> <span className="text-text/70">{"{"}</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">frontend</span><span className="text-text/70">:</span> <span className="monokai-keyword">readonly string</span><span className="text-text/70">[];</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">backend</span><span className="text-text/70">:</span> <span className="monokai-keyword">readonly string</span><span className="text-text/70">[];</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">mobile</span><span className="text-text/70">:</span> <span className="monokai-keyword">readonly string</span><span className="text-text/70">[];</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">tools</span><span className="text-text/70">:</span> <span className="monokai-keyword">readonly string</span><span className="text-text/70">[];</span></div>
      <div className="leading-relaxed"><span className="text-text/70">{"}"}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-comment">{'/**'}</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * Complete technical skill set organized by category</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * @constant</span></div>
      <div className="leading-relaxed"><span className="monokai-comment">{' */'}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">export const</span> <span className="monokai-value">skills</span><span className="text-text/70">:</span> <span className="monokai-value">TechnicalSkills</span> <span className="text-text/70">= {"{"}</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">frontend</span><span className="text-text/70">: [</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;React&quot;</span><span className="text-text/70">, </span><span className="monokai-string">&quot;Next.js&quot;</span><span className="text-text/70">, </span><span className="monokai-string">&quot;TypeScript&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;Tailwind CSS&quot;</span><span className="text-text/70">, </span><span className="monokai-string">&quot;Framer Motion&quot;</span></div>
      <div className="ml-4 leading-relaxed"><span className="text-text/70">],</span></div>
      <div className="leading-relaxed"></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">backend</span><span className="text-text/70">: [</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;Node.js&quot;</span><span className="text-text/70">, </span><span className="monokai-string">&quot;Express&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;MySQL&quot;</span><span className="text-text/70">, </span><span className="monokai-string">&quot;Planetscale&quot;</span><span className="text-text/70">, </span><span className="monokai-string">&quot;Sanity CMS&quot;</span></div>
      <div className="ml-4 leading-relaxed"><span className="text-text/70">],</span></div>
      <div className="leading-relaxed"></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">mobile</span><span className="text-text/70">: [</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;React Native&quot;</span><span className="text-text/70">, </span><span className="monokai-string">&quot;Expo&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;iOS&quot;</span><span className="text-text/70">, </span><span className="monokai-string">&quot;Android&quot;</span></div>
      <div className="ml-4 leading-relaxed"><span className="text-text/70">],</span></div>
      <div className="leading-relaxed"></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">tools</span><span className="text-text/70">: [</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;Git&quot;</span><span className="text-text/70">, </span><span className="monokai-string">&quot;VS Code&quot;</span><span className="text-text/70">, </span><span className="monokai-string">&quot;Figma&quot;</span><span className="text-text/70">,</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;Vercel&quot;</span><span className="text-text/70">, </span><span className="monokai-string">&quot;Zendesk&quot;</span></div>
      <div className="ml-4 leading-relaxed"><span className="text-text/70">]</span></div>
      <div className="leading-relaxed"><span className="text-text/70">{"} as const;"}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-comment">{'/**'}</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * Get all skills from a specific category</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * @param category - The skill category to retrieve</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * @returns Array of skills in the specified category</span></div>
      <div className="leading-relaxed"><span className="monokai-comment">{' */'}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">export const</span> <span className="monokai-function">getSkillsByCategory</span> <span className="text-text/70">= (</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">category</span><span className="text-text/70">:</span> <span className="monokai-value">SkillCategory</span></div>
      <div className="leading-relaxed"><span className="text-text/70">):</span> <span className="monokai-keyword">readonly string</span><span className="text-text/70">[] </span><span className="monokai-operator">=&gt;</span> <span className="text-text/70">{"{"}</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-keyword">return</span> <span className="monokai-value">skills</span><span className="text-text/70">[</span><span className="monokai-property">category</span><span className="text-text/70">];</span></div>
      <div className="leading-relaxed"><span className="text-text/70">{"};"}</span></div>
    </div>
  );
}
