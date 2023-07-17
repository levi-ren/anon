"use client";

import Button from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ChangeEventHandler,
  FormEvent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { IoImages, IoPerson, IoTrashOutline } from "react-icons/io5";

interface FormProps extends PropsWithChildren {
  closeDialog: () => void;
}

const Form = ({ children, closeDialog }: FormProps) => {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const form = new FormData(event.currentTarget);
    const content = form.get("content");

    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content?.toString().trim()),
    })
      .then((e) => {
        if (!e.ok) {
          return;
        }
        route.refresh();
        // @ts-expect-error
        event.target.reset();
      })
      .finally(() => {
        setLoading(false);
        closeDialog();
      });
  };

  const handleSelect: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      console.log(event.target.files);
      setImage(null);
      return;
    }

    setImage(event.target.files[0]);
  };

  useEffect(() => {
    if (!image) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [image]);

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      {children}

      {preview && (
        <div className="group relative rounded-lg bg-black dark:bg-isabelle">
          <Image
            width={462}
            height={693}
            src={preview}
            className="m-auto object-contain"
            alt="Preview of your uploaded imgae"
          />
          <Button
            aria-label="Remove uploaded image"
            className="absolute left-2 top-2 rounded-full border border-zinc-900 bg-zinc-700 p-2 text-zinc-300 transition-colors group-hover:text-zinc-400"
            autoFocus={false}
            onClick={() => setImage(null)}
          >
            <IoTrashOutline className="h-5 w-5" />
          </Button>
        </div>
      )}
      <div className="flex justify-end gap-x-2 rounded-md border p-4 dark:border-zinc-700">
        <label
          aria-label="Attach image button"
          className="block cursor-pointer"
          autoFocus={false}
          htmlFor="image"
        >
          <IoImages className="h-6 w-6 text-green-500" />
          <input
            type="file"
            id="image"
            accept=".jpg, .jpeg, .png"
            onChange={handleSelect}
            hidden
          />
        </label>

        <Button
          aria-label="Tag user button"
          className="block"
          autoFocus={false}
        >
          <IoPerson className="h-6 w-6 text-sky-500" />
        </Button>
      </div>
      <Button
        aria-label="Post button"
        loading={loading}
        disabled={loading}
        className="flex w-full items-center justify-center gap-x-2 rounded bg-gradient-to-br from-driftwood-300 via-driftwood-400 to-driftwood-500 px-2 py-3 text-center text-xs text-white"
      >
        POST
      </Button>
    </form>
  );
};

export default Form;
