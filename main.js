const arena = document.querySelector(".arenas");
const randomButton = document.querySelector(".button");

const player_1 = {
   player: 1,
   name: "Игрок-1",
   hp: 100,
   img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
   weapon: ["рука", "нога"],
   attack() {
      console.log(`${this.name} Fight...`);
   },
};

const player_2 = {
   player: 2,
   name: "Игрок-2",
   hp: 100,
   img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
   weapon: ["рука", "нога"],
   attack() {
      console.log(`${this.name} Fight...`);
   },
};

function createElement(elementType, parClass) {
   const newElement = document.createElement("div");
   newElement.classList.add(parClass);
   return newElement;
}

function createPlayer(parPlayer) {
   const divPlayer = createElement("div", `player${parPlayer.player}`);
   const divProgressbar = createElement("div", "progressbar");

   const divLife = createElement("div", "life");
   divLife.style.width = `${parPlayer.hp}%`;
   divProgressbar.appendChild(divLife);

   const divName = createElement("div", "name");
   divName.innerText = parPlayer.name;
   divProgressbar.appendChild(divName);

   divPlayer.appendChild(divProgressbar);

   const divCharacter = createElement("div", "character");
   const divImg = document.createElement("img");
   divImg.src = parPlayer.img;
   divCharacter.appendChild(divImg);
   divPlayer.appendChild(divCharacter);

   return divPlayer;
}

function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playerWon(parName) {
   const labelWon = createElement("div", "loseTitle");
   labelWon.innerText = `${parName.name} WON!!!`;
   arena.appendChild(labelWon);
   randomButton.disabled = true;
}

function changeHP(parPlayer) {
   const playerLife = document.querySelector(`.player${parPlayer.player} .life`);
   parPlayer.hp -= getRandomIntInclusive(1, 20);
   if (parPlayer.hp < 0) parPlayer.hp = 0;
   playerLife.style.width = `${parPlayer.hp}%`;
}

randomButton.addEventListener("click", function () {
   changeHP(player_1);
   if (player_1.hp === 0) playerWon(player_2);
   changeHP(player_2);
   if (player_2.hp === 0) playerWon(player_1);
});

arena.appendChild(createPlayer(player_1));
arena.appendChild(createPlayer(player_2));
