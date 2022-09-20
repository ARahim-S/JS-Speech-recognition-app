"use:strict";
const startRecogBtnStart = document.querySelector(".startRecognitionStart");
const startRecogBtnEnd = document.querySelector(".startRecognitionEnd");
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-US";

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

function start() {
  recognition.start();
  console.log("Speech recognition started");
}

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  console.log(e.results);
  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});

function stop() {
  recognition.stop();
  console.log("Speech recognition has stopped.");
}

startRecogBtnStart.addEventListener("click", start);
startRecogBtnEnd.addEventListener("click", stop);
