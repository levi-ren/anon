"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { FormEvent, PropsWithChildren, useState } from "react";

interface FormProps extends PropsWithChildren {
  closeDialog: () => void;
}

const Form = ({ children, closeDialog }: FormProps) => {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
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
      body: JSON.stringify(content),
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

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      {children}
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
