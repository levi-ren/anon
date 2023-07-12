import Container from "@/components/container";
import { getPosts } from "@/db/posts";
import CreatePost from "./create-post";
import Header from "./header";
import Posts from "./posts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <>
      <Header />
      <Container as="main" className="">
        <CreatePost />
        <Posts />
      </Container>
    </>
  );
}
