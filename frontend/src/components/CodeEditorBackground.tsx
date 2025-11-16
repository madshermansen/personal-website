"use client";

export default function CodeEditorBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Ambient glow - top left */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%)'
        }}
      />

      {/* Ambient glow - bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)'
        }}
      />

      {/* Scanline effect */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(99, 102, 241, 0.5) 50%)',
          backgroundSize: '100% 4px',
          animation: 'scanline 8s linear infinite'
        }}
      />

      <style jsx>{`
        @keyframes scanline {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100%;
          }
        }
      `}</style>
    </div>
  );
}
