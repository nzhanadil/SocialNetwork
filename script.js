const closeBtn = document.getElementById("closeBtn");
const mainCont = document.querySelector(".mainCont");
const closeBtn2 = document.querySelector("#closeBtn2");
const mainCont2 = document.querySelector(".mainCont2");

closeBtn.addEventListener("click", () => {
  mainCont.remove();
});

closeBtn2.addEventListener("click", () => {
  mainCont2.remove();
});
