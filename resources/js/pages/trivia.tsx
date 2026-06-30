import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

const levels = [
    {
        id: "toddlers",
        title: "Toddlers",
        subtitle: "Ages 2–5",
        icon: "★",
        description: "Fun, simple activities for early discovery.",
        subjects: ["Colours & Shapes", "Animals", "Numbers", "Letters", "Songs & Stories"],
    },
    {
        id: "primary",
        title: "Primary",
        subtitle: "Grades 1–7",
        icon: "✦",
        description: "Build strong foundations through play and practice.",
        subjects: ["English", "Mathematics", "Science", "Social Studies", "Creative Arts"],
    },
    {
        id: "secondary",
        title: "Secondary",
        subtitle: "Grades 8–12",
        icon: "◉",
        description: "Academic challenges, revision, and exam preparation.",
        subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "History", "Geography", "English"],
    },
    {
        id: "tertiary",
        title: "Tertiary",
        subtitle: "University & Skills",
        icon: "▲",
        description: "Advanced knowledge, career skills, and professional learning.",
        subjects: ["Engineering", "Economics", "Accounts", "Forex & Markets", "Communication Skills", "Technology"],
    },
];

export default function Trivia() {
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

    const activeLevel = levels.find((level) => level.id === selectedLevel);

    return (
        <>
            <Head title="Trivia | Little Genius" />

            <style>{`
                * { box-sizing: border-box; }

                body {
                    margin: 0;
                    background: #f5f7fc;
                    color: #18213a;
                    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                }

                .trivia-app {
                    min-height: 100vh;
                    background:
                        radial-gradient(circle at 12% 0%, rgba(87, 73, 237, .12), transparent 25rem),
                        radial-gradient(circle at 88% 20%, rgba(85, 170, 255, .10), transparent 28rem),
                        #f5f7fc;
                }

                .trivia-topbar {
                    min-height: 86px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 15px clamp(20px, 4vw, 64px);
                    border-bottom: 1px solid #e6eaf3;
                    background: rgba(255,255,255,.96);
                }

                .brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: #17213a;
                    text-decoration: none;
                }

                .logo {
                    width: 42px;
                    height: 42px;
                    display: grid;
                    place-items: center;
                    border-radius: 14px;
                    color: white;
                    background: linear-gradient(135deg, #5a4bed, #4437d9);
                    font-size: 14px;
                    font-weight: 900;
                }

                .brand-text {
                    display: grid;
                    font-size: 17px;
                    font-weight: 900;
                    line-height: 1;
                    letter-spacing: -.7px;
                }

                .back-link {
                    padding: 10px 14px;
                    border-radius: 12px;
                    background: #f0efff;
                    color: #5144ed;
                    font-size: 13px;
                    font-weight: 850;
                    text-decoration: none;
                }

                .main {
                    width: min(1120px, calc(100% - 40px));
                    margin: 0 auto;
                    padding: 54px 0 90px;
                }

                .eyebrow {
                    margin: 0;
                    color: #929db2;
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: .2em;
                    text-transform: uppercase;
                }

                h1 {
                    margin: 10px 0 0;
                    font-size: clamp(38px, 5vw, 58px);
                    line-height: 1;
                    letter-spacing: -2.5px;
                }

                h1 span { color: #5547eb; }

                .intro {
                    margin: 16px 0 0;
                    color: #75819a;
                    font-size: 16px;
                }

                .panel {
                    margin-top: 38px;
                    padding: clamp(25px, 5vw, 52px);
                    border: 1px solid #e8ebf4;
                    border-radius: 32px;
                    background: rgba(255,255,255,.95);
                    box-shadow: 0 22px 55px rgba(38,49,86,.08);
                }

                .panel-head {
                    text-align: center;
                }

                .panel-head h2 {
                    margin: 0;
                    font-size: 30px;
                    letter-spacing: -1px;
                }

                .panel-head p {
                    margin: 9px 0 0;
                    color: #76839b;
                }

                .levels {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 16px;
                    margin-top: 35px;
                }

                .level {
                    min-height: 210px;
                    padding: 20px;
                    border: 1px solid #e7eaf3;
                    border-radius: 20px;
                    background: #fafbff;
                    text-align: left;
                    color: #26324b;
                    cursor: pointer;
                    transition: .2s ease;
                }

                .level:hover {
                    transform: translateY(-4px);
                    border-color: #afa8ff;
                    box-shadow: 0 16px 28px rgba(81,68,230,.12);
                }

                .level.active {
                    border-color: #5547eb;
                    color: white;
                    background: linear-gradient(135deg, #5a4bed, #4437d9);
                    box-shadow: 0 17px 30px rgba(79,65,226,.25);
                }

                .level-icon {
                    width: 42px;
                    height: 42px;
                    display: grid;
                    place-items: center;
                    border-radius: 13px;
                    color: #5547eb;
                    background: #ecebff;
                    font-weight: 900;
                    font-size: 18px;
                }

                .active .level-icon {
                    color: white;
                    background: rgba(255,255,255,.18);
                }

                .level h3 {
                    margin: 19px 0 0;
                    font-size: 18px;
                }

                .level small {
                    display: block;
                    margin-top: 5px;
                    color: #8a96ab;
                    font-weight: 800;
                }

                .active small { color: rgba(255,255,255,.75); }

                .level p {
                    margin: 12px 0 0;
                    color: #748198;
                    font-size: 12px;
                    line-height: 1.55;
                }

                .active p { color: rgba(255,255,255,.82); }

                .subjects {
                    margin-top: 34px;
                    padding-top: 30px;
                    border-top: 1px solid #edf0f6;
                }

                .subjects h3 {
                    margin: 0;
                    text-align: center;
                    font-size: 21px;
                }

                .subject-grid {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 11px;
                    margin-top: 20px;
                }

                .subject {
                    padding: 12px 16px;
                    border: 1px solid #e4e8f2;
                    border-radius: 12px;
                    background: #fafbff;
                    color: #526078;
                    font-size: 13px;
                    font-weight: 800;
                    cursor: pointer;
                }

                .subject.active {
                    border-color: #5547eb;
                    color: white;
                    background: #5547eb;
                }

                .start-area {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 34px;
                }

                .hint {
                    min-height: 20px;
                    margin: 0 0 12px;
                    color: #77849b;
                    font-size: 13px;
                    font-weight: 700;
                }

                .start {
                    min-width: 265px;
                    padding: 16px 24px;
                    border: 0;
                    border-radius: 16px;
                    color: white;
                    background: linear-gradient(135deg, #5a4bed, #4437d9);
                    box-shadow: 0 15px 28px rgba(79,65,226,.24);
                    font-size: 17px;
                    font-weight: 900;
                    cursor: pointer;
                }

                .start:disabled {
                    cursor: not-allowed;
                    background: #a4aabb;
                    box-shadow: none;
                }

                @media (max-width: 900px) {
                    .levels { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                }

                @media (max-width: 560px) {
                    .main { width: min(100% - 28px, 1120px); padding-top: 36px; }
                    .levels { grid-template-columns: 1fr; }
                    .panel { border-radius: 24px; }
                    .start { width: 100%; }
                }
            `}</style>

            <div className="trivia-app">
                <header className="trivia-topbar">
                    <Link href="/dashboard" className="brand">
                        <div className="logo">LG</div>
                        <div className="brand-text">
                            <span>LITTLE</span>
                            <span>GENIUS</span>
                        </div>
                    </Link>

                    <Link href="/dashboard" className="back-link">
                        ← Dashboard
                    </Link>
                </header>

                <main className="main">
                    <p className="eyebrow">Proof of Knowledge</p>
                    <h1>Discovery <span>Trivia</span></h1>
                    <p className="intro">
                        Choose a learning level, select a subject, and start a tailored challenge.
                    </p>

                    <section className="panel">
                        <div className="panel-head">
                            <h2>Choose Your Level</h2>
                            <p>Trivia adapts to the learner’s stage and subject.</p>
                        </div>

                        <div className="levels">
                            {levels.map((level) => (
                                <button
                                    key={level.id}
                                    type="button"
                                    className={`level ${selectedLevel === level.id ? "active" : ""}`}
                                    onClick={() => {
                                        setSelectedLevel(level.id);
                                        setSelectedSubject(null);
                                    }}
                                >
                                    <div className="level-icon">{level.icon}</div>
                                    <h3>{level.title}</h3>
                                    <small>{level.subtitle}</small>
                                    <p>{level.description}</p>
                                </button>
                            ))}
                        </div>

                        {activeLevel ? (
                            <section className="subjects">
                                <h3>Select a Subject</h3>

                                <div className="subject-grid">
                                    {activeLevel.subjects.map((subject) => (
                                        <button
                                            type="button"
                                            key={subject}
                                            className={`subject ${selectedSubject === subject ? "active" : ""}`}
                                            onClick={() => setSelectedSubject(subject)}
                                        >
                                            {subject}
                                        </button>
                                    ))}
                                </div>
                            </section>
                        ) : null}

                        <div className="start-area">
                            <p className="hint">
                                {selectedLevel && selectedSubject
                                    ? `${activeLevel?.title} · ${selectedSubject}`
                                    : "Select a level and subject to continue"}
                            </p>

                            <button
                                type="button"
                                className="start"
                                disabled={!selectedLevel || !selectedSubject}
                                onClick={() => {
                                    alert(`Trivia setup ready: ${activeLevel?.title} · ${selectedSubject}`);
                                }}
                            >
                                Start Trivia →
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
