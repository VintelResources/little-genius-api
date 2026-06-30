import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

const niches = [
    { title: "General Knowledge", icon: "✦", description: "Everyday facts and broad knowledge challenges." },
    { title: "Science & Nature", icon: "◌", description: "Biology, physics, chemistry, and the natural world." },
    { title: "History & Geography", icon: "◈", description: "Important people, places, and events." },
    { title: "Toddler Fun", icon: "★", description: "Simple playful learning for young children." },
    { title: "Language & Arts", icon: "Aa", description: "Words, sounds, reading, and creativity." },
    { title: "Technology & Space", icon: "◉", description: "Computers, innovation, planets, and beyond." },
];

export default function Welcome() {
    const [selectedNiche, setSelectedNiche] = useState<string | null>(null);

    return (
        <>
            <Head title="Little Genius | Discovery Trivia" />

            <style>{`
                * { box-sizing: border-box; }

                body {
                    margin: 0;
                    background: #f4f6fb;
                    color: #18213a;
                    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                }

                .lg-shell {
                    min-height: 100vh;
                    background:
                        radial-gradient(circle at 12% 5%, rgba(79, 70, 229, .10), transparent 25rem),
                        radial-gradient(circle at 85% 12%, rgba(99, 102, 241, .08), transparent 24rem),
                        #f5f7fc;
                }

                .lg-header {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 22px;
                    min-height: 92px;
                    padding: 16px clamp(20px, 4vw, 64px);
                    background: rgba(255,255,255,.95);
                    border-bottom: 1px solid #e7eaf3;
                    backdrop-filter: blur(16px);
                }

                .lg-brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: #16213b;
                    text-decoration: none;
                    flex-shrink: 0;
                }

                .lg-logo {
                    display: grid;
                    place-items: center;
                    width: 42px;
                    height: 42px;
                    border-radius: 14px;
                    color: white;
                    font-size: 15px;
                    font-weight: 900;
                    background: linear-gradient(135deg, #5348ed, #6a55f7);
                    box-shadow: 0 10px 20px rgba(79,70,229,.22);
                }

                .lg-brand-name {
                    display: grid;
                    line-height: 1.02;
                    font-weight: 900;
                    font-size: 17px;
                    letter-spacing: -.7px;
                }

                .lg-nav {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: clamp(14px, 2.1vw, 34px);
                    flex: 1;
                }

                .lg-nav a {
                    color: #6d7890;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: .05em;
                    text-decoration: none;
                    text-transform: uppercase;
                    transition: .2s ease;
                    white-space: nowrap;
                }

                .lg-nav a:hover { color: #4f46e5; }

                .lg-nav .active {
                    padding: 11px 18px;
                    color: white;
                    border-radius: 12px;
                    background: linear-gradient(135deg, #594cf0, #493be3);
                    box-shadow: 0 10px 18px rgba(79,70,229,.20);
                }

                .lg-user {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    flex-shrink: 0;
                }

                .lg-balance {
                    min-width: 95px;
                    padding: 10px 14px;
                    border: 1px solid #edf0f6;
                    border-radius: 16px;
                    background: #fff;
                    box-shadow: 0 8px 18px rgba(40,53,85,.05);
                }

                .lg-balance small {
                    display: block;
                    color: #8b96aa;
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: .1em;
                }

                .lg-balance strong {
                    display: block;
                    margin-top: 3px;
                    font-size: 17px;
                    color: #17223e;
                }

                .lg-auth {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 11px 15px;
                    border-radius: 12px;
                    background: #f0efff;
                    color: #5043e8;
                    font-size: 12px;
                    font-weight: 800;
                    text-decoration: none;
                }

                .lg-main {
                    width: min(1120px, calc(100% - 40px));
                    margin: 0 auto;
                    padding: 58px 0 90px;
                }

                .lg-eyebrow {
                    margin: 0;
                    color: #9aa5bd;
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: .22em;
                    text-transform: uppercase;
                }

                .lg-title {
                    margin: 11px 0 0;
                    color: #14203a;
                    font-size: clamp(36px, 5vw, 58px);
                    font-weight: 900;
                    letter-spacing: -2.6px;
                    line-height: 1;
                }

                .lg-title span { color: #5144ed; }

                .lg-panel {
                    margin-top: 42px;
                    padding: clamp(28px, 5vw, 58px);
                    border: 1px solid #eef0f6;
                    border-radius: 36px;
                    background: rgba(255,255,255,.95);
                    box-shadow: 0 24px 65px rgba(38,49,86,.09);
                }

                .lg-panel-heading {
                    text-align: center;
                }

                .lg-panel-heading h2 {
                    margin: 0;
                    color: #17213a;
                    font-size: clamp(27px, 3vw, 36px);
                    font-weight: 900;
                    letter-spacing: -1.2px;
                }

                .lg-panel-heading p {
                    margin: 9px 0 0;
                    color: #71809c;
                    font-size: 16px;
                }

                .lg-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 16px;
                    margin-top: 38px;
                }

                .lg-niche {
                    width: 100%;
                    min-height: 124px;
                    padding: 20px;
                    text-align: left;
                    border: 1px solid #e8ecf5;
                    border-radius: 18px;
                    background: #f9fbff;
                    color: #33415c;
                    cursor: pointer;
                    transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease, background .18s ease;
                }

                .lg-niche:hover {
                    transform: translateY(-3px);
                    border-color: #aaa4ff;
                    background: white;
                    box-shadow: 0 14px 25px rgba(73,59,227,.10);
                }

                .lg-niche.selected {
                    border-color: #584aed;
                    background: linear-gradient(135deg, #5850ec, #4939df);
                    color: white;
                    box-shadow: 0 16px 28px rgba(73,59,227,.25);
                }

                .lg-niche-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                }

                .lg-niche-icon {
                    display: grid;
                    place-items: center;
                    width: 33px;
                    height: 33px;
                    border-radius: 10px;
                    background: #eeefff;
                    color: #5144ed;
                    font-size: 15px;
                    font-weight: 900;
                }

                .selected .lg-niche-icon {
                    background: rgba(255,255,255,.18);
                    color: white;
                }

                .lg-niche-title {
                    margin-top: 13px;
                    font-size: 15px;
                    font-weight: 850;
                }

                .lg-niche-text {
                    margin: 7px 0 0;
                    color: #7b88a2;
                    font-size: 12px;
                    line-height: 1.45;
                }

                .selected .lg-niche-text { color: rgba(255,255,255,.78); }

                .lg-action-area {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 40px;
                }

                .lg-selected-label {
                    min-height: 20px;
                    margin: 0 0 12px;
                    color: #64708a;
                    font-size: 13px;
                    font-weight: 700;
                }

                .lg-start {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 13px;
                    min-width: 280px;
                    padding: 17px 28px;
                    border-radius: 18px;
                    color: white;
                    font-size: 19px;
                    font-weight: 900;
                    text-decoration: none;
                    background: linear-gradient(135deg, #5749ed, #4637da);
                    box-shadow: 0 15px 27px rgba(73,59,227,.26);
                    transition: transform .18s ease, box-shadow .18s ease;
                }

                .lg-start:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 20px 32px rgba(73,59,227,.31);
                }

                .lg-start.disabled {
                    pointer-events: none;
                    background: #a0a5b4;
                    box-shadow: none;
                }

                .lg-footer {
                    margin-top: 34px;
                    text-align: center;
                    color: #9ba6bc;
                    font-size: 12px;
                }

                @media (max-width: 1080px) {
                    .lg-nav { display: none; }
                }

                @media (max-width: 760px) {
                    .lg-header { min-height: 76px; padding: 14px 20px; }
                    .lg-balance { display: none; }
                    .lg-main { width: min(100% - 28px, 1120px); padding-top: 42px; }
                    .lg-panel { border-radius: 27px; }
                    .lg-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                }

                @media (max-width: 480px) {
                    .lg-brand-name { font-size: 15px; }
                    .lg-auth { padding: 10px 12px; }
                    .lg-grid { grid-template-columns: 1fr; }
                    .lg-start { width: 100%; min-width: 0; }
                }
            `}</style>

            <div className="lg-shell">
                <header className="lg-header">
                    <Link href="/" className="lg-brand">
                        <div className="lg-logo">LG</div>
                        <div className="lg-brand-name">
                            <span>LITTLE</span>
                            <span>GENIUS</span>
                        </div>
                    </Link>

                    <nav className="lg-nav">
                        <a className="active" href="#trivia">Trivia</a>
                        <a href="#learning">Learning</a>
                        <a href="#pathways">Pathways</a>
                        <a href="#exams">Exams</a>
                        <a href="#wallet">Wallet</a>
                        <a href="#foundation">Foundation</a>
                        <a href="#leaderboard">Leaderboard</a>
                    </nav>

                    <div className="lg-user">
                        <div className="lg-balance">
                            <small>BALANCE</small>
                            <strong>0.000 G</strong>
                        </div>
                        <Link href="/login" className="lg-auth">Log in</Link>
                    </div>
                </header>

                <main id="trivia" className="lg-main">
                    <p className="lg-eyebrow">Proof of Knowledge</p>
                    <h1 className="lg-title">
                        Discovery <span>Trivia</span>
                    </h1>

                    <section className="lg-panel">
                        <div className="lg-panel-heading">
                            <h2>Select a Niche</h2>
                            <p>Choose a category to begin your trivia challenge.</p>
                        </div>

                        <div className="lg-grid">
                            {niches.map((niche) => (
                                <button
                                    type="button"
                                    key={niche.title}
                                    className={`lg-niche ${selectedNiche === niche.title ? "selected" : ""}`}
                                    onClick={() => setSelectedNiche(niche.title)}
                                >
                                    <div className="lg-niche-top">
                                        <div className="lg-niche-icon">{niche.icon}</div>
                                        {selectedNiche === niche.title ? <span>✓</span> : null}
                                    </div>
                                    <div className="lg-niche-title">{niche.title}</div>
                                    <p className="lg-niche-text">{niche.description}</p>
                                </button>
                            ))}
                        </div>

                        <div className="lg-action-area">
                            <p className="lg-selected-label">
                                {selectedNiche
                                    ? `${selectedNiche} selected`
                                    : "Choose a niche to unlock your trivia challenge"}
                            </p>

                            <Link
                                href={selectedNiche ? "/register" : "#trivia"}
                                className={`lg-start ${selectedNiche ? "" : "disabled"}`}
                            >
                                Start Trivia <span>→</span>
                            </Link>
                        </div>
                    </section>

                    <p className="lg-footer">
                        Learn, play, and grow through challenges designed for every learner.
                    </p>
                </main>
            </div>
        </>
    );
}
