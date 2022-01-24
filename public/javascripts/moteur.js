function calcul(a = 0, b = 0, operator) {
  if (Number.isNaN(a) || Number.isNaN(b)) return null;
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "x") return a * b;
  if (operator === "/") return a / b;
}

const elements = ["nbrA", "nbrB", "result", "opé"].map((element) => {
  return document.getElementById(element);
});

for (const element of elements) {
  element.addEventListener("change", () => {
    result.value = calcul(
      parseInt(nbrA.value),
      parseInt(nbrB.value),
      opé.value,
    );
  });
}
