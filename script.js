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

