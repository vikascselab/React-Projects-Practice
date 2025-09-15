import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostlist] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai ",
    body: "Going to mumbai for my vacation Hope to enjoy a lot.Peace out",
    reaction: 2,
    userid: "user-9",
    tags: ["vacation", "Mumbai", "Enjoing"],
  },
  {
    id: "2",
    title: "Pass ho gaye ",
    body: "4 sal ke masti ke bad bhi ho gaye hai pass",
    reaction: 15,
    userid: "user-12",
    tags: ["Graduating", "Unbelievable", "Enjoing"],
  },
];

export default PostListProvider;
