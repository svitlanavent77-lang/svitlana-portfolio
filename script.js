const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation a");

menuToggle.addEventListener("click", function () {
  navigation.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navigation.classList.remove("active");
  });
});
