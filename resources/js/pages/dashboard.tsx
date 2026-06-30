import { Head, Link } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <main className="min-h-screen bg-white px-6 py-12 text-slate-900">
                <div className="mx-auto max-w-5xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-indigo-600">
                                Little Genius
                            </p>
                            <h1 className="mt-2 text-4xl font-bold">
                                Welcome to your dashboard
                            </h1>
                            <p className="mt-3 text-slate-600">
                                Your learning space is ready.
                            </p>
                        </div>

                        <Link
                            href="/"
                            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold"
                        >
                            Home
                        </Link>
                    </div>

                    <section className="mt-10 grid gap-5 md:grid-cols-3">
                        <article className="rounded-xl border border-slate-200 p-6">
                            <h2 className="font-bold">AI Tutor</h2>
                            <p className="mt-2 text-sm text-slate-600">
                                Ask questions and learn step by step.
                            </p>
                        </article>

                        <article className="rounded-xl border border-slate-200 p-6">
                            <h2 className="font-bold">Trivia</h2>
                            <p className="mt-2 text-sm text-slate-600">
                                Test your knowledge and earn progress.
                            </p>
                        </article>

                        <article className="rounded-xl border border-slate-200 p-6">
                            <h2 className="font-bold">Languages</h2>
                            <p className="mt-2 text-sm text-slate-600">
                                Practice new languages with guided lessons.
                            </p>
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}
