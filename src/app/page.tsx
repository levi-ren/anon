import Container from "@/components/container";
import CreatePost from "./create-post";
import Header from "./header";
import LeftAside from "./left-aside";
import Posts from "./posts";

export default async function Home() {
  return (
    <>
      <Header />
      <Container
        as="main"
        className="flex min-h-screen justify-between divide-x dark:divide-zinc-700 sm:px-2"
      >
        <LeftAside />

        <Posts>
          <CreatePost />
        </Posts>

        <section className="sticky top-0 flex max-h-screen flex-1 flex-col gap-y-2 py-4"></section>
      </Container>
    </>
  );
}
