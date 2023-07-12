export interface Post {
  id: string;
  expiry: string;
  content: string;
  username: string;
  image: string;
}

export interface PostDocument {
  expiry: Date;
  content: string;
  username: string;
  image: string;
}
