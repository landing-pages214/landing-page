import { db } from "@/lib/db";
import { notFound } from "next/navigation";

export default function Post({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post: any = db
    .prepare(
      "SELECT * FROM posts WHERE slug=?"
    )
    .get(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>{post.title}</h1>

      <div
        style={{
          whiteSpace: "pre-wrap",
        }}
      >
        {post.content}
      </div>
    </main>
  );
}
