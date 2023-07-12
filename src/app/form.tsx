"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler, PropsWithChildren } from "react";

interface FormProps extends PropsWithChildren {}

const Form = ({ children }: FormProps) => {
  const route = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const content = form.get("content");

    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    }).then((e) => {
      if (!e.ok) {
        return;
      }
      route.refresh();
    });
  };

  return (
    <form className="flex-1" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
