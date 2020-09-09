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

//creating promise
const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("error wrong");
      }
    }, 2000);
  });
};

//dealing with response

// createPost({ title: "post 3", body: "this is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// ASYNC AWAIT

// async function init() {
//   await createPost({ title: "post 3", body: "this is post three" });

//   getPosts();
// }

// init();

// ASYNC AWAIT WITH FETCH

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  console.log(data);
};

// fetchUsers();

// promise.all

// const promise1 = Promise.resolve("hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "goodbye")
// );
// const promise4 = fetch(
//   "https://jsonplaceholder.typicode.com/users"
// ).then((res) => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );

function one() {
  setTimeout(() => {
    console.log("one");
    setTimeout(() => {
      console.log("two");
      setTimeout(() => {
        console.log("three");
      }, 2000);
    }, 2000);
  }, 2000);
}

// one();

function wan(i) {
  return new Promise((resolve, reject) => {
    console.log("starting");
    if (i === 2) {
      resolve("that is correct");
    } else {
      reject("wrong!");
    }
    console.log("done");
  });
}

// wan(3)
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));

// async function anonnymous() {
//   const result = await wan(2);
//   console.log(result);
// }

// anonnymous();

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((err) => console.log("wrong!", err));
}

// fetchData();

async function fetching() {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log("oops", error);
  }
}

// fetching();

function plus(a, b) {
  return new Promise((resolve, reject) => {
    resolve(a + b);
  });
}

function minus(a, b) {
  return new Promise((resolve, reject) => {
    resolve(a - b);
  });
}

// Promise.all([plus(5, 5), minus(100, 10)]).then((res) => console.log(res));

// plus(5, 5)
//   .then((res) => res + 10)
//   .then((result) => result + 2)
//   .then((answer) => answer + 10)
//   .then((final) => console.log(final));

const addFunc = async () => {
  const result = await plus(10, 10);
  const data = await plus(result, 10);
  const anotha = await plus(data, 15);
  console.log(anotha);
};
// addFunc();

const a = fetch("https://jsonplaceholder.typicode.com/todos/1");
const b = fetch("https://jsonplaceholder.typicode.com/todos/2");

Promise.all([a, b])
  // .then((res) => res.json())
  .then((res) =>
    res.map(async (item) => {
      const result = await item.json();
      return console.log(result);
    })
  );
