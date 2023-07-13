import { cache } from "react";
import dbConnect from "..";
import { Post } from "./model";
import { PostModel } from "./schema";

export const getPosts = cache(async () => {
  try {
    await dbConnect();
    const posts = await PostModel.find().sort({ expiry: "desc" });

    return posts.map((p) => p.toJSON<Post>());
  } catch (error) {
    return [];
  }
});
