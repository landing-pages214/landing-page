"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPost() {
  const router = useRouter();

  const [title, setTitle] =
    useState("");

  const [content, setContent] =
    useState("");

  async function submit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    router.push("/admin");
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Create Post</h1>

      <form onSubmit={submit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <br />

        <textarea
          rows={15}
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <br />

        <button>
          Publish
        </button>
      </form>
    </main>
  );
}
