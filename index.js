const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const button = document.getElementById("button");

function sum(a, b) {
  return a + b;
}

button.addEventListener("click", function () {
  console.log(sum(num1.value, num2.value));
});
