const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const num = document.querySelector(".num");
const box = document.querySelector(".color-container");
function updateGardient() {
    box.style.background = `linear-gradient(${num.value}deg, ${c1.value}, ${c2.value})`;
}
num.addEventListener("input", () => {
    if (num.value < 0) num.value = 0;
    if (num.value > 360) num.value = 360;
    updateGradient();
});
updateGardient()
c1.addEventListener("input", updateGardient);
c2.addEventListener("input", updateGardient);
num.addEventListener("input", updateGardient);