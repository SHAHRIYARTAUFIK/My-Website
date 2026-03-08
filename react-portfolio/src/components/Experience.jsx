const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-label">Career</div>
                    <h2 className="section-title">Professional <span className="gradient-text">Experience</span></h2>
                </div>
                <div className="timeline">
                    <div className="tl-item reveal">
                        <div className="tl-dot"></div>
                        <div className="tl-content liquid-glass liquid-glass-continuous" style={{ '--shimmer-delay': '0s' }}>
                            <h3>Full Stack Developer</h3>
                            <div className="tl-date">April 2025 - Present</div>
                            <div className="tl-place">Alpha Codes Inc.</div>
                            <p>Contributing to both frontend and backend development of scalable web platforms. Working extensively with React and Node.js for creating templates for e-commerce websites.</p>
                        </div>
                    </div>

                    <div className="tl-item reveal reveal-delay-1">
                        <div className="tl-dot"></div>
                        <div className="tl-content liquid-glass liquid-glass-continuous" style={{ '--shimmer-delay': '1s' }}>
                            <h3>Generative AI Engineer</h3>
                            <div className="tl-date">Oct 2025 - Dec 2025</div>
                            <div className="tl-place">Amazon Web Services (AWS) &middot; Internship</div>
                            <p>Dived deep into the mechanics of Generative AI, moving from simple data processing to creative output. Explored Foundation Models (FMs), Large Language Models (LLMs), Prompt Engineering, Transformer Architectures, and Cloud-Scale AI leveraging AWS infrastructure.</p>
                            <div style={{ marginTop: '12px', fontSize: '0.85rem', color: 'var(--text3)' }}>
                                <span style={{ color: 'var(--accent2)' }}>Skills:</span> Large Language Models (LLM) &middot; Cloud Computing &middot; LLMOps &middot; Local LLMs &middot; Prompt Injection
                            </div>
                            <a href="https://drive.google.com/file/d/1fz4H4PZ39DUV3VBLDi_5hl_4VDtKbgaE/view?usp=sharing" className="cert-link" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px', fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 500, transition: 'color 0.3s ease' }}>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                </svg>
                                View AWS Certificate
                            </a>
                        </div>
                    </div>

                    <div className="tl-item reveal reveal-delay-2">
                        <div className="tl-dot"></div>
                        <div className="tl-content liquid-glass liquid-glass-continuous" style={{ '--shimmer-delay': '2s' }}>
                            <h3>AI & ML Intern (Supported by Google)</h3>
                            <div className="tl-date">Jul 2025 - Sep 2025</div>
                            <div className="tl-place">All India Council for Technical Education (AICTE)</div>
                            <ul style={{ paddingLeft: '20px', color: 'var(--text2)', fontSize: '0.88rem', marginTop: '8px' }}>
                                <li style={{ marginBottom: '6px' }}>Completed 10-week AI/ML virtual internship</li>
                                <li style={{ marginBottom: '6px' }}>Worked on ML concepts, model building, and deployment basics</li>
                                <li style={{ marginBottom: '6px' }}>Gained exposure to Google-supported learning modules</li>
                                <li>Developed hands-on mini projects</li>
                            </ul>
                            <div style={{ marginTop: '12px', fontSize: '0.85rem', color: 'var(--text3)' }}>
                                <span style={{ color: 'var(--accent2)' }}>Skills:</span> Artificial Intelligence (AI) &middot; Machine Learning
                            </div>
                            <a href="https://drive.google.com/file/d/1Tykamm1hTmY36A6Hq_Wdhm_aOxImayBj/view?usp=sharing" className="cert-link" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px', fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 500, transition: 'color 0.3s ease' }}>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                </svg>
                                View AICTE Certificate
                            </a>
                        </div>
                    </div>

                    <div className="tl-item reveal reveal-delay-3">
                        <div className="tl-dot"></div>
                        <div className="tl-content liquid-glass liquid-glass-continuous" style={{ '--shimmer-delay': '3.5s' }}>
                            <h3>Front-End Web Developer</h3>
                            <div className="tl-date">Jan 2025 - Feb 2025</div>
                            <div className="tl-place">IoT Bakeoff &mdash; KIIT FEST 8.0</div>
                            <p>Led a team of developers creating an interactive platform with live quiz sessions. Successfully managed live participation from 17 teams with real-time quizzes and instant feedback.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
