import Container from "@/components/container";
import Logo from "@/components/logo";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <header className="sticky top-0 shadow-lg backdrop-blur-md">
      <Container className="flex justify-between px-2 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8 " />
          <h1 className="font-medium">ANON</h1>
        </Link>
        <UserButton
          appearance={{
            userProfile: { variables: { colorPrimary: "#B57F50" } },
          }}
          afterSignOutUrl="/sign-in"
        />
      </Container>
    </header>
  );
}
