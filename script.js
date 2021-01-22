console.log(/hr/);
const url = 'https://my-json-server.typicode.com/yamnyk/demo/posts';
function getArr() {
  return new Promise((resolve, reject) => {
    fetch(url, { method: ‘GET’ })
      .then((res) => {
        return res.json();
      })
      .then((posts) => {
        let res = posts;
        resolve(res);
      });
  });
}
let posts = [];
getArr().then((res) => {
  posts = res;
  console.log(posts);
});
function filterPosts(id, posts) {
  const filtered = posts.filter((item) => {
    console.log(item);
    return item.authorID === id;
  });
  console.log(filtered);
}
filterPosts(1111, posts);
