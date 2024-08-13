document.addEventListener('DOMContentLoaded', function () {
  var typed = new Typed('.typer', {
    strings: ["Web Developer", "Software Developer", "Designer","Social Helper"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
  });

  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.menu ul').classList.toggle('show');
  });
});
