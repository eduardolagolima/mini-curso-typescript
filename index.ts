const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("button");

function sum(a: number, b: number) {
  return a + b;
}

button!.addEventListener("click", function () {
  console.log(sum(Number(num1.value), Number(num2.value)));
});
