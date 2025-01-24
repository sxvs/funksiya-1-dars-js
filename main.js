// function score(nun1, nun2) {
//   console.log(nun1, nun2);
// }

// console.log(random(20));

// function random(max) {
//   return Math.floor(Math.random() * max);
// }

// const Getfunction = (m, n) => {
//   return m * n;
// };

// console.log(Getfunction(33, 3));

// Получаем все элементы ссылок
const links = document.querySelectorAll("nav a");

// Светлый режим
document.getElementById("lightMode").addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  links.forEach((link) => {
    link.style.color = "black"; // Цвет ссылок
  });
});

// Тёмный режим
document.getElementById("darkMode").addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  links.forEach((link) => {
    link.style.color = "white"; // Цвет ссылок
  });
});
