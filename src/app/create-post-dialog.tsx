"use client";

import Button from "@/components/button";
import Divider from "@/components/divider";
import { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Form from "./form";

interface CreatePostDialogProps {
  username: string | null;
}

const CreatePostDialog = ({ username }: CreatePostDialogProps) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeDialog = () => {
    dialog.current?.classList.remove("backdrop:animate-show");
    dialog.current?.classList.remove("animate-show");
    dialog.current?.classList.add("animate-hide");
    dialog.current?.classList.add("backdrop:animate-hide");
    setTimeout(() => {
      dialog.current?.close();
      dialog.current?.classList.add("animate-show");
      dialog.current?.classList.add("backdrop:animate-show");
      dialog.current?.classList.remove("animate-hide");
      dialog.current?.classList.remove("backdrop:animate-hide");

      document.documentElement.classList.remove("overflow-hidden");
    }, 250);
  };

  return (
    <>
      {username && (
        <button
          className="w-full rounded-full border px-4 py-2 text-left  text-zinc-400 shadow-md dark:border-zinc-700"
          onClick={() => {
            dialog.current &&
              !dialog.current.open &&
              dialog.current.showModal();
            document.documentElement.classList.add("overflow-hidden");
          }}
        >
          What&apos;s up {username}?
        </button>
      )}

      <dialog
        ref={dialog}
        className="w-full max-w-lg animate-show bg-transparent p-0 transition-all scrollbar-hide backdrop:animate-show backdrop:bg-black/70 backdrop:backdrop-blur-sm dark:text-white"
        onClick={closeDialog}
      >
        <div
          className="m-2 animate-show space-y-2 rounded-lg border border-zinc-50/20 bg-white p-4 shadow-lg backdrop-blur-3xl dark:bg-black"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex items-center justify-between pb-1 pt-6">
            <span className="text-lg font-bold">Create Post</span>
            <Button
              aria-label="Close dialog button"
              className="block"
              autoFocus={false}
              onClick={closeDialog}
            >
              <IoCloseOutline className="h-6 w-6" />
            </Button>
          </div>
          <Divider />
          <Form closeDialog={closeDialog}>
            <label htmlFor="content" className="block p-2">
              <textarea
                autoFocus
                id="content"
                name="content"
                required
                className="min-h-[150px] w-full resize-none bg-transparent outline-none"
                placeholder={`Say something nice ${username}`}
              />
            </label>
          </Form>
        </div>
      </dialog>
    </>
  );
};

export default CreatePostDialog;
