import { createContext, useReducer } from "react";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postid
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostlist] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postid) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  };

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
