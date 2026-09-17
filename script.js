const danger = document.getElementById("danger");
const analyzeBtn = document.getElementById("analyzeBtn");

const result = document.getElementById("result");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

const dangerData = {
  kickboard: {
    title: "⚠️ 주의",
    text: "앞쪽에 공유 킥보드가 있을 수 있습니다. 주변을 살피며 안전하게 이동하세요.",
    color: "#f59e0b"
  },

  stairs: {
    title: "⚠️ 경고",
    text: "계단이 있는 경로입니다. 이동에 주의하고 가능한 경우 다른 경로를 고려하세요.",
    color: "#f97316"
  },

  broken: {
    title: "🚨 위험",
    text: "보행로 파손이 확인된 상황입니다. 파손 구간을 피하고 안전한 경로를 이용하세요.",
    color: "#ef4444"
  },

  normal: {
    title: "✅ 안전",
    text: "현재 선택된 보행로에는 등록된 위험 요소가 없습니다. 주변을 계속 확인하며 이동하세요.",
    color: "#22c55e"
  }
};

analyzeBtn.addEventListener("click", () => {
  const selected = danger.value;

  if (!selected) {
    alert("위험 유형을 선택해주세요.");
    return;
  }

  const data = dangerData[selected];

  resultTitle.textContent = data.title;
  resultText.textContent = data.text;

  result.style.borderLeftColor = data.color;
  result.classList.remove("hidden");
});
