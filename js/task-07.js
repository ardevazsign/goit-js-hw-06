const fontSizeVar = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#TEXT");

fontSizeControl.addEventListener("input", function () {
  const fontSize = fontSizeVar.value + "px";
  textSpan.computedStyleMap.fontSize = fontSize;
});