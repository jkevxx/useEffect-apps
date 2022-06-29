import React, { useEffect, useState, useCallback } from "react";
import { getUser, getPost } from "./helpers/getInformation";

// const postsUser = [
//   { id: 1, title: "Post 1" },
//   { id: 2, title: "Post 2" },
// ];

function FetchCardApp() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  // console.log(user);
  const updateUser = () => {
    getUser().then((newUser) => {
      setUser(newUser);
    });
  };

  const updatePosts = useCallback(() => {
    getPost(user.id).then((newPost) => {
      setPosts(newPost);
    });
  }, [user.id]);

  useEffect(() => {
    updateUser();
  }, []);

  useEffect(() => {
    // with ? validate if exist
    if (user?.id) {
      updatePosts();
    }
  }, [user, updatePosts]);

  return (
    <div>
      <button onClick={updateUser}>Update User</button>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>

      <h4>Posts</h4>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}

export default FetchCardApp;
