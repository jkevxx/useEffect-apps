const getUser = async () => {
  const userId = Math.floor(Math.random() * 10) + 1;
  // console.log(userId);

  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const res = await fetch(url);
  const user = await res.json();

  return user;
};

const getPost = async (userId) => {
  // console.log(userId); if we don't validate userId exist, we're gonna receive undefined
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const res = await fetch(url);
  const posts = await res.json();

  return posts;
};

// if we want to use export default, we only need one function without {}
export { getUser, getPost };
