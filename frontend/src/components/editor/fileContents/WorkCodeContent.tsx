export default function WorkCodeContent() {
  return (
    <div className="font-mono text-sm leading-relaxed">
      {/* Comments and imports */}
      <div className="mb-4">
        <span className="monokai-comment">{'/**'}</span>
      </div>
      <div className="mb-0">
        <span className="monokai-comment"> * Professional work experience and career history</span>
      </div>
      <div className="mb-0">
        <span className="monokai-comment"> * @module WorkExperience</span>
      </div>
      <div className="mb-4">
        <span className="monokai-comment">{' */'}</span>
      </div>

      <div className="mb-4">
        <span className="monokai-keyword">interface</span>{" "}
        <span className="monokai-value">WorkExperience</span>{" "}
        <span className="text-text/70">{"{"}</span>
        <div className="ml-4">
          <div><span className="monokai-property">startDate</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">endDate</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">title</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">company</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">description</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">;</span></div>
          <div><span className="monokai-property">tools</span><span className="text-text/70">:</span> <span className="monokai-keyword">string</span><span className="text-text/70">[];</span></div>
        </div>
        <span className="text-text/70">{"}"}</span>
      </div>

      <div className="mb-4">
        <span className="monokai-comment">{'/**'}</span>
        <div className="monokai-comment"> * Complete work experience history</div>
        <div className="monokai-comment"> * @constant</div>
        <span className="monokai-comment">{' */'}</span>
      </div>

      <div className="mb-2">
        <span className="monokai-keyword">export const</span>{" "}
        <span className="monokai-value">workHistory</span>
        <span className="text-text/70">:</span>{" "}
        <span className="monokai-value">WorkExperience</span>
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
            <span className="monokai-string">&quot;June 2024&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">endDate</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;October 2024&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">title</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;Full Stack Developer&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">company</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;ssesh&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">description</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;Developing a mobile app, digital infrastructure,</span>
          </div>
          <div className="mb-2 ml-4">
            <span className="monokai-string">website, and backend for a startup company.&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">tools</span>
            <span className="text-text/70">: [</span>
          </div>
          <div className="ml-4 mb-2">
            <span className="monokai-string">&quot;Expo&quot;</span>
            <span className="text-text/70">, </span>
            <span className="monokai-string">&quot;React Native&quot;</span>
            <span className="text-text/70">, </span>
            <span className="monokai-string">&quot;TypeScript&quot;</span>
            <span className="text-text/70">,</span>
            <br />
            <span className="monokai-string">&quot;Express&quot;</span>
            <span className="text-text/70">, </span>
            <span className="monokai-string">&quot;MySQL&quot;</span>
            <span className="text-text/70">, </span>
            <span className="monokai-string">&quot;Planetscale&quot;</span>
            <span className="text-text/70">,</span>
            <br />
            <span className="monokai-string">&quot;iOS&quot;</span>
            <span className="text-text/70">, </span>
            <span className="monokai-string">&quot;Android&quot;</span>
          </div>
          <div className="mb-2">
            <span className="text-text/70">]</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-text/70">{"},"}</span>
        </div>

        <div className="mb-4">
          <span className="text-text/70">{"{"}</span>
        </div>
        <div className="ml-4">
          <div className="mb-2">
            <span className="monokai-property">startDate</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;January 2024&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">endDate</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;May 2024&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">title</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;Teaching Assistant&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">company</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;NTNU - Institutt for elektroniske systemer (IE)&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">description</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;Assisted students in understanding topics in</span>
          </div>
          <div className="mb-2 ml-4">
            <span className="monokai-string">cryptography and network security, offering personalized</span>
          </div>
          <div className="mb-2 ml-4">
            <span className="monokai-string">guidance and support during workshops and labs.&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">tools</span>
            <span className="text-text/70">: []</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-text/70">{"},"}</span>
        </div>

        <div className="mb-4">
          <span className="text-text/70">{"{"}</span>
        </div>
        <div className="ml-4">
          <div className="mb-2">
            <span className="monokai-property">startDate</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;July 2020&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">endDate</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;June 2021&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">title</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;IT Helpdesk&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">company</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;International School of Stavanger&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">description</span>
            <span className="text-text/70">: </span>
            <span className="monokai-string">&quot;Volunteer position for helping the IT staff set up</span>
          </div>
          <div className="mb-2 ml-4">
            <span className="monokai-string">projectors, answering support tickets, setting up new</span>
          </div>
          <div className="mb-2 ml-4">
            <span className="monokai-string">devices or any other tech related problems.&quot;</span>
            <span className="text-text/70">,</span>
          </div>
          <div className="mb-2">
            <span className="monokai-property">tools</span>
            <span className="text-text/70">: [</span>
            <span className="monokai-string">&quot;Zendesk&quot;</span>
            <span className="text-text/70">, </span>
            <span className="monokai-string">&quot;Windows&quot;</span>
            <span className="text-text/70">, </span>
            <span className="monokai-string">&quot;MacOS&quot;</span>
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
        <span className="monokai-comment">{'// Export for use in components'}</span>
      </div>
      <div>
        <span className="monokai-keyword">export default</span>{" "}
        <span className="monokai-value">workHistory</span>
        <span className="text-text/70">;</span>
      </div>
    </div>
  );
}
