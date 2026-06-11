export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { isLoggedIn } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function Admin() {
  const loggedIn =
    await isLoggedIn();

  if (!loggedIn) {
    redirect("/login");
  }

  const posts: any[] = db
    .prepare(
      "SELECT * FROM posts ORDER BY id DESC"
    )
    .all();

  return (
    <main style={{ padding: 40 }}>
      <h1>
        Andrea Horton Dashboard
      </h1>

      <a href="/admin/new">
        New Post
      </a>

      <hr />

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>

          <p>
            {post.content.substring(
              0,
              150
            )}
          </p>
        </div>
      ))}
    </main>
  );
}
