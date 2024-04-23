
const container = document.querySelector('.container');
const centerX = container.offsetWidth / 2;
const centerY = container.offsetHeight / 2;
const centerRadius = 70; // Adjust as needed
const array = ['#ed710c', '#b4e112', '#0cd16e', '#6e17d9', '#062f4a', '#f705f3'];
let coloredice = ''
let p1 = 0;
let p2 = 0;
let chance = 0;
for (let i = 0; i < 1; i++) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];
  const angle = (i / 1) * Math.PI * 2;
  const x = centerX + 0 * Math.cos(angle);
  const y = centerY + 0 * Math.sin(angle);

  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.addEventListener('click', () => {

    if (chance == 0) {
      document.getElementById("player1").style.backgroundColor = '#ed710c';

      if (randomElement == coloredice) {
        p1 = p1 + 1;
        console.log(p1, 'somthing 1')
        document.getElementById("player1").innerHTML = p1;


      }
      else {
        chance = 1
        console.log(chance, 'chance')
        

      }
    }
    else if (chance == 1) {
      document.getElementById("player2").style.backgroundColor = '#ed710c';

      circle.style.backgroundColor = randomElement;


      if (randomElement == coloredice) {
        p2 = p2 + 1;
        console.log(p2, 'somthing 2')
        document.getElementById("player2").innerHTML = p2;



      }
      else {
        chance = 0
        console.log(chance, 'chance0')

      }
    }

    if (randomElement == coloredice) {
      circle.style.backgroundColor = coloredice;
      circle.style.pointerEvents = 'none';
      circle.addEventListener('mouseleave', () => {
        circle.style.backgroundColor = coloredice;
        console.log(coloredice, 'color')
      });
      console.log(coloredice, 'color')

    } else {
      circle.addEventListener('mouseleave', () => {
        circle.style.backgroundColor = '#e0e4e7';
        console.log(coloredice, 'color')
      });

    }
  });
  container.appendChild(circle);
}

for (let i = 0; i < 7; i++) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];
  const angle = (i / 7) * Math.PI * 2;
  const x = centerX + centerRadius * Math.cos(angle);
  const y = centerY + centerRadius * Math.sin(angle);
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.addEventListener('click', () => {
    circle.style.backgroundColor = randomElement;
    if (chance == 0) {
      if (randomElement == coloredice) {
        p1 = p1 + 1;
        console.log(p1, 'somthing 1')
        document.getElementById("player1").innerHTML = p1;
      }
      else {
        chance = 1
        console.log(chance, 'chance')
      }
    }
    else if (chance == 1) {
      if (randomElement == coloredice) {
        p2 = p2 + 1;
        console.log(p2, 'somthing 2')
        document.getElementById("player2").innerHTML = p2;


      }
      else {
        chance = 0
        console.log(chance, 'chance0')
      }
    }



    if (randomElement == coloredice) {
      circle.style.backgroundColor = coloredice;
      circle.style.pointerEvents = 'none';
      circle.addEventListener('mouseleave', () => {
        circle.style.backgroundColor = coloredice;
        console.log(coloredice, 'color')
      });
      console.log(coloredice, 'color')

    } else {
      circle.addEventListener('mouseleave', () => {
        circle.style.backgroundColor = '#e0e4e7';
        console.log(coloredice, 'color')
      });

    }
  });


  container.appendChild(circle);
}

const radius = Math.min(centerX, centerY) - 30; // Adjust for circle radius and spacing

for (let i = 0; i < 14; i++) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];
  const angle = (i / 14) * Math.PI * 2;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  circle.addEventListener('click', () => {

    circle.style.backgroundColor = randomElement;
    if (chance == 0) {
      if (randomElement == coloredice) {
        p1 = p1 + 1;
        console.log(p1, 'somthing 1')
        document.getElementById("player1").innerHTML = p1;
      }
      else {
        chance = 1
        console.log(chance, 'chance')
      }
    }
    else if (chance == 1) {
      if (randomElement == coloredice) {
        p2 = p2 + 1;
        console.log(p2, 'somthing 2')
        document.getElementById("player2").innerHTML = p2;


      }
      else {
        chance = 0
        console.log(chance, 'chance0')
      }
    }


    if (randomElement == coloredice) {
      circle.style.backgroundColor = coloredice;
      circle.style.pointerEvents = 'none';
      circle.addEventListener('mouseleave', () => {
        circle.style.backgroundColor = coloredice;
        console.log(coloredice, 'color')
      });
      console.log(coloredice, 'color')

    } else {
      circle.addEventListener('mouseleave', () => {
        circle.style.backgroundColor = '#e0e4e7';
        console.log(coloredice, 'color')
      });

    }
  });


  container.appendChild(circle);
}

function rollDice() {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
    die.dataset.roll = getRandomNumber(1, 6);

  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let a = Math.floor(Math.random() * (max - min + 1)) + min
  if (a == 1) {
    coloredice = '#ed710c'
  } else if (a == 2) {
    coloredice = '#b4e112'
  } else if (a == 3) {
    coloredice = '#0cd16e'
  } else if (a == 4) {
    coloredice = '#6e17d9'
  } else if (a == 5) {
    coloredice = '#062f4a'
  } else {
    coloredice = '#f705f3'
  }
  return a;
}

document.getElementById("roll-button").addEventListener("click", rollDice);

