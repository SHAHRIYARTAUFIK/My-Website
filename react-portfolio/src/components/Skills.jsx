const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-label">My Experiences</div>
                    <h2 className="section-title">Technologies <span className="gradient-text">I've Used</span></h2>
                    <p className="section-desc">A versatile toolkit spanning full-stack development, AI/ML, and modern design</p>
                </div>
                <div className="skills-container">
                    <div className="skill-category liquid-glass liquid-glass-continuous reveal" style={{ '--shimmer-delay': '0s' }}>
                        <h3>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>Frontend
                        </h3>
                        <div className="skill-tags">
                            <span className="skill-tag">HTML5</span><span className="skill-tag">CSS3</span><span className="skill-tag">JavaScript (ES6+)</span>
                            <span className="skill-tag">TypeScript</span><span className="skill-tag">React</span><span className="skill-tag">Next.js</span>
                            <span className="skill-tag">Vue.js</span><span className="skill-tag">TailwindCSS</span><span className="skill-tag">SASS</span>
                            <span className="skill-tag">Responsive Design</span>
                        </div>
                    </div>
                    <div className="skill-category liquid-glass liquid-glass-continuous reveal reveal-delay-1" style={{ '--shimmer-delay': '1.5s' }}>
                        <h3>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                            </svg>Backend
                        </h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Node.js</span><span className="skill-tag">Express.js</span><span className="skill-tag">Python</span>
                            <span className="skill-tag">Django</span><span className="skill-tag">Flask</span><span className="skill-tag">REST APIs</span>
                            <span className="skill-tag">GraphQL</span><span className="skill-tag">MongoDB</span><span className="skill-tag">PostgreSQL</span>
                            <span className="skill-tag">MySQL</span>
                        </div>
                    </div>
                    <div className="skill-category liquid-glass liquid-glass-continuous reveal reveal-delay-2" style={{ '--shimmer-delay': '3s' }}>
                        <h3>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>AI & ML
                        </h3>
                        <div className="skill-tags">
                            <span className="skill-tag">TensorFlow</span><span className="skill-tag">PyTorch</span><span className="skill-tag">Scikit-learn</span>
                            <span className="skill-tag">NLP</span><span className="skill-tag">OpenCV</span><span className="skill-tag">Data Analysis</span>
                        </div>
                    </div>
                    <div className="skill-category liquid-glass liquid-glass-continuous reveal reveal-delay-3" style={{ '--shimmer-delay': '0.5s' }}>
                        <h3>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                            </svg>UI/UX Design
                        </h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Figma</span><span className="skill-tag">Adobe XD</span><span className="skill-tag">Prototyping</span>
                            <span className="skill-tag">Wireframing</span><span className="skill-tag">Usability Testing</span><span className="skill-tag">User Research</span>
                        </div>
                    </div>
                    <div className="skill-category liquid-glass liquid-glass-continuous reveal reveal-delay-4" style={{ '--shimmer-delay': '2s' }}>
                        <h3>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>DSA
                        </h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Problem Solving</span><span className="skill-tag">Algorithm Design</span>
                            <span className="skill-tag">Arrays & Trees</span><span className="skill-tag">Graphs</span>
                        </div>
                    </div>
                    <div className="skill-category liquid-glass liquid-glass-continuous reveal reveal-delay-5" style={{ '--shimmer-delay': '3.5s' }}>
                        <h3>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>Tools
                        </h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Git</span><span className="skill-tag">GitHub</span><span className="skill-tag">Docker</span>
                            <span className="skill-tag">AWS</span><span className="skill-tag">Google Cloud</span><span className="skill-tag">VS Code</span>
                            <span className="skill-tag">Agile/Scrum</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
