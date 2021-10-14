const player_1 = {
   name: "Игрок-1",
   hp: 100,
   img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
   weapon: ["рука", "нога"],
   attack() {
      console.log(`${this.name} Fight...`);
   },
};

const player_2 = {
   name: "Игрок-2",
   hp: 100,
   img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
   weapon: ["рука", "нога"],
   attack() {
      console.log(`${this.name} Fight...`);
   },
};

function createPlayer(parClass, parPlayer) {
   const arena = document.querySelector(".arenas");

   const divPlayer = document.createElement("div");
   divPlayer.classList.add(parClass);

   const divProgressbar = document.createElement("div");
   divProgressbar.classList.add("progressbar");

   const divLife = document.createElement("div");
   divLife.classList.add("life");
   divLife.style.width = "100%";
   divProgressbar.appendChild(divLife);

   const divName = document.createElement("div");
   divName.classList.add("name");
   divName.innerText = parPlayer.name;
   divProgressbar.appendChild(divName);

   divPlayer.appendChild(divProgressbar);

   const divCharacter = document.createElement("div");
   divCharacter.classList.add("character");
   const divImg = document.createElement("img");
   divImg.src = parPlayer.img;
   divCharacter.appendChild(divImg);
   divPlayer.appendChild(divCharacter);

   arena.appendChild(divPlayer);
}

createPlayer("player1", player_1);
createPlayer("player2", player_2);
