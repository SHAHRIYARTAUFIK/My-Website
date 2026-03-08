const Education = () => {
    return (
        <section id="education">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-label">Education</div>
                    <h2 className="section-title">Academic <span className="gradient-text">Background</span></h2>
                </div>
                <div className="timeline">
                    <div className="tl-item reveal">
                        <div className="tl-dot"></div>
                        <div className="tl-content liquid-glass liquid-glass-continuous" style={{ '--shimmer-delay': '0s' }}>
                            <h3>B.Tech in Electronics & Computer Science Engineering</h3>
                            <div className="tl-date">2023 - Present</div>
                            <div className="tl-place">Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar</div>
                            <p>Currently pursuing B.Tech at KIIT. Enriched academic journey with hands-on projects and practical experience in various technology domains.</p>
                        </div>
                    </div>
                    <div className="tl-item reveal reveal-delay-1">
                        <div className="tl-dot"></div>
                        <div className="tl-content liquid-glass liquid-glass-continuous" style={{ '--shimmer-delay': '1s' }}>
                            <h3>Higher Secondary (PCMCs)</h3>
                            <div className="tl-date">2021 - 2023</div>
                            <div className="tl-place">Pathfinder Higher Secondary Public School</div>
                            <p>Completed 11th and 12th education in Physics, Chemistry, Mathematics, Computer Science. Introduction with C programming begins here.</p>
                        </div>
                    </div>
                    <div className="tl-item reveal reveal-delay-2">
                        <div className="tl-dot"></div>
                        <div className="tl-content liquid-glass liquid-glass-continuous" style={{ '--shimmer-delay': '2.5s' }}>
                            <h3>Secondary</h3>
                            <div className="tl-date">Jan 2012 - Mar 2021</div>
                            <div className="tl-place">Blooming Dale Academy</div>
                            <p><strong>Grade:</strong> A+<br /><span style={{ marginTop: '8px', display: 'inline-block' }}><strong>Activities and societies:</strong> Cricket, Football, BasketBall, Mobile Games</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
