function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

function show() {
  let para = document.getElementById("paragraph");
  para.innerHTML = "Anya Pyari si bachi he";
  para.style.display = "block";
  para.style.margin = "12px auto";
}

function changingStyle() {
  let alter = document.getElementById("textBox");
  alter.type = "textarea";
  alter.style.border = "4px solid #19183b";
}
function upperCase() {
  let uc = document.getElementById("user");
  uc.value = uc.value.toUpperCase();
}
document.getElementById("user").oninput = upperCase;

function Validation() {
  let store = document.forms.myform.user;
  let y = store.value;
  if (y == "") {
    alert("Enter kar");
    return false;
  } else {
    document.getElementById("user").disabled = true;
  }
}

// API
const APIurl = "https://randomuser.me/api/";

async function getUser() {
  const response = await fetch(APIurl);
  const data = await response.json();
  console.log(data.results);

  const user = data.results[0];
  let { title, first, last } = user.name;
  let { gender, email, phone } = user;
  let image = user.picture.medium;
  let image_icon = user.picture.thumbnail;
  let age = user.dob.age;
  let { city, state, country } = user.location;

  let fullname = title + ". " + first + " " + last;
  console.log(fullname)
  document.title = fullname;

  document.getElementById("full-name").innerHTML = fullname;
  document.getElementById("email").innerHTML = email;
  document.getElementById("phone").innerHTML = phone;
  document.getElementById("phone").href = "tel:" + phone;


  document.querySelector("#age").textContent = age;
  document.querySelector("#gender").textContent = gender;

  document.querySelector("#location").textContent = city + ", " + state;

  document.querySelector("#country").textContent = country;

  let img = document.createElement("img")
  let img_div = document.getElementById("images")
  img.src = image
  img_div.append(img);
    const favicon = document.getElementById("favicon");
      favicon.setAttribute("href", image_icon);
}

getUser();

// API fetch using Fetch API
// Define API Url
const url = 'https://jsonplaceholder.typicode.com/users';
// Make a GET request
const outputElement = document.getElementById('output');

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log("Data display"+data.results)
    // Display data in an HTML element
    outputElement.textContent = JSON.stringify(data.results);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  // Handling POST request of API

  const postUrl = 'https://jsonplaceholder.typicode.com/users';

  let data = {
    name: 'Jack hammer'
  }

  let fetchData = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  }

  fetch(postUrl, fetchData)
    .then(function(){

    })


    const apiUrl = 'https://api.example.com/data';
const pdata = {
  name: 'John Doe',
  email: 'johndoe@example.com',
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(pdata),
};

fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(pdata => {
    outputElement.textContent = JSON.stringify(pdata, null, 2);
  })
  .catch(error => {
    console.error

('Error:', error);
  });

// Promise

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// // .catch(f) is the same as promise.then(null, f)
// promise.catch(alert); // shows "Error: Whoops!" after 1 second

// cards
let cards = 3;
let cardBox = document.getElementsByClassName('flex-cards');
let sectionCards = document.getElementById('cards');
for (i=0; i<cards; i++){
  let card =document.createElement('div')
  card.classList.add('flex-cards');
  sectionCards.appendChild(card)
}

// bar
class Dial {
  constructor(container) {
    this.container = container;
    this.size = this.container.dataset.size;
    this.strokeWidth = this.size / 8;
    this.radius = this.size / 2 - this.strokeWidth / 2;
    this.value = this.container.dataset.value;
    this.direction = this.container.dataset.arrow;
    this.svg;
    this.defs;
    this.slice;
    this.overlay;
    this.text;
    this.arrow;
    this.create();
  }

  create() {
    this.createSvg();
    this.createDefs();
    this.createSlice();
    this.createOverlay();
    this.createText();
    this.createArrow();
    this.container.appendChild(this.svg);
  }

  createSvg() {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", `${this.size}px`);
    svg.setAttribute("height", `${this.size}px`);
    this.svg = svg;
  }

  createDefs() {
    var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs"),
      linearGradient = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "linearGradient"
      ),
      stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop"),
      stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop"),
      linearGradientBackground = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "background"
      );