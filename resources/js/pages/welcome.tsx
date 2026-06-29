import { Link } from "@inertiajs/react";

export default function Welcome() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                        Learn. Play. Grow.
                    </p>

                    <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
                        Little Genius
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                        Interactive learning, AI-powered lessons, trivia challenges,
                        language coaching, and rewards for curious learners.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/register"
                            className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                        >
                            Start Learning
                        </Link>

                        <Link
                            href="/login"
                            className="rounded-xl border border-slate-600 px-6 py-3 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                        >
                            Log In
                        </Link>
                    </div>
                </div>

                <div className="mt-16 grid gap-5 md:grid-cols-3">
                    {[
                        ["AI Learning", "Ask questions and receive guided lessons."],
                        ["Trivia Challenges", "Build knowledge through fun quizzes."],
                        ["Rewards", "Track progress and celebrate achievement."],
                    ].map(([title, text]) => (
                        <article
                            key={title}
                            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
                        >
                            <h2 className="text-xl font-bold text-cyan-300">{title}</h2>
                            <p className="mt-3 leading-7 text-slate-300">{text}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
