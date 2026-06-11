export const dynamic = "force-dynamic";
import { db } from "@/lib/db";

export default function Home() {
  const posts: any[] = db
    .prepare("SELECT * FROM posts ORDER BY id DESC")
    .all();

  return (
    <main className="container">
      <header className="header">
        <h1 className="title">Andrea Horton Blog</h1>
        <p className="subtitle">
          Thoughts, updates, and writing
        </p>
      </header>

      <section className="posts">
        {posts.map((post) => (
          <article key={post.id} className="post">
            <a href={`/post/${post.slug}`} className="postLink">
              <h2 className="postTitle">{post.title}</h2>
            </a>

            <p className="postExcerpt">
              {post.content.substring(0, 200)}...
            </p>

            <a href={`/post/${post.slug}`} className="readMore">
              Read more →
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
