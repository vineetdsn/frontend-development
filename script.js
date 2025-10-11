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
      linearGradient.setAttribute("id", "gradient");
    stop1.setAttribute("stop-color", "#ffa000");
    stop1.setAttribute("offset", "0%");
    linearGradient.appendChild(stop1);
    stop2.setAttribute("stop-color", "#f25767");
    stop2.setAttribute("offset", "100%");
    linearGradient.appendChild(stop2);
    linearGradientBackground.setAttribute("id", "gradient-background");
    var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("stop-color", "rgba(0,0,0,0.2)");
    stop1.setAttribute("offset", "0%");
    linearGradientBackground.appendChild(stop1);
    var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("stop-color", "rgba(0,0,0,0.5)");
    stop2.setAttribute("offset", "1000%");
    linearGradientBackground.appendChild(stop2);
    defs.appendChild(linearGradient);
    defs.appendChild(linearGradientBackground);
    this.svg.appendChild(defs);
    this.defs = defs;
  }


  

const containers = document.getElementsByClassName("chart");
const dial = new Dial(containers[0]);
dial.animateStart();


// container
class Birthday {
  constructor() {
    this.resize()

    // create a lovely place to store the firework
    this.fireworks = []
    this.counter = 0

  }

  
  resize() {
    this.width = canvas.width = window.innerWidth
    let center = this.width / 2 | 0
    this.spawnA = center - center / 4 | 0
    this.spawnB = center + center / 4 | 0
    
    this.height = canvas.height = window.innerHeight
    this.spawnC = this.height * .1
    this.spawnD = this.height * .5
    
  }

  
  onClick(evt) {
     let x = evt.clientX || evt.touches && evt.touches[0].pageX
     let y = evt.clientY || evt.touches && evt.touches[0].pageY
     
     let count = random(3,5)
     for(let i = 0; i < count; i++) this.fireworks.push(new Firework(
        random(this.spawnA, this.spawnB),
        this.height,
        x,
        y,
        random(0, 260),
        random(30, 110)))
          
     this.counter = -1
     
  }

   
}

class Firework {
  constructor(x, y, targetX, targetY, shade, offsprings) {
    this.dead = false
    this.offsprings = offsprings

    this.x = x
    this.y = y
    this.targetX = targetX
    this.targetY = targetY

    this.shade = shade
    this.history = []
  }
  update(delta) {
    if (this.dead) return

    let xDiff = this.targetX - this.x
    let yDiff = this.targetY - this.y
    if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) { // is still moving
      this.x += xDiff * 2 * delta
      this.y += yDiff * 2 * delta

      this.history.push({
        x: this.x,
        y: this.y
      })

      if (this.history.length > 20) this.history.shift()

    } else {
      if (this.offsprings && !this.madeChilds) {
        
        let babies = this.offsprings / 2
        for (let i = 0; i < babies; i++) {
          let targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0
          let targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0

          birthday.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0))

        }

      }
      this.madeChilds = true
      this.history.shift()
    }
    
    if (this.history.length === 0) this.dead = true
    else if (this.offsprings) { 
        for (let i = 0; this.history.length > i; i++) {
          let point = this.history[i]
          ctx.beginPath()
          ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
          ctx.arc(point.x, point.y, 1, 0, PI2, false)
          ctx.fill()
        } 
      } else {
      ctx.beginPath()
      ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
      ctx.arc(this.x, this.y, 1, 0, PI2, false)
      ctx.fill()
    }

  }
}

function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}
speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach((option) => option.addEventListener("change", setOption));
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));

const quizData = [
{
question: "Which language runs in a web browser?",
a: "Java",
b: "C",
c: "Python",
d: "JavaScript",
correct: "d",
},
{
question: "What does CSS stand for?",
a: "Central Style Sheets",
b: "Cascading Style Sheets",
c: "Cascading Simple Sheets",
d: "Cars SUVs Sailboats",
correct: "b",
},
{
question: "What does HTML stand for?",
a: "Hypertext Markup Language",
b: "Hypertext Markdown Language",
c: "Hyperloop Machine Language",
d: "Helicopters Terminals Motorboats Lamborginis",
correct: "a",
},
{
question: "What year was JavaScript launched?",
a: "1996",
b: "1995",
c: "1994",
d: "none of the above",
correct: "b",
},
];
