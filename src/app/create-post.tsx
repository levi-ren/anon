import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Form from "./form";

interface CreatePostProps {}

export default async function CreatePost(props: CreatePostProps) {
  const user = await currentUser();

  return (
    <div className="m-auto flex max-w-lg gap-x-2 p-2">
      {user && (
        <Image
          src={user?.imageUrl}
          className="shrink-0 self-center"
          alt="Your profile image"
          width={32}
          height={32}
        />
      )}

      <Form>
        <label htmlFor="content" className="block rounded-full border p-2">
          <input
            id="content"
            name="content"
            className="w-full outline-none"
            placeholder={`What's up ${user?.username}?`}
          />
        </label>
      </Form>
    </div>
  );
}
