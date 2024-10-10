function funcMenu() {
  var elements = document.querySelectorAll(".part1-hide");
  var element2 = document.querySelectorAll(".menu-deroulant-active");

  elements.forEach(function (element) {
    if (element.classList.contains("part1-hide")) {
      element.classList.remove("part1-hide");
      element.classList.add("menu-deroulant-active");
    } else if (element.classList.contains("menu-deroulant-active")) {
      element.classList.remove("menu-deroulant-active");
      element.classList.add("part1-hide");
    } else {
      element.classList.add("part1-hide");
    }
  });

  element2.forEach(function (element1) {
    if (element1.classList.contains("part1-hide")) {
      element1.classList.remove("part1-hide");
      element1.classList.add("menu-deroulant-active");
    } else if (element1.classList.contains("menu-deroulant-active")) {
      element1.classList.remove("menu-deroulant-active");
      element1.classList.add("part1-hide");
    } else {
      element1.classList.add("part1-hide");
    }
  });
}
