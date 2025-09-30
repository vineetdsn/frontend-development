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

  createSlice() {
    let slice = document.createElementNS("http://www.w3.org/2000/svg", "path");
    slice.setAttribute("fill", "none");
    slice.setAttribute("stroke", "url(#gradient)");
    slice.setAttribute("stroke-width", this.strokeWidth);
    slice.setAttribute(
      "transform",
      `translate(${this.strokeWidth / 2},${this.strokeWidth / 2})`
    );
    slice.setAttribute("class", "animate-draw");
    this.svg.appendChild(slice);
    this.slice = slice;
  }

  createOverlay() {
    const r = this.size - this.size / 2 - this.strokeWidth / 2;
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", this.size / 2);
    circle.setAttribute("cy", this.size / 2);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", "url(#gradient-background)");
    circle.setAttribute("class", "animate-draw");
    this.svg.appendChild(circle);
    this.overlay = circle;
  }

  createText() {
    const fontSize = this.size / 3.5;
    let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", this.size / 2 + fontSize / 7.5);
    text.setAttribute("y", this.size / 2 + fontSize / 4);
    text.setAttribute("font-family", "Century Gothic Lato");
    text.setAttribute("font-size", fontSize);
    text.setAttribute("fill", "#78f8ec");
    text.setAttribute("text-anchor", "middle");
    const tspanSize = fontSize / 3;
    text.innerHTML = `${0}% `;
    this.svg.appendChild(text);
    this.text = text;
  }

  createArrow() {
    var arrowSize = this.size / 10;
    var mapDir = {
      up: [(arrowYOffset = arrowSize / 2), (m = -1)],
      down: [(arrowYOffset = 0), (m = 1)]
    };
    function getDirection(i) {
      return mapDir[i];
    }
    var [arrowYOffset, m] = getDirection(this.direction);

    let arrowPosX = this.size / 2 - arrowSize / 2,
      arrowPosY = this.size - this.size / 3 + arrowYOffset,
      arrowDOffset = m * (arrowSize / 1.5),
      arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
    arrow.setAttribute(
      "d",
      `M 0 0 ${arrowSize} 0 ${arrowSize / 2} ${arrowDOffset} 0 0 Z`
    );
    arrow.setAttribute("fill", "none");
    arrow.setAttribute("opacity", "0.6");
    arrow.setAttribute("transform", `translate(${arrowPosX},${arrowPosY})`);
    this.svg.appendChild(arrow);
    this.arrow = arrow;
  }

  animateStart() {
    let v = 0;
    const intervalOne = setInterval(() => {
      const p = +(v / this.value).toFixed(2);
      const a = p < 0.95 ? 2 - 2 * p : 0.05;
      v += a;
      if (v >= +this.value) {
        v = this.value;
        clearInterval(intervalOne);
      }
      this.setValue(v);
    }, 10);
  }

  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = ((angleInDegrees - 180) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  }

  describeArc(x, y, radius, startAngle, endAngle) {
    const start = this.polarToCartesian(x, y, radius, endAngle);
    const end = this.polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    const d = [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y
    ].join(" ");
    return d;
  }

  setValue(value) {
    let c = (value / 100) * 360;
    if (c === 360) c = 359.99;
    const xy = this.size / 2 - this.strokeWidth / 2;
    const d = this.describeArc(xy, xy, xy, 180, 180 + c);
    this.slice.setAttribute("d", d);
    const tspanSize = this.size / 3.5 / 3;
    this.text.innerHTML = `${Math.floor(value)}% `;
  }

  animateReset() {
    this.setValue(0);
  }
}

const containers = document.getElementsByClassName("chart");
const dial = new Dial(containers[0]);
dial.animateStart();


// helper functions
const PI2 = Math.PI * 2
const random = (min, max) => Math.random() * (max - min + 1) + min | 0
const timestamp = _ => new Date().getTime()


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

   
  update(delta) {
    ctx.globalCompositeOperation = 'hard-light'
    ctx.fillStyle = `rgba(20,20,20,${ 7 * delta })`
    ctx.fillRect(0, 0, this.width, this.height)

    ctx.globalCompositeOperation = 'lighter'
    for (let firework of this.fireworks) firework.update(delta)

      
    // if enough time passed... create new new firework
    this.counter += delta * 3 // each second
    if (this.counter >= 1) {
      this.fireworks.push(new Firework(
        random(this.spawnA, this.spawnB),
        this.height,
        random(0, this.width),
        random(this.spawnC, this.spawnD),
        random(0, 360),
        random(30, 110)))
      this.counter = 0
    }

    // remove the dead fireworks
    if (this.fireworks.length > 1000) this.fireworks = this.fireworks.filter(firework => !firework.dead)

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

let canvas = document.getElementById('birthday')
let ctx = canvas.getContext('2d')

let then = timestamp()

let birthday = new Birthday
window.onresize = () => birthday.resize()
document.onclick = evt => birthday.onClick(evt)
document.ontouchstart = evt => birthday.onClick(evt)

  ;(function loop(){
  	requestAnimationFrame(loop)

  	let now = timestamp()
  	let delta = now - then

    then = now
    birthday.update(delta / 1000)
  	

  })()

  // 
  const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
msg.text = document.querySelector('[name="text"]').value;
