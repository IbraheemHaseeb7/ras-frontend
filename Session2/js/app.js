// DOM -> DOCUMENT OBJECT MODEL

const heading = document.querySelector("#heading");
const container = document.querySelector(".container");

heading.innerHTML = "hello world";

const array = [
  { name: "john", salary: 50000 },
  { name: "doe", salary: 650000 },
  { name: "jane", salary: 70000 },
  { name: "smith", salary: 80000 },
  { name: "anabelle", salary: 90000 },
];

// const newArray = array.map((v) => {
//   console.log(v);
// });

const s = "salary";

const filterArray = array.filter((v) => {
  return v[s] > 70000;
});

async function bar() {
  await fetch(
    "https://express-testing.netlify.app/.netlify/functions/api/demo"
  ).then((res) => {
    res.json().then((r) => {
      console.log(r.response);
    });
  });
}

bar();
