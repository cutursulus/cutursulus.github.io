let level = Number(localStorage.getItem("bananaLevel")) || 0;
let coins = Number(localStorage.getItem("bananaCoins")) || 1000;
let bestLevel = Number(localStorage.getItem("bananaBest")) || 0;

const banana = document.getElementById("banana");
const bananaName = document.getElementById("bananaName");
const levelText = document.getElementById("level");

const coinsText = document.getElementById("coins");
const bestLevelText = document.getElementById("bestLevel");

const costText = document.getElementById("cost");
const chanceText = document.getElementById("chance");

const message = document.getElementById("message");

const upgradeButton = document.getElementById("upgradeButton");
const resetButton = document.getElementById("resetButton");


/* 강화 단계 데이터 */

const bananaLevels = [
  {
    name: "평범한 바나나",
    emoji: "🍌",
    chance: 100,
    cost: 100
  },

  {
    name: "잘 익은 바나나",
    emoji: "🍌",
    chance: 95,
    cost: 150
  },

  {
    name: "황금빛 바나나",
    emoji: "🍌",
    chance: 90,
    cost: 250
  },

  {
    name: "황금 바나나",
    emoji: "🟡",
    chance: 80,
    cost: 400
  },

  {
    name: "다이아 바나나",
    emoji: "💎",
    chance: 70,
    cost: 600
  },

  {
    name: "불타는 바나나",
    emoji: "🔥",
    chance: 60,
    cost: 900
  },

  {
    name: "번개 바나나",
    emoji: "⚡",
    chance: 45,
    cost: 1300
  },

  {
    name: "신의 바나나",
    emoji: "👑",
    chance: 30,
    cost: 2000
  },

  {
    name: "초월 바나나",
    emoji: "🌌",
    chance: 15,
    cost: 3500
  },

  {
    name: "???",
    emoji: "❓",
    chance: 5,
    cost: 5000
  },

  {
    name: "BANANA GOD",
    emoji: "🍌",
    chance: 1,
    cost: 10000
  }
];


/* 화면 업데이트 */

function updateScreen() {

  const data = bananaLevels[Math.min(level, bananaLevels.length - 1)];

  banana.textContent = data.emoji;

  bananaName.textContent = data.name;

  levelText.textContent = level;

  coinsText.textContent = coins.toLocaleString();

  bestLevelText.textContent = "+" + bestLevel;

  costText.textContent = data.cost.toLocaleString();

  chanceText.textContent = data.chance;

  if (level >= bananaLevels.length - 1) {

    message.textContent = "👑 BANANA GOD 달성!";

    upgradeButton.textContent = "👑 최고 단계";

    upgradeButton.disabled = true;

  }

}


/* 강화 */

function upgrade() {

  const data = bananaLevels[level];

  if (coins < data.cost) {

    message.textContent = "💸 코인이 부족합니다!";

    return;

  }

  coins -= data.cost;

  const random = Math.random() * 100;

  if (random < data.chance) {

    level++;

    if (level > bestLevel) {
      bestLevel = level;
    }

    message.textContent =
      "🎉 강화 성공! +" + level + " 달성!";

    banana.classList.remove("fail");

    banana.classList.add("success");

    setTimeout(() => {
      banana.classList.remove("success");
    }, 500);

  } else {

    message.textContent =
      "💥 강화 실패! +" + level + " 유지!";

    banana.classList.remove("success");

    banana.classList.add("fail");

    setTimeout(() => {
      banana.classList.remove("fail");
    }, 400);

  }

  saveGame();

  updateScreen();

}


/* 게임 저장 */

function saveGame() {

  localStorage.setItem("bananaLevel", level);

  localStorage.setItem("bananaCoins", coins);

  localStorage.setItem("bananaBest", bestLevel);

}


/* 게임 초기화 */

function resetGame() {

  const answer = confirm(
    "정말 처음부터 다시 시작할까요?"
  );

  if (!answer) {
    return;
  }

  level = 0;

  coins = 1000;

  bestLevel = 0;

  saveGame();

  message.textContent = "강화를 시작해보세요!";

  upgradeButton.disabled = false;

  upgradeButton.textContent = "⚡ 강화하기";

  updateScreen();

}


/* 이벤트 */

upgradeButton.addEventListener("click", upgrade);

resetButton.addEventListener("click", resetGame);


/* 시작 */

updateScreen();
