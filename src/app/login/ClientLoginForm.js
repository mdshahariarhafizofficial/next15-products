'use client'; // এটি অবশ্যই ফাইলের একদম উপরে থাকবে

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useSearchParams } from "next/navigation"; // useSearchParams এখানে ব্যবহার করা হবে
import Link from "next/link";

export default function ClientLoginForm() {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/products";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingCreds, setLoadingCreds] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  const onCredentialsLogin = async (e) => {
    e.preventDefault();
    setLoadingCreds(true);
    await signIn("credentials", { email, password, redirect: true, callbackUrl });
    setLoadingCreds(false);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Welcome Back</h1>

      <button
        onClick={() => { setLoadingGoogle(true); signIn("google", { callbackUrl }); }}
        disabled={loadingGoogle}
        className="flex items-center justify-center gap-2 w-full rounded-lg px-4 py-3 font-semibold hover:bg-gray-300 shadow transition disabled:opacity-60 mb-6 cursor-pointer"
      >
        <FcGoogle size={25} />
        {loadingGoogle ? "Signing in..." : "Continue with Google"}
      </button>

      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-300" />
        <span className="px-3 text-gray-400 text-sm">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <form onSubmit={onCredentialsLogin} className="space-y-4">
        <input
          type="email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="demo@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="password123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loadingCreds}
          className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-3 font-semibold text-white hover:opacity-90 shadow transition disabled:opacity-60 cursor-pointer"
        >
          {loadingCreds ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p className="mt-6 text-center text-gray-500 text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-blue-600 font-medium hover:underline">Sign up</Link>
      </p>
    </div>
  );
}