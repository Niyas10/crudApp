import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full max-w-sm">

        <h1 className="text-xl font-semibold text-gray-900 text-center mb-1">Sign in</h1>
        <p className="text-sm text-gray-500 text-center mb-6">Enter your details below</p>

        <label className="block text-xs font-medium text-gray-500 mb-1.5">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        />

        <label className="block text-xs font-medium text-gray-500 mb-1.5">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-5"
        />

        <button className="w-full cursor-pointer  bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-lg transition-colors">
          Sign in
        </button>

      </div>
    </div>
  )
}

export default Login