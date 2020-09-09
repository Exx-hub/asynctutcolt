const posts = [
  { title: "post 1", body: "this is post one" },
  { title: "post 2", body: "this is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((item) => {
      output += `<li>${item.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

createPost({ title: "post 3", body: "this is post three" }, getPosts);

// getPosts();
