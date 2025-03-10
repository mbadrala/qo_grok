const urlParams = new URLSearchParams(window.location.search);
const prompt = urlParams.get("q");
if (prompt) {
  const inputField = document.querySelector("input[type='text']");
  if (inputField) {
    inputField.value = prompt;
    inputField.form?.submit();
  }
}
