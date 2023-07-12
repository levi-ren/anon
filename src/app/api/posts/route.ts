import dbConnect from "@/db";
import { PostModel } from "@/db/posts/schema";
import { currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({}, { status: 403 });
  }

  const content = await request.json();

  if (!content) {
    return NextResponse.json({}, { status: 402 });
  }

  await dbConnect();

  const post = new PostModel({
    content,
    username: user.username,
    image: user.imageUrl,
  });
  const newPost = await post.save();

  return NextResponse.json(newPost);
}
