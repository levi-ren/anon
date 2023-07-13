import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import CreatePostDialog from "./create-post-dialog";

interface CreatePostProps {}

export default async function CreatePost(props: CreatePostProps) {
  const user = await currentUser();

  return (
    <div className="m-auto mt-4 flex max-w-lg gap-x-2 p-2">
      {user && (
        <>
          <Image
            src={user.imageUrl}
            className="shrink-0 self-center rounded-full shadow-md"
            alt="Your profile image"
            width={32}
            height={32}
          />
          <CreatePostDialog username={user.username} />
        </>
      )}
    </div>
  );
}
