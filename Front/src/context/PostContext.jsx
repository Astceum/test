import { useState, createContext, useContext, useEffect } from "react";
import {
  getPostsRequests,
  createPostsRequests,
  deletePostsRequests,
  getPostRequest,
  updatePostsRequests,
} from "../api/posts";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostsRequests();
    setPosts(res.data);
  };

  const createPost = async (post) => {
    const res = await createPostsRequests(post);
    setPosts([...posts, res.data]);
  };

  const deletePost = async (id) => {
    const res = await deletePostsRequests(id);
    if (res.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  };

  const getPost = async (id) => {
    const res = await getPostRequest(id)
    console.log(res.data)
    return res.data;
  };

  const updatePost = async (id, post) => {
    const res = await updatePostsRequests(id, post);
    setPosts(posts.map((post) => (post._id === id? res.data : post)));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider
      value={{
        posts,
        getPosts,
        createPost,
        deletePost,
        getPost,
        updatePost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
