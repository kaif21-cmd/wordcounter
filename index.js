const textInput = document.getElementById("text-input");
const wordCountDisplay = document.getElementById("word-count");

function countWords() {
  const text = textInput.value;
  const wordCount = text.trim().split(/\s+/).length;
  wordCountDisplay.innerText = wordCount;
}

textInput.addEventListener("input", countWords);
