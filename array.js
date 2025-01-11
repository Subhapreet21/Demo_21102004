// const user1 = "Sathwik";
// const user2 = "Teju";
// const user3 = "Vishnu";
// const user4 = "Pavitra";
// const user5 = "Raghu";
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

// !Array
const users = ["Sathwik", "Teju", "Vishnu", "Pavitra", "Raghu"];
console.log(users);
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
console.log("************");
let x = users.map((user) => {
  //   console.log(user);
  return user;
});
console.log(x);

console.log("************");

let y = users.forEach((user) => {
  //   console.log(user);
  return user;
});
console.log(y);

const people = ["Sathwik", "Teju", "Vishnu", "Pavitra", "Raghu"];
console.log(people);
// console.log(people[0]);
// console.log(people[1]);
people.push("Arun");
console.log(people);

people.pop();
console.log(people);

people.unshift("Mahesh");
console.log(people);

people.shift();
console.log(people);

console.log(people.reverse());
let z = people.join("");
console.log(z, typeof z);

let frontend = ["HTML", "CSS", "JS", "React", "Angular", "Vue"];
let backend = ["Node", "Express", "MongoDB", "SQL", "Python", "Java"];
let db = ["MongoDB", "MySQL", "Oracle", "MariaDB", "CouchDB"];
// console.log(frontend + backend);
let fullstack = frontend.concat(backend, db);
console.log(fullstack);

// !Objects
let userDetails = {
  name: "Sathwik",
  age: 20,
  city: "Hyderabad",
  address: {
    area: "Karimnagar",
    streetNo: "3",
    pinCode: "505415",
  },
};
console.log(userDetails);
console.log(userDetails.address);
console.log(userDetails.name);

// !Nested Objects
let user = {
  name: "Sathwik",
  age: 20,
  city: "Hyderabad",
  address: {
    area: "Karimnagar",
    streetNo: "3",
    pinCode: "505415",
  },
  hobbies: ["Cricket", "Football", "Reading", "Coding"],
  skills: {
    programming: "JavaScript",
    design: "UI/UX",
  },
};
console.log(user.skills.programming);

// !JavaScript Objects

const users2 = [
  {
    name: "Laxman reddy",
    rollno: "2211cs010133",
  },
  {
    name: "Prasoon",
    rollno: "2211cs010430",
  },
];
users2.map((user) => {
  console.log(user.name);
});

function fetchUsers() {
  window
    .fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) =>
      res.json().then((data) => {
        // console.log(data);
        let store = document.getElementById("store");
        data.map((user) => {
          store.innerHTML += `<h1>${user.name}</h1>`;
        });
      })
    )
    .catch((err) => {
      console.log(err);
    });
}
fetchUsers();
