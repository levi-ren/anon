import { SignIn } from "@clerk/nextjs";

interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <main className="grid min-h-screen place-items-center bg-isabelle py-1">
      <SignIn appearance={{ variables: { colorPrimary: "#B57F50" } }} />
    </main>
  );
}
