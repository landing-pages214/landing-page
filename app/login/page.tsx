"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function login(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const res = await fetch(
      "/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    if (res.ok) {
      router.push("/admin");
    }
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>
        Andrea Horton Admin Login
      </h1>

      <form onSubmit={login}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br />

        <button>
          Login
        </button>
      </form>
    </main>
  );
}
