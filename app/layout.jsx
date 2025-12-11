import '../components/ui/index.css';

export const metadata = {
  title: 'The Pattern Blueprint Theory',
  description: 'A conceptual framework for understanding how patterns shape awareness, behavior, and modes of thinking.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <nav className="w-full pb-body px-6 py-4 bg-black/20 border-b border-white/5 flex gap-6">
          <a href="/" className="hover:opacity-80 pb-accent-hover transition">Home</a>
          <a href="/manifest" className="hover:opacity-80 pb-accent-hover transition">Manifest</a>
          <a href="/test" className="hover:opacity-80 pb-accent-hover transition">Test</a>
          <a href="/theory" className="hover:opacity-80 pb-accent-hover transition">Theory</a>
        </nav>
        <div className="mt-16">
          <div className="pb-container">
            {children}
          </div>
          <footer className="pb-section mt-12 border-t border-white/10">
            <div className="pb-container py-8 text-sm opacity-70">
              <div className="flex flex-col gap-2">
                <div>© 2025 PatternBlueprint</div>
                <div className="flex gap-4">
                  <a href="/" className="pb-accent-hover">Home</a>
                  <a href="/manifest" className="pb-accent-hover">Manifest</a>
                  <a href="/theory" className="pb-accent-hover">Theory</a>
                  <a href="/test" className="pb-accent-hover">Test</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

