// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

//Solution
async function fetchData(){
  const reqs = await fetch('https://swapi.co/api/starships/9/');
  const data = await reqs.json();
  console.log(data);
}

fetchData();

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

//Solution 1
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
    convertData(url)   
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

async function convertData(url){
  const resp = await fetch(url);
  const data = await resp.json();
  return data
}

getData();

//Solution 2
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(async function(url){
    const reqs = await fetch(url);
    return reqs.json();
  }));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

getData();

// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'

//Solution 1
const urls = [
  'https://jsonplaceholder.typicode.co/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try{
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      convertData(url)   
    ));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
  } catch{
    console.log('ooooooooooops');
  }

}

async function convertData(url){
  const resp = await fetch(url);
  const data = await resp.json();
  return data
}

getData();

//Solution 2
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicod.com/albums'
]

const getData = async function() {
  try{
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url){
      const reqs = await fetch(url);
      return reqs.json();
    }));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
  } catch{
    console.log('Blast it!!!!');
  }

}

getData();
