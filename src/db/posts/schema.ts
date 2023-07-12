import { Schema } from "mongoose";
import { createModel } from "../utils";
import { PostDocument } from "./model";

const postSchema = new Schema<PostDocument>(
  {
    username: { type: String, require: true },
    image: { type: String, require: true },
    content: { type: String, require: true },
    expiry: { type: Date, expires: "24h", default: Date.now },
  },
  {
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret._id;
      },
    },
  }
);

export const PostModel = createModel<PostDocument, typeof postSchema>(
  "posts",
  postSchema
);

export default postSchema;
