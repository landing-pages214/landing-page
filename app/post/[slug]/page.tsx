export const dynamic = "force-dynamic";

import { db } from "@/lib/db";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const post = db
    .prepare("SELECT * FROM posts WHERE slug = ?")
    .get(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
