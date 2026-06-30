import { FormEventHandler } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (event) => {
        event.preventDefault();

        post("/login", {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <Head title="Log In" />

            <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-white">
                <section className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
                    <Link href="/" className="text-sm font-semibold text-cyan-300">
                        ← Little Genius
                    </Link>

                    <h1 className="mt-6 text-3xl font-black">Welcome back</h1>
                    <p className="mt-2 text-slate-400">
                        Log in and continue your learning journey.
                    </p>

                    <form onSubmit={submit} className="mt-8 space-y-5">
                        <label className="block">
                            <span className="mb-2 block text-sm font-medium">Email address</span>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(event) => setData("email", event.target.value)}
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-300"
                                autoComplete="email"
                                required
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                        </label>

                        <label className="block">
                            <span className="mb-2 block text-sm font-medium">Password</span>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(event) => setData("password", event.target.value)}
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-300"
                                autoComplete="current-password"
                                required
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
                        </label>

                        <label className="flex items-center gap-2 text-sm text-slate-300">
                            <input
                                type="checkbox"
                                checked={data.remember}
                                onChange={(event) => setData("remember", event.target.checked)}
                            />
                            Keep me logged in
                        </label>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 disabled:opacity-60"
                        >
                            {processing ? "Logging in..." : "Log In"}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-slate-400">
                        New to Little Genius?{" "}
                        <Link href="/register" className="font-semibold text-cyan-300">
                            Create an account
                        </Link>
                    </p>
                </section>
            </main>
        </>
    );
}
