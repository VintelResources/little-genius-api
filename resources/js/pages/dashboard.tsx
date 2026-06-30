import { Head, Link } from "@inertiajs/react";

const quickActions = [
    {
        icon: "✦",
        title: "Start Trivia",
        text: "Test your knowledge and earn progress.",
        href: "/",
        accent: "purple",
    },
    {
        icon: "◉",
        title: "AI Learning",
        text: "Ask questions and learn step by step.",
        href: "#learning",
        accent: "blue",
    },
    {
        icon: "Aa",
        title: "Language Studio",
        text: "Practice new languages with confidence.",
        href: "#languages",
        accent: "pink",
    },
];

const progressItems = [
    { label: "General Knowledge", percent: 72, color: "purple" },
    { label: "Science & Nature", percent: 48, color: "blue" },
    { label: "Language & Arts", percent: 31, color: "pink" },
];

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard | Little Genius" />

            <style>{`
                * { box-sizing: border-box; }

                body {
                    margin: 0;
                    background: #f4f6fb;
                    color: #17213a;
                    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                }

                .lg-app {
                    min-height: 100vh;
                    background:
                        radial-gradient(circle at 8% 0%, rgba(86, 73, 237, .10), transparent 26rem),
                        radial-gradient(circle at 92% 16%, rgba(77, 145, 255, .09), transparent 27rem),
                        #f5f7fc;
                }

                .lg-topbar {
                    min-height: 86px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 18px;
                    padding: 15px clamp(20px, 4vw, 64px);
                    border-bottom: 1px solid #e5e9f3;
                    background: rgba(255,255,255,.96);
                    backdrop-filter: blur(14px);
                }

                .lg-brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: #17213a;
                    text-decoration: none;
                    flex-shrink: 0;
                }

                .lg-logo {
                    width: 42px;
                    height: 42px;
                    display: grid;
                    place-items: center;
                    border-radius: 14px;
                    color: #fff;
                    background: linear-gradient(135deg, #5a4bed, #4637dc);
                    font-weight: 900;
                    font-size: 14px;
                    box-shadow: 0 10px 22px rgba(80,68,230,.24);
                }

                .lg-brand-text {
                    display: grid;
                    font-size: 17px;
                    font-weight: 900;
                    line-height: 1;
                    letter-spacing: -.7px;
                }

                .lg-nav {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex: 1;
                    gap: clamp(12px, 2vw, 28px);
                }

                .lg-nav a {
                    color: #68758d;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: .06em;
                    font-size: 10px;
                    font-weight: 850;
                    white-space: nowrap;
                }

                .lg-nav a.active {
                    padding: 11px 16px;
                    border-radius: 12px;
                    color: white;
                    background: linear-gradient(135deg, #5a4bed, #4738dc);
                    box-shadow: 0 10px 20px rgba(78,65,227,.20);
                }

                .lg-profile {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-shrink: 0;
                }

                .lg-balance {
                    padding: 9px 13px;
                    border-radius: 14px;
                    border: 1px solid #e8ecf4;
                    background: white;
                    min-width: 95px;
                }

                .lg-balance small {
                    display: block;
                    color: #94a0b5;
                    font-size: 9px;
                    font-weight: 900;
                    letter-spacing: .1em;
                }

                .lg-balance strong {
                    display: block;
                    margin-top: 3px;
                    font-size: 16px;
                }

                .lg-avatar {
                    width: 40px;
                    height: 40px;
                    display: grid;
                    place-items: center;
                    border-radius: 13px;
                    color: #4d40df;
                    background: #efeeff;
                    font-size: 14px;
                    font-weight: 900;
                }

                .lg-main {
                    width: min(1180px, calc(100% - 40px));
                    margin: 0 auto;
                    padding: 46px 0 80px;
                }

                .lg-welcome-row {
                    display: flex;
                    align-items: end;
                    justify-content: space-between;
                    gap: 24px;
                }

                .lg-kicker {
                    margin: 0;
                    color: #8e9ab0;
                    font-size: 10px;
                    letter-spacing: .19em;
                    font-weight: 900;
                    text-transform: uppercase;
                }

                .lg-title {
                    margin: 10px 0 0;
                    color: #17213a;
                    font-size: clamp(33px, 4vw, 48px);
                    line-height: 1;
                    letter-spacing: -2px;
                    font-weight: 900;
                }

                .lg-title span { color: #5144ed; }

                .lg-subtitle {
                    margin: 14px 0 0;
                    color: #71809a;
                    font-size: 16px;
                }

                .lg-streak {
                    min-width: 195px;
                    padding: 16px 18px;
                    border: 1px solid #eceef6;
                    border-radius: 18px;
                    background: rgba(255,255,255,.92);
                    box-shadow: 0 12px 28px rgba(31,43,75,.06);
                }

                .lg-streak-label {
                    color: #8794ab;
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: .12em;
                }

                .lg-streak-value {
                    margin-top: 4px;
                    color: #26324c;
                    font-size: 22px;
                    font-weight: 900;
                }

                .lg-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 330px;
                    gap: 24px;
                    margin-top: 36px;
                }

                .lg-card {
                    border: 1px solid #e8ebf4;
                    border-radius: 24px;
                    background: rgba(255,255,255,.94);
                    box-shadow: 0 16px 40px rgba(34,48,83,.06);
                }

                .lg-card-pad { padding: 28px; }

                .lg-section-title {
                    margin: 0;
                    color: #1d2942;
                    font-size: 22px;
                    letter-spacing: -.8px;
                    font-weight: 900;
                }

                .lg-section-note {
                    margin: 7px 0 0;
                    color: #7a87a0;
                    font-size: 13px;
                }

                .lg-actions {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 14px;
                    margin-top: 24px;
                }

                .lg-action {
                    min-height: 190px;
                    padding: 19px;
                    border: 1px solid #e9edf6;
                    border-radius: 18px;
                    color: #26324a;
                    background: #fafbff;
                    text-decoration: none;
                    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
                }

                .lg-action:hover {
                    transform: translateY(-4px);
                    border-color: #b3adff;
                    box-shadow: 0 15px 28px rgba(82,70,235,.12);
                }

                .lg-action-icon {
                    width: 40px;
                    height: 40px;
                    display: grid;
                    place-items: center;
                    border-radius: 12px;
                    font-weight: 900;
                    font-size: 17px;
                }

                .purple .lg-action-icon { color: #5042e9; background: #efeeff; }
                .blue .lg-action-icon { color: #2271ce; background: #e9f4ff; }
                .pink .lg-action-icon { color: #ce4a9d; background: #fff0f9; }

                .lg-action h3 {
                    margin: 18px 0 0;
                    font-size: 16px;
                    font-weight: 900;
                }

                .lg-action p {
                    margin: 8px 0 0;
                    color: #7a87a0;
                    font-size: 12px;
                    line-height: 1.55;
                }

                .lg-action-arrow {
                    display: block;
                    margin-top: 17px;
                    color: #5144ed;
                    font-weight: 900;
                }

                .lg-progress-list { margin-top: 22px; }

                .lg-progress-item + .lg-progress-item { margin-top: 20px; }

                .lg-progress-head {
                    display: flex;
                    justify-content: space-between;
                    gap: 12px;
                    color: #4d5b74;
                    font-size: 13px;
                    font-weight: 800;
                }

                .lg-progress-head span:last-child { color: #786ef0; }

                .lg-track {
                    height: 9px;
                    margin-top: 9px;
                    overflow: hidden;
                    border-radius: 99px;
                    background: #edf0f6;
                }

                .lg-fill {
                    height: 100%;
                    border-radius: inherit;
                }

                .lg-fill.purple { background: linear-gradient(90deg, #5c4ef0, #8176ff); }
                .lg-fill.blue { background: linear-gradient(90deg, #3a98f5, #77c2ff); }
                .lg-fill.pink { background: linear-gradient(90deg, #e66bb6, #f5a2d2); }

                .lg-mission {
                    margin-top: 24px;
                    padding: 23px;
                    color: white;
                    border-radius: 22px;
                    background: linear-gradient(135deg, #584bed, #4437d7);
                    box-shadow: 0 16px 30px rgba(79,65,224,.23);
                }

                .lg-mission small {
                    color: rgba(255,255,255,.72);
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: .12em;
                }

                .lg-mission h3 {
                    margin: 8px 0 0;
                    font-size: 21px;
                    line-height: 1.15;
                }

                .lg-mission p {
                    margin: 10px 0 0;
                    color: rgba(255,255,255,.80);
                    font-size: 13px;
                    line-height: 1.55;
                }

                .lg-mission-link {
                    display: inline-flex;
                    margin-top: 16px;
                    padding: 10px 13px;
                    border-radius: 10px;
                    color: #4a3ddb;
                    background: white;
                    font-size: 12px;
                    font-weight: 900;
                    text-decoration: none;
                }

                .lg-recent {
                    margin-top: 24px;
                }

                .lg-recent-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 14px 0;
                    border-bottom: 1px solid #edf0f6;
                }

                .lg-recent-row:last-child { border-bottom: 0; }

                .lg-recent-icon {
                    width: 37px;
                    height: 37px;
                    display: grid;
                    place-items: center;
                    border-radius: 11px;
                    color: #4e42e8;
                    background: #eeedff;
                    font-size: 14px;
                    font-weight: 900;
                }

                .lg-recent-copy {
                    flex: 1;
                    min-width: 0;
                }

                .lg-recent-copy strong {
                    display: block;
                    color: #37445d;
                    font-size: 13px;
                }

                .lg-recent-copy span {
                    display: block;
                    margin-top: 3px;
                    color: #94a0b4;
                    font-size: 11px;
                }

                .lg-recent-status {
                    color: #34a86d;
                    font-size: 11px;
                    font-weight: 900;
                }

                @media (max-width: 1050px) {
                    .lg-nav { display: none; }
                    .lg-layout { grid-template-columns: 1fr; }
                }

                @media (max-width: 720px) {
                    .lg-topbar { min-height: 74px; padding: 13px 20px; }
                    .lg-balance { display: none; }
                    .lg-main { width: min(100% - 28px, 1180px); padding-top: 34px; }
                    .lg-welcome-row { align-items: flex-start; flex-direction: column; }
                    .lg-streak { min-width: 0; width: 100%; }
                    .lg-actions { grid-template-columns: 1fr; }
                }

                @media (max-width: 430px) {
                    .lg-brand-text { font-size: 15px; }
                    .lg-avatar { width: 36px; height: 36px; }
                    .lg-card-pad { padding: 22px; }
                }
            `}</style>

            <div className="lg-app">
                <header className="lg-topbar">
                    <Link href="/" className="lg-brand">
                        <div className="lg-logo">LG</div>
                        <div className="lg-brand-text">
                            <span>LITTLE</span>
                            <span>GENIUS</span>
                        </div>
                    </Link>

                    <nav className="lg-nav">
                        <Link href="/" className="active">Trivia</Link>
                        <a href="#learning">Learning</a>
                        <a href="#pathways">Pathways</a>
                        <a href="#exams">Exams</a>
                        <a href="#wallet">Wallet</a>
                        <a href="#leaderboard">Leaderboard</a>
                    </nav>

                    <div className="lg-profile">
                        <div className="lg-balance">
                            <small>BALANCE</small>
                            <strong>0.000 G</strong>
                        </div>
                        <div className="lg-avatar">LG</div>
                    </div>
                </header>

                <main className="lg-main">
                    <div className="lg-welcome-row">
                        <div>
                            <p className="lg-kicker">Your learning space</p>
                            <h1 className="lg-title">
                                Welcome back, <span>Genius.</span>
                            </h1>
                            <p className="lg-subtitle">
                                Pick up where you left off and keep your learning streak growing.
                            </p>
                        </div>

                        <div className="lg-streak">
                            <div className="lg-streak-label">CURRENT STREAK</div>
                            <div className="lg-streak-value">7 days 🔥</div>
                        </div>
                    </div>

                    <div className="lg-layout">
                        <section className="lg-card lg-card-pad">
                            <h2 className="lg-section-title">What would you like to do?</h2>
                            <p className="lg-section-note">
                                Choose an activity and continue building your knowledge.
                            </p>

                            <div className="lg-actions">
                                {quickActions.map((action) => (
                                    <Link
                                        key={action.title}
                                        href={action.href}
                                        className={`lg-action ${action.accent}`}
                                    >
                                        <div className="lg-action-icon">{action.icon}</div>
                                        <h3>{action.title}</h3>
                                        <p>{action.text}</p>
                                        <span className="lg-action-arrow">Explore →</span>
                                    </Link>
                                ))}
                            </div>

                            <section className="lg-recent">
                                <h2 className="lg-section-title">Recent activity</h2>

                                <div className="lg-recent-row">
                                    <div className="lg-recent-icon">✦</div>
                                    <div className="lg-recent-copy">
                                        <strong>General Knowledge Challenge</strong>
                                        <span>Completed today</span>
                                    </div>
                                    <div className="lg-recent-status">+5 G</div>
                                </div>

                                <div className="lg-recent-row">
                                    <div className="lg-recent-icon">◉</div>
                                    <div className="lg-recent-copy">
                                        <strong>Science & Nature Practice</strong>
                                        <span>Continue your progress</span>
                                    </div>
                                    <div className="lg-recent-status">48%</div>
                                </div>
                            </section>
                        </section>

                        <aside>
                            <section className="lg-card lg-card-pad">
                                <h2 className="lg-section-title">Your progress</h2>
                                <p className="lg-section-note">Keep going. Every activity counts.</p>

                                <div className="lg-progress-list">
                                    {progressItems.map((item) => (
                                        <div key={item.label} className="lg-progress-item">
                                            <div className="lg-progress-head">
                                                <span>{item.label}</span>
                                                <span>{item.percent}%</span>
                                            </div>
                                            <div className="lg-track">
                                                <div
                                                    className={`lg-fill ${item.color}`}
                                                    style={{ width: `${item.percent}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="lg-mission">
                                <small>DAILY MISSION</small>
                                <h3>Complete one trivia challenge.</h3>
                                <p>Earn progress, grow your streak, and unlock more learning opportunities.</p>
                                <Link href="/" className="lg-mission-link">
                                    Start mission →
                                </Link>
                            </section>
                        </aside>
                    </div>
                </main>
            </div>
        </>
    );
}
