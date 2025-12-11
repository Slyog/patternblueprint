import TestModule from '../../components/test/TestModule';

export const metadata = {
  title: 'Blueprint Test — Pattern Blueprint Theory',
  description: 'Discover your cognitive pattern blueprint through interactive assessment.',
};

export default function TestPage() {
  return (
    <div className="pb-page">
      <main className="pb-page-content">
        
        {/* Header */}
        <div className="pb-section py-4">
          <div className="pb-container max-w-2xl" style={{ maxWidth: '720px' }}>
            <h1 className="pb-h1 pb-text-center mt-10 mb-6">
              Blueprint Test
            </h1>
            <p className="pb-lead pb-text-center pb-text-secondary pb-mb-10">
              This test reveals how you recognize, organize, and extend patterns—the same logic Alhazen uses to structure scenes.
            </p>
          </div>
        </div>

        <div className="pb-section py-4">
          <div className="pb-container max-w-2xl" style={{ maxWidth: '720px' }}>
            <h2 className="pb-h2 text-xl font-semibold mt-8 mb-3">What This Test Measures</h2>
            <p className="pb-body mt-2 leading-relaxed">
              The test shows how you perceive, order, and process patterns—aligned with the Blueprint Efficiency Principle behind Alhazen.
            </p>
            <p className="pb-body mt-2 leading-relaxed">
              10 questions analyze your pattern orientation and map you into a thinking profile.
            </p>
            <p className="pb-body mt-2 leading-relaxed">
              Results classify you as Vector Thinker · Linear Thinker · Mixed Thinker, with a note on how your style can leverage Alhazen more efficiently.
            </p>
          </div>
        </div>

        {/* Test Module Container */}
        <div className="pb-section py-4">
          <TestModule />
        </div>

        {/* Footer */}
        <section className="pb-section-sm">
          <div className="pb-container pb-text-center" style={{ maxWidth: '720px' }}>
            <p className="pb-caption pb-text-tertiary">
              © 2025 PatternBlueprint
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}

