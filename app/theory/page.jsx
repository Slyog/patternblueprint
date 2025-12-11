export const metadata = {
  title: 'Blueprint Efficiency Principle — Pattern Blueprint Theory',
  description: 'A dedicated overview of the Blueprint Efficiency Principle and its core metrics.',
};

export default function TheoryPage() {
  return (
    <div className="pb-page">
      <main className="pb-page-content">
        <div className="pb-section py-4">
          <h1 className="pb-h1 mt-10 mb-6">Blueprint Efficiency Principle</h1>
          <p className="pb-body mt-4 max-w-2xl leading-relaxed">
            The Blueprint Efficiency Principle explains how systems generate patterns efficiently—across AI, cloud, creative workflows, and human cognition.
          </p>
        </div>

        <div className="pb-section py-4">
          <h2 className="pb-h2 text-xl font-semibold mt-8 mb-3">Core Metrics</h2>
          <div className="pb-highlight-block space-y-2 pb-body mt-2 max-w-2xl">
            <p className="leading-relaxed"><strong>Effective Energy (<span className="pb-inline-code">E_eff</span>).</strong> Energy required to keep a pattern stable.</p>
            <p className="leading-relaxed"><strong>Effective Information (<span className="pb-inline-code">I_eff</span>).</strong> Useful information after noise is filtered out.</p>
            <p className="leading-relaxed"><strong>Pattern Complexity (<span className="pb-inline-code">K</span>).</strong> Number of stable patterns (<span className="pb-inline-code">K = log₂(M)</span>).</p>
            <p className="leading-relaxed"><strong>Order (<span className="pb-inline-code">O</span>).</strong> Stability and consistency of patterns over time.</p>
          </div>
        </div>

        <div className="pb-section py-4">
          <h2 className="pb-h2 text-xl font-semibold mt-8 mb-3">Theorem</h2>
          <div className="pb-highlight-block pb-body mt-2 max-w-2xl leading-relaxed">
            Systeme sind effizient, wenn sie hohe Ordnung und hohe Musterkomplexität mit minimaler Energie und minimalem Informationsverlust erzeugen.
            <p className="pb-body mt-3">
              <span className="pb-inline-code">Efficiency ∝ (O × K) / (E_eff × I_eff)</span>
            </p>
          </div>
        </div>

        <div className="pb-section py-4">
          <h2 className="pb-h2 text-xl font-semibold mt-8 mb-3">Predictive Statements</h2>
          <p className="pb-body mt-2 max-w-2xl leading-relaxed">Reducing noise improves learning stability in machine learning systems.</p>
          <p className="pb-body max-w-2xl leading-relaxed">Cloud architectures scale more efficiently when pattern complexity remains stable.</p>
          <p className="pb-body max-w-2xl leading-relaxed">Organizations and armies collapse when effective energy rises and order decreases.</p>
        </div>

        <div className="pb-section py-4">
          <h2 className="pb-h2 text-xl font-semibold mt-8 mb-3">Cross-Domain Example</h2>
          <p className="pb-body mt-2 max-w-2xl leading-relaxed">
            Carrhae demonstrates a collapse in order leading to increased effective energy. Neural networks experience similar failures under noise and overfitting. Cloud systems face the same breakdown when architecture becomes unstable.
          </p>
          <p className="pb-body mt-2 max-w-2xl leading-relaxed">
            Vager Prompt → Noise hoch → instabile Shots. Klarer Prompt + Metadata → Noise runter → stabile Szene.
          </p>
        </div>

        <div className="pb-section py-4">
          <h2 className="pb-h2 text-xl font-semibold mt-8 mb-3">The Real Value</h2>
          <p className="pb-body mt-2 max-w-2xl leading-relaxed">
            Stabile Szenen bedeuten wenig Noise, klare Struktur und konsistente Shots – das reduziert Renderkosten und verbessert Output-Qualität.
          </p>
        </div>

        <div className="pb-section py-4">
          <h2 className="pb-h2 text-xl font-semibold mt-8 mb-3">System Diagram</h2>
          <div
            className="pb-highlight-block mt-4 flex items-center justify-center max-w-2xl"
            style={{ height: "240px", borderStyle: "dashed", borderColor: "rgba(94,224,255,0.25)" }}
          >
            <p className="pb-body opacity-60">System diagram forthcoming to visualize Blueprint Efficiency interactions.</p>
          </div>
        </div>

        <div className="pb-section py-4">
          <h2 className="pb-h2 text-xl font-semibold mt-8 mb-3">Relation to the Pattern Blueprint Test</h2>
          <p className="pb-body mt-2 max-w-2xl leading-relaxed">
            The test measures cognitive modes that emerge from the Blueprint Efficiency Principle. 
            Patterns such as directionality, breadth of attention, variability, and stability map directly to the four core modes: 
            <span className="pb-inline-code">Vector</span>,
            <span className="pb-inline-code">Field</span>,
            <span className="pb-inline-code">Drift</span>,
            and
            <span className="pb-inline-code">Anchor</span>.
          </p>
          <p className="pb-body mt-2 max-w-2xl leading-relaxed">
            This creates a practical interface between the theoretical framework and individual cognitive profiles.
          </p>
        </div>
      </main>
    </div>
  );
}

