"use client";
import useProjects from "@/lib/hooks/useProjects";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const { projectData, loading } = useProjects();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="font-mono text-sm">
          <p className="monokai-comment">{'// Loading project...'}</p>
        </div>
      </div>
    );
  }

  if (!loading && projectData.projects.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="font-mono text-sm">
          <p className="monokai-comment">{'// No projects found'}</p>
        </div>
      </div>
    );
  }

  const project = projectData.projects.find((project) => project.slug.current === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-text">
        <div className="border-b border-border bg-backgroundDark">
          <div className="flex items-center h-12 px-4">
            <Link
              href="/projects"
              className="flex items-center gap-2 text-textMuted hover:text-text transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono text-sm">Back to Projects</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[calc(100vh-3rem)]">
          <div className="font-mono text-sm">
            <p className="monokai-comment">{'// Project not found'}</p>
          </div>
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
            href="/projects"
            className="flex items-center gap-2 text-textMuted hover:text-text transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm">Back to Projects</span>
          </Link>
        </div>

        {/* Tab bar */}
        <div className="flex items-center h-9 px-4 bg-backgroundLight">
          <div className="flex items-center gap-2 px-3 h-full border-t-2 border-primary bg-background">
            <span className="font-mono text-sm text-text">{project.slug.current}.tsx</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto p-8">
        <div className="font-mono text-sm leading-relaxed">
          {/* Header comment */}
          <div className="mb-6">
            <span className="monokai-comment">{'/**'}</span>
            <div className="monokai-comment"> * {project.title}</div>
            <div className="monokai-comment"> * {project.description}</div>
            <span className="monokai-comment">{' */'}</span>
          </div>

          {/* Import statements */}
          <div className="mb-6">
            <div className="monokai-keyword">import</div>{" "}
            <span className="text-textMuted">{"{"}</span>{" "}
            <span className="monokai-value">ProjectDetails</span>{" "}
            <span className="text-textMuted">{"}"}</span>{" "}
            <span className="monokai-keyword">from</span>{" "}
            <span className="monokai-string">&quot;@/types&quot;</span>
            <span className="text-textMuted">;</span>
          </div>

          {/* Interface */}
          <div className="mb-6">
            <div className="mb-2">
              <span className="monokai-keyword">interface</span>{" "}
              <span className="monokai-value">ProjectConfig</span>{" "}
              <span className="text-textMuted">{"{"}</span>
            </div>
            <div className="ml-4">
              <div><span className="monokai-property">title</span><span className="text-textMuted">:</span> <span className="monokai-keyword">string</span><span className="text-textMuted">;</span></div>
              <div><span className="monokai-property">description</span><span className="text-textMuted">:</span> <span className="monokai-keyword">string</span><span className="text-textMuted">;</span></div>
              <div><span className="monokai-property">technologies</span><span className="text-textMuted">:</span> <span className="monokai-keyword">string</span><span className="text-textMuted">[];</span></div>
              <div><span className="monokai-property">links</span><span className="text-textMuted">:</span> <span className="text-textMuted">{"{"}</span></div>
              <div className="ml-4">
                <div><span className="monokai-property">github</span><span className="text-textMuted">?:</span> <span className="monokai-keyword">string</span><span className="text-textMuted">;</span></div>
                <div><span className="monokai-property">live</span><span className="text-textMuted">?:</span> <span className="monokai-keyword">string</span><span className="text-textMuted">;</span></div>
              </div>
              <div><span className="text-textMuted">{"};"}</span></div>
            </div>
            <span className="text-textMuted">{"}"}</span>
          </div>

          {/* Project constant */}
          <div className="mb-6">
            <div className="mb-2">
              <span className="monokai-keyword">export const</span>{" "}
              <span className="monokai-value">project</span>
              <span className="text-textMuted">:</span>{" "}
              <span className="monokai-value">ProjectConfig</span>{" "}
              <span className="text-textMuted">= {"{"}</span>
            </div>

            <div className="ml-4 p-6 bg-backgroundLight border-l-2 border-primary rounded">
              <div className="flex flex-col gap-4">
                {/* Title */}
                <div className="flex items-start gap-2">
                  <span className="monokai-property">title</span>
                  <span className="text-textMuted">:</span>
                  <span className="monokai-string text-xl">&quot;{project.title}&quot;</span>
                  <span className="text-textMuted">,</span>
                </div>

                {/* Description */}
                <div className="flex items-start gap-2">
                  <span className="monokai-property">description</span>
                  <span className="text-textMuted">:</span>
                  <div className="flex-1">
                    <span className="text-text">&quot;{project.description}&quot;</span>
                    <span className="text-textMuted">,</span>
                  </div>
                </div>

                {/* Technologies */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex items-start gap-2">
                    <span className="monokai-property">technologies</span>
                    <span className="text-textMuted">: [</span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string, idx: number) => (
                        <div key={tag} className="flex items-center">
                          <span className="px-2 py-1 bg-backgroundDark rounded border border-border">
                            <span className="monokai-string text-xs">&quot;{tag}&quot;</span>
                          </span>
                          {idx < project.tags.length - 1 && <span className="text-textMuted ml-1">,</span>}
                        </div>
                      ))}
                    </div>
                    <span className="text-textMuted">],</span>
                  </div>
                )}

                {/* Links */}
                <div className="flex items-start gap-2">
                  <span className="monokai-property">links</span>
                  <span className="text-textMuted">: {"{"}</span>
                  <div className="flex flex-col gap-3">
                    {project.github && (
                      <div className="flex items-center gap-2">
                        <span className="monokai-property">github</span>
                        <span className="text-textMuted">:</span>
                        <Link
                          href={project.github}
                          target="_blank"
                          className="flex items-center gap-2 text-cyan hover:text-accent transition-colors group"
                        >
                          <FaGithub className="w-4 h-4" />
                          <span className="monokai-string group-hover:text-accent">&quot;View Source&quot;</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <span className="text-textMuted">,</span>
                      </div>
                    )}
                    {project.url && (
                      <div className="flex items-center gap-2">
                        <span className="monokai-property">live</span>
                        <span className="text-textMuted">:</span>
                        <Link
                          href={project.url}
                          target="_blank"
                          className="flex items-center gap-2 text-secondary hover:text-accent transition-colors group"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="monokai-string group-hover:text-accent">&quot;Live Demo&quot;</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <span className="text-textMuted">,</span>
                      </div>
                    )}
                  </div>
                  <span className="text-textMuted">{"}"}</span>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <span className="text-textMuted">{"};"}</span>
            </div>
          </div>

          {/* Export statement */}
          <div className="mt-8">
            <span className="monokai-keyword">export default</span>{" "}
            <span className="monokai-value">project</span>
            <span className="text-textMuted">;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
