import Divider from "@/components/divider";
import { getPosts } from "@/db/posts";
import Image from "next/image";
import { IoEllipsisVerticalOutline } from "react-icons/io5/";

const formatter = new Intl.RelativeTimeFormat(undefined, {
  numeric: "auto",
});

const DIVISIONS = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
] as const;

function formatTimeAgo(date: Date) {
  let duration = (date.valueOf() - new Date().valueOf()) / 1000;

  for (let i = 0; i < DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
}

interface PostsProps {}

export default async function Posts(props: PostsProps) {
  const posts = await getPosts();
  return (
    <section className="flex justify-between gap-x-2 px-2 py-4">
      <div className=""></div>
      <div className="max-w-lg flex-1 shrink-0  space-y-4 px-2">
        {posts.map((post) => (
          <div
            className="space-y-4 rounded-xl border pt-4 shadow-lg shadow-copper/20"
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
                  {formatTimeAgo(new Date(post.expiry))}
                </time>
              </div>
              <IoEllipsisVerticalOutline className="ml-auto h-5 w-5 text-slate-400" />
            </div>
            <Divider className="mx-4" />
            <div className="px-6 text-justify first-letter:text-xl first-letter:uppercase">
              {post.content}
            </div>
            <Divider className="mx-4" />

            <button className="ml-auto block px-6 pb-4 text-xs font-bold text-slate-300 transition-colors hover:text-slate-400">
              Comments
            </button>
          </div>
        ))}
      </div>
      <div className=""></div>
    </section>
  );
}
