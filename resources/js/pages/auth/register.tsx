import { FormEventHandler } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (event) => {
        event.preventDefault();

        post("/register", {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <>
            <Head title="Create Account" />

            <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-white">
                <section className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
                    <Link href="/" className="text-sm font-semibold text-cyan-300">
                        ← Little Genius
                    </Link>

                    <h1 className="mt-6 text-3xl font-black">Create your account</h1>
                    <p className="mt-2 text-slate-400">
                        Start learning, playing, and growing.
                    </p>

                    <form onSubmit={submit} className="mt-8 space-y-5">
                        <label className="block">
                            <span className="mb-2 block text-sm font-medium">Full name</span>
                            <input
                                value={data.name}
                                onChange={(event) => setData("name", event.target.value)}
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-300"
                                autoComplete="name"
                                required
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                        </label>

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
                                autoComplete="new-password"
                                required
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
                        </label>

                        <label className="block">
                            <span className="mb-2 block text-sm font-medium">Confirm password</span>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={(event) => setData("password_confirmation", event.target.value)}
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-300"
                                autoComplete="new-password"
                                required
                            />
                        </label>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 disabled:opacity-60"
                        >
                            {processing ? "Creating account..." : "Create Account"}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-slate-400">
                        Already registered?{" "}
                        <Link href="/login" className="font-semibold text-cyan-300">
                            Log in
                        </Link>
                    </p>
                </section>
            </main>
        </>
    );
}
