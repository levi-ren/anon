import Divider from "@/components/divider";
import { getPosts } from "@/db/posts";
import Image from "next/image";
import { IoEllipsisVerticalOutline } from "react-icons/io5/";

interface PostsProps {}

export default async function Posts(props: PostsProps) {
  const posts = await getPosts();
  return (
    <section className="space-y-2 px-2 py-4">
      {posts.map((post) => (
        <div
          className="m-auto max-w-lg space-y-4 rounded-xl border  pt-4"
          key={post.id}
        >
          <div className="flex items-center gap-x-2 px-2">
            <Image
              src={post.image}
              alt={`${post.username}'s profile image`}
              width={32}
              height={32}
              className="shrink-0"
            />
            <div>
              <p className="capitalize">{post.username}</p>
              <time
                className="block text-xs italic text-slate-400"
                dateTime={post.expiry}
              >
                {new Date(post.expiry).toLocaleDateString()}
              </time>
            </div>
            <IoEllipsisVerticalOutline className="ml-auto h-5 w-5 text-slate-400" />
          </div>
          <Divider className="mx-4" />

          <div className="px-2">{post.content}</div>
        </div>
      ))}
    </section>
  );
}
