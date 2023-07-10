import Container from "@/components/container";
import Logo from "@/components/logo";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <header className="bg- sticky top-0 shadow-lg">
        <Container className="flex justify-between px-2 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8 " />
            <h1 className="font-medium">ANON</h1>
          </Link>
          <UserButton afterSignOutUrl="/sign-in" />
        </Container>
      </header>
      <main className=""></main>
    </>
  );
}
