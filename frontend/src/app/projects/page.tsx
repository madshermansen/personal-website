"use client";
import useProjects from "@/lib/hooks/useProjects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ArrowLeft } from "lucide-react";

export default function Projects() {
  const { projectData, loading } = useProjects();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="font-mono text-sm">
          <p className="monokai-comment">{'// Loading projects...'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Header similar to VS Code */}
      <div className="border-b border-border bg-backgroundDark">
        <div className="flex items-center h-12 px-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-textMuted hover:text-text transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm">Back to Home</span>
          </Link>
        </div>

        {/* Tab bar */}
        <div className="flex items-center h-9 px-4 bg-backgroundLight">
          <div className="flex items-center gap-2 px-3 h-full border-t-2 border-primary bg-background">
            <span className="font-mono text-sm text-text">projects.ts</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="font-mono text-sm leading-relaxed">
          {/* Header comment */}
          <div className="mb-6">
            <span className="monokai-comment">{'/**'}</span>
            <div className="monokai-comment"> * Project Archive</div>
            <div className="monokai-comment"> * Complete list of all projects</div>
            <span className="monokai-comment">{' */'}</span>
          </div>

          {/* Title */}
          <div className="mb-8">
            <span className="monokai-keyword">export const</span>{" "}
            <span className="monokai-function">ProjectArchive</span>{" "}
            <span className="text-textMuted">= () =&gt; {"{"}</span>
          </div>

          {/* Projects list */}
          <div className="ml-4 flex flex-col gap-6">
            {projectData.projects.map((project, index) => (
              <div key={project.slug.current} className="group">
                {/* Project header */}
                <div className="mb-2">
                  <span className="monokai-keyword">const</span>{" "}
                  <span className="monokai-value">project{index + 1}</span>{" "}
                  <span className="text-textMuted">= {"{"}</span>
                </div>

                {/* Project details */}
                <div className="ml-4 p-4 bg-backgroundLight border-l-2 border-primary/50 hover:border-primary transition-all duration-300 rounded">
                  <div className="flex flex-col gap-3">
                    {/* Title */}
                    <div className="flex items-center gap-2">
                      <span className="monokai-property">title</span>
                      <span className="text-textMuted">:</span>
                      <Link href={`/projects/${project.slug.current}`}>
                        <span className="monokai-string hover:text-accent transition-colors cursor-pointer text-base">
                          "{project.title}"
                        </span>
                      </Link>
                    </div>

                    {/* Description */}
                    <div className="flex items-start gap-2">
                      <span className="monokai-property">description</span>
                      <span className="text-textMuted">:</span>
                      <span className="text-textMuted">&quot;{project.description}&quot;</span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 mt-2">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          className="flex items-center gap-2 text-cyan hover:text-accent transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                          <span className="text-sm">Source</span>
                        </Link>
                      )}
                      {project.url && (
                        <Link
                          href={project.url}
                          target="_blank"
                          className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">Live Demo</span>
                        </Link>
                      )}
                    </div>

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex items-start gap-2 mt-2">
                        <span className="monokai-property">tags</span>
                        <span className="text-textMuted">: [</span>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag: string, idx: number) => (
                            <span key={tag}>
                              <span className="monokai-string text-xs">&quot;{tag}&quot;</span>
                              {idx < project.tags.length - 1 && <span className="text-textMuted">, </span>}
                            </span>
                          ))}
                        </div>
                        <span className="text-textMuted">]</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-textMuted">{"},"}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="mt-4">
            <span className="text-textMuted">{"};"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
