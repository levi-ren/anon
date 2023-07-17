import { getPosts } from "@/db/posts";
import Image from "next/image";
import { PropsWithChildren } from "react";
import {
  IoChatbubblesOutline,
  IoEllipsisVerticalOutline,
  IoHeartOutline,
  IoShareSocialOutline,
} from "react-icons/io5/";

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

export default async function Posts({ children }: PropsWithChildren) {
  const posts = await getPosts();
  return (
    <section className="w-full  max-w-xl shrink-0 py-4">
      {children}
      <div className="divide-y dark:divide-zinc-700">
        {posts.map((post) => (
          <div className="space-y-4 py-4" key={post.id}>
            <div className="flex items-center gap-x-2 px-2">
              <Image
                src={post.image}
                alt={`${post.username}'s profile image`}
                width={32}
                height={32}
                className="shrink-0 rounded-full bg-isabelle"
              />
              <div>
                <p className="capitalize">{post.username}</p>
                <time
                  className="block text-xs italic text-zinc-400"
                  dateTime={post.expiry}
                >
                  {formatTimeAgo(new Date(post.expiry))}
                </time>
              </div>
              <IoEllipsisVerticalOutline className="ml-auto h-5 w-5 text-zinc-400" />
            </div>

            <div className="relative flex gap-x-2 px-[22px] text-justify first-letter:text-xl">
              <div className="h-auto w-[4px] rounded-full border border-zinc-300 bg-isabelle dark:border-zinc-700 dark:bg-black " />
              {post.content.length > 400 && (
                <input type="checkbox" id={post.id} className="peer" hidden />
              )}
              <div className="max-h-[230px] flex-1 overflow-hidden whitespace-pre-line pl-4 pr-2 peer-checked:max-h-max ">
                {post.content}
              </div>
              {post.content.length > 400 && (
                <div className="via-isabfrom-isabelle absolute bottom-0 left-12 right-6 bg-gradient-to-t from-isabelle via-40% px-2 py-4 text-center text-xs font-bold text-black backdrop-blur-sm peer-checked:hidden dark:from-black dark:via-black dark:text-isabelle">
                  <label htmlFor={post.id} className="cursor-pointer ">
                    VIEW MORE
                  </label>
                </div>
              )}
            </div>

            <div className="flex items-center gap-x-2 px-3 text-zinc-400 dark:text-zinc-500">
              <IoChatbubblesOutline className="h-8 w-8" />

              <IoHeartOutline className="ml-auto h-6 w-6" />
              <IoShareSocialOutline className="h-6 w-6" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
