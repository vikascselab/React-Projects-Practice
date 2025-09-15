import { useContext } from "react";
import Post from "./Post";

import { PostList as PostlistData } from "../store/post-list-store";
const PostList = () => {
  const { postlist } = useContext(PostlistData);
  return (
    <>
      {postlist.map((post) => (
        <Post />
      ))}
    </>
  );
};

export default PostList;
