// Component
// JSX
//Props
//State
//Events
// Conditional Rendaring

//1.Api: url: http://jsonplaceholder.typicode.com/users

//1. just write a simple fetch with json coversion
//2. wrap the data loading component under suspense

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => console.log(data));

const loadData = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = res.json();
    return data;
}