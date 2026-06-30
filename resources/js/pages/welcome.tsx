import { Head, Link } from "@inertiajs/react";

const features = [
    {
        icon: "✦",
        title: "AI Learning Coach",
        text: "Ask questions, get clear explanations, and learn at your own pace.",
    },
    {
        icon: "◉",
        title: "Smart Trivia",
        text: "Challenge yourself with fun quizzes across subjects and levels.",
    },
    {
        icon: "◎",
        title: "Language Studio",
        text: "Practice languages with guided lessons, voice, and instant feedback.",
    },
];

const learningPaths = [
    "Early Learning",
    "Primary School",
    "Secondary School",
    "Tertiary & Skills",
];

export default function Welcome() {
    return (
        <>
            <Head title="Little Genius" />

            <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute left-[-10rem] top-[-8rem] h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
                    <div className="absolute right-[-8rem] top-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
                    <div className="absolute bottom-[-12rem] left-1/3 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
                </div>

                <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300 text-lg font-black text-slate-950 shadow-lg shadow-cyan-400/20">
                            G
                        </div>
                        <div>
                            <p className="text-lg font-black tracking-tight">Little Genius</p>
                            <p className="text-xs font-medium text-cyan-200">Learn beyond limits</p>
                        </div>
                    </Link>

                    <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
                        <a href="#features" className="transition hover:text-cyan-200">Features</a>
                        <a href="#paths" className="transition hover:text-cyan-200">Learning Paths</a>
                        <Link href="/login" className="transition hover:text-cyan-200">Log in</Link>
                    </nav>

                    <Link
                        href="/register"
                        className="rounded-xl bg-cyan-300 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-200"
                    >
                        Get started
                    </Link>
                </header>

                <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-14 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:pb-28 lg:pt-20">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                            <span className="h-2 w-2 rounded-full bg-cyan-300" />
                            A smarter way to learn
                        </div>

                        <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                            Learning that feels
                            <span className="block bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                                like an adventure.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                            Little Genius brings together AI lessons, interactive trivia,
                            language learning, and meaningful progress for every learner.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <Link
                                href="/register"
                                className="rounded-xl bg-cyan-300 px-6 py-3.5 font-bold text-slate-950 shadow-xl shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
                            >
                                Start learning free
                            </Link>

                            <Link
                                href="/login"
                                className="rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3.5 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-100"
                            >
                                Continue learning
                            </Link>
                        </div>

                        <div className="mt-11 flex flex-wrap gap-8 text-sm">
                            <div>
                                <p className="text-2xl font-black text-cyan-200">AI</p>
                                <p className="mt-1 text-slate-400">Guided learning help</p>
                            </div>
                            <div>
                                <p className="text-2xl font-black text-cyan-200">24/7</p>
                                <p className="mt-1 text-slate-400">Learn anytime</p>
                            </div>
                            <div>
                                <p className="text-2xl font-black text-cyan-200">∞</p>
                                <p className="mt-1 text-slate-400">Curiosity encouraged</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-lg">
                        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-5 shadow-2xl shadow-black/40 backdrop-blur">
                            <div className="rounded-[1.5rem] border border-cyan-300/15 bg-slate-950/80 p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-cyan-200">Today’s mission</p>
                                        <h2 className="mt-1 text-2xl font-black">Explore & discover</h2>
                                    </div>
                                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-xl text-slate-950">
                                        ✦
                                    </div>
                                </div>

                                <div className="mt-7 rounded-2xl border border-slate-700 bg-slate-900 p-5">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-semibold text-slate-200">Learning progress</span>
                                        <span className="font-bold text-cyan-200">75%</span>
                                    </div>
                                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
                                        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-300 to-indigo-400" />
                                    </div>
                                    <p className="mt-4 text-sm leading-6 text-slate-400">
                                        Complete your next activity to keep your learning streak alive.
                                    </p>
                                </div>

                                <div className="mt-5 grid grid-cols-2 gap-4">
                                    <div className="rounded-2xl bg-indigo-500/15 p-4">
                                        <p className="text-2xl">🧠</p>
                                        <p className="mt-3 font-bold">AI Tutor</p>
                                        <p className="mt-1 text-xs leading-5 text-slate-400">Learn with guided support.</p>
                                    </div>
                                    <div className="rounded-2xl bg-cyan-400/10 p-4">
                                        <p className="text-2xl">🏆</p>
                                        <p className="mt-3 font-bold">Trivia Zone</p>
                                        <p className="mt-1 text-xs leading-5 text-slate-400">Build knowledge through play.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-7 -left-6 hidden rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur sm:block">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Learning streak</p>
                            <p className="mt-1 text-2xl font-black text-cyan-200">7 days 🔥</p>
                        </div>
                    </div>
                </section>

                <section id="features" className="relative z-10 border-y border-white/5 bg-slate-900/40">
                    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                        <div className="max-w-2xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Built for growth</p>
                            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                                Everything learners need in one place.
                            </h2>
                        </div>

                        <div className="mt-12 grid gap-5 md:grid-cols-3">
                            {features.map((feature) => (
                                <article
                                    key={feature.title}
                                    className="rounded-2xl border border-slate-800 bg-slate-950/50 p-7 transition hover:-translate-y-1 hover:border-cyan-300/40"
                                >
                                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-300/10 text-xl text-cyan-200">
                                        {feature.icon}
                                    </div>
                                    <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>
                                    <p className="mt-3 leading-7 text-slate-400">{feature.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="paths" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12">
                        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Your learning journey</p>
                                <h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">
                                    A learning path for every stage.
                                </h2>
                                <p className="mt-4 max-w-xl leading-7 text-slate-400">
                                    Start where you are, build confidence, and unlock new skills as you progress.
                                </p>
                            </div>

                            <Link
                                href="/register"
                                className="rounded-xl border border-cyan-300/50 px-5 py-3 text-center font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950"
                            >
                                Create your account
                            </Link>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {learningPaths.map((path, index) => (
                                <div
                                    key={path}
                                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                                >
                                    <p className="text-sm font-bold text-cyan-300">0{index + 1}</p>
                                    <p className="mt-5 text-lg font-bold">{path}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <footer className="relative z-10 border-t border-white/5 px-6 py-8 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} Little Genius. Learn. Play. Grow.
                </footer>
            </main>
        </>
    );
}
