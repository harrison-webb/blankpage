const white = "#fffcfc";
const sepia = "#fffac4";
const black = "#000";

window.onload = function () {
  const editorDiv = document.getElementById("editor");
  const downloadTxtButton = document.getElementById("download-txt");
  const downloadMdButton = document.getElementById("download-md");
  const fontSelect = document.getElementById("font-select");
  const lightModeButton = document.querySelector(".light-mode");
  const sepiaModeButton = document.querySelector(".sepia-mode");
  const darkModeButton = document.querySelector(".dark-mode");

  //change font
  fontSelect.addEventListener("change", () => {
    editorDiv.style.fontFamily = fontSelect.value;
  });

  //change color scheme
  lightModeButton.addEventListener("click", () => {
    document.body.style.background = white;
    document.body.style.color = black;
  });
  sepiaModeButton.addEventListener("click", () => {
    document.body.style.background = sepia;
    document.body.style.color = black;
  });
  darkModeButton.addEventListener("click", () => {
    document.body.style.background = black;
    document.body.style.color = white;
  });

  //save as .txt
  downloadTxtButton.addEventListener("click", () => {
    const note = editorDiv.textContent;
    const blob = new Blob([note], { type: "text/plain" });
    const anchor = document.createElement("a");
    anchor.download = "my_note.txt";
    anchor.href = (window.webkitURL || webkitURL).createObjectURL(blob);
    anchor.dataset.downloadurl = [
      "text/plain",
      anchor.download,
      anchor.href,
    ].join(":");
    anchor.click();
  });

  //save as .md
  downloadMdButton.addEventListener("click", () => {
    const note = editorDiv.textContent;
    const blob = new Blob([note], { type: "text/markdown" });
    const anchor = document.createElement("a");
    anchor.download = "my_note.md";
    anchor.href = (window.webkitURL || webkitURL).createObjectURL(blob);
    anchor.dataset.downloadurl = [
      "text/markdown",
      anchor.download,
      anchor.href,
    ].join(":");
    anchor.click();
  });
};
