import React from 'react';

interface CompleteSectionsProps {
  isVisible: boolean;
}

const CompleteSections = ({ isVisible }: CompleteSectionsProps) => {
  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Start Here Section */}
      <section id="start-here-section" className="start-here-section">
        <div className="section-container">
          <h2 className="section-title">
            <span style={{ color: 'var(--color-lovable-black)' }}>Ready to</span>{' '}
            <span className="pearlescent-text">Flip the Script</span>?
          </h2>
          
          <div className="pillar-cards-grid">
            <article className="pillar-card">
              <div className="icon-placeholder unlearn-icon" aria-label="Unlearn icon placeholder"></div>
              <h3 className="pillar-headline">Unlearn Survival Scripts</h3>
              <p className="pillar-copy">The lies we inherited are the loops we repeat.</p>
            </article>
            
            <article className="pillar-card">
              <div className="icon-placeholder rebuild-icon" aria-label="Rebuild icon placeholder"></div>
              <h3 className="pillar-headline">Rebuild from Truth</h3>
              <p className="pillar-copy">No more templates built in trauma.</p>
            </article>
            
            <article className="pillar-card">
              <div className="icon-placeholder stack-icon" aria-label="Stack icon placeholder"></div>
              <h3 className="pillar-headline">Stack Without Selling Your Soul</h3>
              <p className="pillar-copy">Wealth is power, but peace is profit.</p>
            </article>
            
            <article className="pillar-card">
              <div className="icon-placeholder transcend-icon" aria-label="Transcend icon placeholder"></div>
              <h3 className="pillar-headline">Transcend the Cycle</h3>
              <p className="pillar-copy">Build what couldn't be built before, by becoming who you've never seen.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Standard Thought Way Section */}
      <section id="standard-thought-way-section" className="standard-thought-way-section">
        <div className="section-container">
          <h2 className="section-title">
            <span style={{ color: 'var(--color-lovable-black)' }}>The</span>{' '}
            <span className="pearlescent-text">Standard Thought Way</span>
          </h2>
          
          <div className="process-steps-container">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3 className="step-title">UNLEARN</h3>
              <p className="step-description">Call out survival patterns that aren't serving you.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <h3 className="step-title">REBUILD</h3>
              <p className="step-description">Design beliefs, systems, and identity from truth.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <h3 className="step-title">STACK</h3>
              <p className="step-description">Make money, gain power, build without burnout.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <h3 className="step-title">TRANSCEND</h3>
              <p className="step-description">Break generational loops for good. Live free. Die full.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real People / Real Progress Section */}
      <section id="real-progress-section" className="real-progress-section">
        <div className="section-container">
          <h2 className="section-title">
            <span style={{ color: 'var(--color-lovable-black)' }}>Real</span>{' '}
            <span className="pearlescent-text">People</span>{' '}
            <span style={{ color: 'var(--color-lovable-black)' }}>/</span>{' '}
            <span className="pearlescent-text">Real Progress</span>
          </h2>
          
          <div className="testimonials-grid">
            <article className="testimonial-card">
              <h4 className="testimonial-name">Marcus J.</h4>
              <blockquote className="testimonial-quote">
                "Finally broke the cycle that kept me broke and broken."
              </blockquote>
              <p className="testimonial-struggle">
                <strong>Struggled With:</strong> Inherited debt mindset and fear of investing, stuck in survival mode despite working 60+ hours a week.
              </p>
              <p className="testimonial-solution">
                <strong>How Standard Thought Helped:</strong> Unlearned scarcity programming, rebuilt financial identity, now stacking wealth with purpose and peace.
              </p>
            </article>
            
            <article className="testimonial-card">
              <h4 className="testimonial-name">Keisha M.</h4>
              <blockquote className="testimonial-quote">
                "Stopped living other people's blueprint and started building my own."
              </blockquote>
              <p className="testimonial-struggle">
                <strong>Struggled With:</strong> People-pleasing patterns and imposter syndrome that kept her playing small in business and relationships.
              </p>
              <p className="testimonial-solution">
                <strong>How Standard Thought Helped:</strong> Rebuilt self-worth from truth, transcended family trauma patterns, now leading with authentic power.
              </p>
            </article>
            
            <article className="testimonial-card">
              <h4 className="testimonial-name">David R.</h4>
              <blockquote className="testimonial-quote">
                "From hood trauma to generational wealth—same person, different programming."
              </blockquote>
              <p className="testimonial-struggle">
                <strong>Struggled With:</strong> Anger issues and self-sabotage that destroyed relationships and business opportunities repeatedly.
              </p>
              <p className="testimonial-solution">
                <strong>How Standard Thought Helped:</strong> Unlearned toxic masculinity scripts, rebuilt emotional intelligence, now building legacy without burning bridges.
              </p>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        /* Section Layout */
        .start-here-section,
        .standard-thought-way-section,
        .real-progress-section {
          padding: 4rem 0;
          margin: 2rem 0;
          position: relative;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          text-align: center;
          margin-bottom: 3rem;
          line-height: 1.1;
          font-family: 'Inter', sans-serif;
        }

        /* Start Here Section */
        .pillar-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .pillar-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .pillar-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.15);
        }

        .icon-placeholder {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          background: var(--color-lovable-pearlescent-yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .icon-placeholder::before {
          content: '●';
          font-size: 2rem;
          color: var(--color-lovable-black);
        }

        .unlearn-icon::before { content: '🧠'; }
        .rebuild-icon::before { content: '🔨'; }
        .stack-icon::before { content: '💰'; }
        .transcend-icon::before { content: '🚀'; }

        .pillar-headline {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--color-lovable-black);
          line-height: 1.2;
        }

        .pillar-copy {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--color-lovable-black);
          opacity: 0.8;
        }

        /* Standard Thought Way Section */
        .process-steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .process-step {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          position: relative;
          transition: all 0.3s ease;
        }

        .process-step:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.15);
        }

        .step-number {
          font-size: 3rem;
          font-weight: 900;
          color: var(--color-lovable-pearlescent-yellow);
          margin-bottom: 1rem;
          font-family: 'Permanent Marker', cursive;
          text-shadow: 2px 2px 0px rgba(0,0,0,0.2);
        }

        .step-title {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--color-lovable-black);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .step-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--color-lovable-black);
          opacity: 0.9;
        }

        /* Real Progress Section */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .testimonial-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.15);
        }

        .testimonial-name {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--color-lovable-pearlescent-yellow);
        }

        .testimonial-quote {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--color-lovable-black);
          font-style: italic;
          line-height: 1.4;
          position: relative;
          padding-left: 1rem;
          border-left: 3px solid var(--color-lovable-pearlescent-yellow);
        }

        .testimonial-struggle,
        .testimonial-solution {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1rem;
          color: var(--color-lovable-black);
          opacity: 0.9;
        }

        .testimonial-struggle strong,
        .testimonial-solution strong {
          color: var(--color-lovable-pearlescent-yellow);
          font-weight: 700;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .section-container {
            padding: 0 1rem;
          }
          
          .pillar-cards-grid,
          .process-steps-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .pillar-card,
          .process-step,
          .testimonial-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .start-here-section,
          .standard-thought-way-section,
          .real-progress-section {
            padding: 2rem 0;
          }
          
          .section-title {
            margin-bottom: 2rem;
          }
          
          .pillar-card,
          .process-step,
          .testimonial-card {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CompleteSections;