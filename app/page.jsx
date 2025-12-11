export const metadata = {
  title: 'Pattern Blueprint Theory — Home',
  description: 'Introduction to the Blueprint Efficiency Principle, Manifest, and Test.',
};

export default function HomePage() {
  return (
    <div className="pb-page">
      <main className="pb-page-content">
        <div className="pb-section py-4">
          <div className="pb-container max-w-2xl" style={{ maxWidth: '720px' }}>
            <h1 className="pb-h1 mt-10 mb-6">Pattern Blueprint Theory</h1>
            <p className="pb-body mt-4">
              A simple structure for understanding patterns, complexity, and cognitive efficiency.
            </p>
          </div>
        </div>

        <div className="pb-section py-4">
          <div className="pb-container max-w-2xl" style={{ maxWidth: '720px' }}>
            <h2 className="pb-h2">What is Pattern Blueprint Theory</h2>
            <p className="pb-body mt-2">
              Theory outlines the Blueprint Efficiency Principle. Manifest details the definitions, principles, and modes. Test maps you to a cognitive pattern profile. Together they form one path: understand the framework, see the evidence, and get your own pattern readout.
            </p>
          </div>
        </div>

        <div className="pb-section py-4">
          <div className="pb-container max-w-2xl" style={{ maxWidth: '720px' }}>
            <h2 className="pb-h2">The Blueprint Efficiency Principle</h2>
            <p className="pb-body mt-2">
              The theory exists to explain how systems form stable patterns with minimal energy and informational loss. It offers a clear lens on cognition, machine learning, and structured creative workflows without marketing noise.
            </p>
          </div>
        </div>

        <div className="pb-section py-4">
          <div className="pb-container max-w-2xl" style={{ maxWidth: '720px' }}>
            <div className="pb-highlight-block">
              <h2 className="pb-h2">Explore the Theory</h2>
              <p className="pb-body mt-2">
                Learn how the Blueprint Efficiency Principle defines the structure of cognitive modes and pattern dynamics. Explore the Manifest, read the Theory, or try the Test.
              </p>
              <a
                href="/theory"
                className="inline-block mt-4 pb-body bg-white/5 hover:bg-white/10 px-4 py-2 rounded-md transition"
              >
                Open Theory Page
              </a>
            </div>
          </div>
        </div>

        <div className="pb-section py-4">
          <div className="pb-container max-w-2xl" style={{ maxWidth: '720px' }}>
            <p className="pb-body pb-text-secondary mb-4">
              Explore the Manifest for the full framework, read the Theory for the core principle, or start the Test to get your cognitive pattern profile.
            </p>
            <a
              href="/test"
              className="inline-block pb-body bg-white/5 hover:bg-white/10 px-5 py-3 rounded-md transition"
            >
              Take the Blueprint Test
            </a>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="pb-section-sm pb-bg-secondary">
        <div className="pb-container pb-text-center">
          <p className="pb-caption pb-text-tertiary">
            © 2025 PatternBlueprint
          </p>
        </div>
      </footer>
    </div>
  );
}

