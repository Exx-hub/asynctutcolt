async function friendlyFn() {
  return "hello its nice to see you";
}

function friendlyPromiseFn() {
  return Promise.resolve("hello its nice to see you");
}

async function oops() {
  throw "you shouldn't have invoked me";
}

function hi() {
  return "hello";
}

const getStarWarsData = async () => {
  console.log("starting");
  try {
    let movieData = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let result = await movieData.json();
    console.log("all done");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const getData = () => {
  console.log("starting");
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((result) => {
      console.log("all done");
      console.log(result);
    })
    .catch((err) => console.log(err));
};

let baseURL = "https://pokeapi.co/api/v2/pokemon";

const getPoke = () => {
  fetch(`${baseURL}/1/`)
    .then((res) => res.json())
    .then((result) => console.log(`the first pokemon is ${result.name}`));
  fetch(`${baseURL}/2/`)
    .then((res) => res.json())
    .then((result) => console.log(`the second pokemon is ${result.name}`));
};

const getPokemon = async () => {
  let first = await fetch(`${baseURL}/1/`);
  let result = await first.json();
  console.log(`the first pokemon is ${result.name}`);

  let second = await fetch(`${baseURL}/2/`);
  let result2 = await second.json();
  console.log(`the second pokemon is ${result2.name}`);

  let third = await fetch(`${baseURL}/3/`);
  let result3 = await third.json();
  console.log(`the third pokemon is ${result3.name}`);
};
