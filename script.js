const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

console.log("Button:", menuToggle);
console.log("Navigation:", navigation);

menuToggle.addEventListener("click", function () {
  alert("Button clicked");

  navigation.classList.toggle("active");
});
