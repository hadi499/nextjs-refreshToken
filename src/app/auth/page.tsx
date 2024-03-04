"use client";
import { signIn } from "next-auth/react";
import React from "react";

const AuthPage = () => {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        username: user.username,
        password: user.password,
        redirect: true,
        callbackUrl: "/",
      });
    } catch (error: any) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-[400px] mx-auto mt-6 flex flex-col gap-3 p-4 bg-slate-100">
      <h1 className="text-2xl text-center font-semibold">
        {loading ? "Processing" : "Login"}
      </h1>
      <label htmlFor="username">Username</label>
      <input
        className="p-2"
        type="email"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        autoFocus
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        className="bg-slate-800 text-white py-1 w-1/3 hover:opacity-80 hover:text-blue-400 rounded-lg  "
        onClick={onLogin}
      >
        Log In
      </button>
    </div>
  );
};

export default AuthPage;
