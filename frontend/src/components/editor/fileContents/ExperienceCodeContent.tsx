interface ExperienceCodeContentProps {
  type: 'work' | 'education';
}

export default function ExperienceCodeContent({ type }: ExperienceCodeContentProps) {
  return (
    <div className="font-mono text-xs whitespace-nowrap">
      <div className="leading-relaxed"><span className="monokai-comment">{'"""'}</span></div>
      <div className="leading-relaxed"><span className="monokai-comment">{type === 'work' ? 'Professional work experience and career history' : 'Academic education and qualifications'}</span></div>
      <div className="leading-relaxed"><span className="monokai-comment">Module: {type === 'work' ? 'WorkExperience' : 'Education'}</span></div>
      <div className="leading-relaxed"><span className="monokai-comment">{'"""'}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">from</span>{" "}<span className="monokai-value">typing</span>{" "}<span className="monokai-keyword">import</span>{" "}<span className="monokai-value">List</span><span className="text-text/70">,</span>{" "}<span className="monokai-value">Dict</span></div>
      <div className="leading-relaxed"><span className="monokai-keyword">from</span>{" "}<span className="monokai-value">dataclasses</span>{" "}<span className="monokai-keyword">import</span>{" "}<span className="monokai-value">dataclass</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">@dataclass</span></div>
      <div className="leading-relaxed"><span className="monokai-keyword">class</span>{" "}<span className="monokai-value">{type === 'work' ? 'WorkExperience' : 'EducationRecord'}</span><span className="text-text/70">:</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-comment">{'"""'}{type === 'work' ? 'Represents a work experience entry' : 'Represents an education record'}{' """'}</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">start_date</span><span className="text-text/70">:</span> <span className="monokai-keyword">str</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">end_date</span><span className="text-text/70">:</span> <span className="monokai-keyword">str</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">title</span><span className="text-text/70">:</span> <span className="monokai-keyword">str</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">{type === 'work' ? 'company' : 'institution'}</span><span className="text-text/70">:</span> <span className="monokai-keyword">str</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">description</span><span className="text-text/70">:</span> <span className="monokai-keyword">str</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">{type === 'work' ? 'tools' : 'focus_areas'}</span><span className="text-text/70">:</span> <span className="monokai-value">List</span><span className="text-text/70">[</span><span className="monokai-keyword">str</span><span className="text-text/70">]</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-comment"># {type === 'work' ? 'Complete work experience history' : 'Academic qualifications and achievements'}</span></div>
      <div className="leading-relaxed"><span className="monokai-property">{type === 'work' ? 'work_history' : 'education_records'}</span><span className="text-text/70">:</span> <span className="monokai-value">List</span><span className="text-text/70">[</span><span className="monokai-value">{type === 'work' ? 'WorkExperience' : 'EducationRecord'}</span><span className="text-text/70">] = [</span></div>

      {type === 'work' ? (
        <>
          <div className="ml-4 leading-relaxed"><span className="monokai-value">WorkExperience</span><span className="text-text/70">(</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">start_date</span><span className="text-text/70">=</span><span className="monokai-string">&quot;June 2024&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">end_date</span><span className="text-text/70">=</span><span className="monokai-string">&quot;October 2024&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">title</span><span className="text-text/70">=</span><span className="monokai-string">&quot;Full Stack Developer&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">company</span><span className="text-text/70">=</span><span className="monokai-string">&quot;ssesh&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">description</span><span className="text-text/70">=</span><span className="monokai-string">&quot;&quot;&quot;</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">Developing a mobile app, digital infrastructure,</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">website, and backend for a startup company.</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;&quot;&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">tools</span><span className="text-text/70">=[</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">&quot;Expo&quot;</span><span className="text-text/70">,</span> <span className="monokai-string">&quot;React Native&quot;</span><span className="text-text/70">,</span> <span className="monokai-string">&quot;TypeScript&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">&quot;Express&quot;</span><span className="text-text/70">,</span> <span className="monokai-string">&quot;MySQL&quot;</span><span className="text-text/70">,</span> <span className="monokai-string">&quot;Planetscale&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">&quot;iOS&quot;</span><span className="text-text/70">,</span> <span className="monokai-string">&quot;Android&quot;</span></div>
          <div className="ml-8 leading-relaxed"><span className="text-text/70">]</span></div>
          <div className="ml-4 leading-relaxed"><span className="text-text/70">),</span></div>
          <div className="leading-relaxed"></div>
          <div className="ml-4 leading-relaxed"><span className="monokai-value">WorkExperience</span><span className="text-text/70">(</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">start_date</span><span className="text-text/70">=</span><span className="monokai-string">&quot;January 2024&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">end_date</span><span className="text-text/70">=</span><span className="monokai-string">&quot;May 2024&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">title</span><span className="text-text/70">=</span><span className="monokai-string">&quot;Teaching Assistant&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">company</span><span className="text-text/70">=</span><span className="monokai-string">&quot;NTNU - Institutt for elektroniske systemer (IE)&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">description</span><span className="text-text/70">=</span><span className="monokai-string">&quot;&quot;&quot;</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">Assisted students in understanding topics in cryptography</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">and network security, offering personalized guidance</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">and support during workshops and labs.</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;&quot;&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">tools</span><span className="text-text/70">=[]</span></div>
          <div className="ml-4 leading-relaxed"><span className="text-text/70">),</span></div>
          <div className="leading-relaxed"></div>
          <div className="ml-4 leading-relaxed"><span className="monokai-value">WorkExperience</span><span className="text-text/70">(</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">start_date</span><span className="text-text/70">=</span><span className="monokai-string">&quot;July 2020&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">end_date</span><span className="text-text/70">=</span><span className="monokai-string">&quot;June 2021&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">title</span><span className="text-text/70">=</span><span className="monokai-string">&quot;IT Helpdesk&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">company</span><span className="text-text/70">=</span><span className="monokai-string">&quot;International School of Stavanger&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">description</span><span className="text-text/70">=</span><span className="monokai-string">&quot;&quot;&quot;</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">Volunteer position for helping the IT staff set up</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">projectors, answering support tickets, setting up new</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">devices or any other tech related problems.</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;&quot;&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">tools</span><span className="text-text/70">=[</span><span className="monokai-string">&quot;Zendesk&quot;</span><span className="text-text/70">,</span> <span className="monokai-string">&quot;Windows&quot;</span><span className="text-text/70">,</span> <span className="monokai-string">&quot;MacOS&quot;</span><span className="text-text/70">]</span></div>
          <div className="ml-4 leading-relaxed"><span className="text-text/70">)</span></div>
        </>
      ) : (
        <>
          <div className="ml-4 leading-relaxed"><span className="monokai-value">EducationRecord</span><span className="text-text/70">(</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">start_date</span><span className="text-text/70">=</span><span className="monokai-string">&quot;July 2024&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">end_date</span><span className="text-text/70">=</span><span className="monokai-string">&quot;Present&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">title</span><span className="text-text/70">=</span><span className="monokai-string">&quot;Masters in Informatics, Software Systems&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">institution</span><span className="text-text/70">=</span><span className="monokai-string">&quot;Norwegian University of Science and Technology&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">description</span><span className="text-text/70">=</span><span className="monokai-string">&quot;&quot;&quot;</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">Master&apos;s degree in informatics with a specialization</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">in software systems.</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-string">&quot;&quot;&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-8 leading-relaxed"><span className="monokai-property">focus_areas</span><span className="text-text/70">=[</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">&quot;Software Engineering&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">&quot;Databases&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">&quot;Algorithms&quot;</span><span className="text-text/70">,</span></div>
          <div className="ml-12 leading-relaxed"><span className="monokai-string">&quot;Web Development&quot;</span></div>
          <div className="ml-8 leading-relaxed"><span className="text-text/70">]</span></div>
          <div className="ml-4 leading-relaxed"><span className="text-text/70">)</span></div>
        </>
      )}

      <div className="leading-relaxed"><span className="text-text/70">]</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">def</span>{" "}<span className="monokai-function">{type === 'work' ? 'get_latest_position' : 'get_current_education'}</span><span className="text-text/70">():</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-comment">{'"""'}</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-comment">{type === 'work' ? 'Get the most recent work position' : 'Get the current education record'}</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-comment"></span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-comment">Returns:</span></div>
      <div className="ml-8 leading-relaxed"><span className="monokai-comment">{type === 'work' ? 'WorkExperience' : 'EducationRecord'}: {type === 'work' ? 'Latest work experience' : 'Current education record'}</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-comment">{'"""'}</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-keyword">return</span>{" "}<span className="monokai-property">{type === 'work' ? 'work_history' : 'education_records'}</span><span className="text-text/70">[</span><span className="monokai-number">0</span><span className="text-text/70">]</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">if</span>{" "}<span className="monokai-value">__name__</span>{" "}<span className="monokai-operator">==</span>{" "}<span className="monokai-string">&quot;__main__&quot;</span><span className="text-text/70">:</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-comment"># Print summary</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-function">print</span><span className="text-text/70">(</span><span className="monokai-string">f&quot;Total {type === 'work' ? 'positions' : 'qualifications'}: {"{"}{type === 'work' ? 'len(work_history)' : 'len(education_records)'}{"}"}}&quot;</span><span className="text-text/70">)</span></div>
    </div>
  );
}
