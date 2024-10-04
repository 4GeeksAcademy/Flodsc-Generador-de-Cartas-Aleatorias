/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateRandomCard();
  document
    .getElementById("newCardBtn")
    .addEventListener("click", generateRandomCard);

  // Temporizador para generar una nueva carta cada 10 segundos
  setInterval(generateRandomCard, 10000);
};

function generateRandomCard() {
  const suits = ["heart", "spade", "diamond", "club"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // Palo y valor aleatorio
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];

  // Elemento de la carta
  let card = document.getElementById("card");

  // Clases y valores de las cartas
  card.className = `card ${randomSuit}`;
  card.querySelector(".card-value").textContent = randomValue;
  card.querySelector(".suit-top").textContent = getSuitSymbol(randomSuit);
  card.querySelector(".suit-bottom").textContent = getSuitSymbol(randomSuit);

  // Color del valor de la carta
  if (randomSuit === "heart" || randomSuit === "diamond") {
    card.querySelector(".card-value").style.color = "red";
  } else {
    card.querySelector(".card-value").style.color = "black";
  }
}

function getSuitSymbol(suit) {
  switch (suit) {
    case "heart":
      return "♥";
    case "spade":
      return "♠";
    case "diamond":
      return "♦";
    case "club":
      return "♣";
  }
}
