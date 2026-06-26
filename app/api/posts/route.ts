import { db } from "@/lib/db";
import { isLoggedIn } from "@/lib/auth";

export async function GET() {
  const posts = db
    .prepare(
      "SELECT * FROM posts ORDER BY id DESC"
    )
    .all();

  return Response.json(posts);
}

export async function POST(req: Request) {
  if (!(await isLoggedIn())) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { title, content } = await req.json();

  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-");

  db.prepare(`
    INSERT INTO posts
    (title,slug,content)
    VALUES (?,?,?)
  `).run(title, slug, content);

  return Response.json({
    success: true,
  });
}
