export const dynamic = "force-dynamic";
import { db } from "@/lib/db";

export default function Home() {
  const posts: any[] = db
    .prepare(
      "SELECT * FROM posts ORDER BY id DESC"
    )
    .all();

  return (
    <main style={{ padding: 40 }}>
      <h1>
        Andrea Horton Blog
      </h1>

      {posts.map((post) => (
        <article key={post.id}>
          <h2>
            <a
              href={`/post/${post.slug}`}
            >
              {post.title}
            </a>
          </h2>

          <p>
            {post.content.substring(
              0,
              200
            )}
            ...
          </p>
        </article>
      ))}
    </main>
  );
}
