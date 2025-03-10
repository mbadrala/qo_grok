document.getElementById("promptInput").focus();

var inp = document.getElementById("promptInput");
var promptPreview = document.getElementById("inputPreview")

inp.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const prompt = inp.value;
    if (prompt.trim()) {
      chrome.runtime.sendMessage({ prompt: prompt });
    }

    promptPreview.textContent = "";
    window.close();
  }
});

inp.addEventListener("input", function (event) {
  promptPreview.textContent = "\"" + event.target.value + "\"";
});
