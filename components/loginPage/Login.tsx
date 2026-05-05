"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dummyLogin = "admin@gmail.com";
  const dummyPassword = "1234";

  const handleLogin = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === dummyLogin && password === dummyPassword) {
      console.log("Login successful");
      router.push("/");
    } else {
      setError("invalid email or password");
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full max-w-sm">
        <h1 className="text-xl font-semibold text-gray-900 text-center mb-1">
          Sign in
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your details below
        </p>

        <form onSubmit={handleLogin}>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">
            Email
          </label>
          <input
            type="text"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
          />

          <label className="block text-xs font-medium text-gray-500 mb-1.5">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-5"
          />

          {error && <p className="text-red-500 text-[12px] mb-3">{error}</p>}

          <button className="w-full cursor-pointer  bg-[#647FBC] hover:bg-[#647FBC] text-white text-sm font-medium py-2 rounded-lg transition-colors">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
