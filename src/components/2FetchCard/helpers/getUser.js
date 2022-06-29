const getUser = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const res = await fetch(url)
  const user = await res.json();

  return user

}


export { getUser }
