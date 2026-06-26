import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const admin: any = db
    .prepare(
      "SELECT * FROM admin WHERE username=?"
    )
    .get(username);

  if (!admin) {
    return NextResponse.json(
      { error: "Invalid Login" },
      { status: 401 }
    );
  }

  const valid = bcrypt.compareSync(
    password,
    admin.password
  );

  if (!valid) {
    return NextResponse.json(
      { error: "Invalid Login" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set("admin", "true", {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
