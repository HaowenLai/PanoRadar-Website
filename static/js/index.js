// Smooth in page jump
document.addEventListener("click", function (e) {
  const link = e.target.closest(".jump-in-page");
  if (!link) return;

  e.preventDefault();

  const id = link.dataset.target;
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    history.pushState(null, "", "#" + id);
  }
});

$(document).ready(function () {
  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  }

  // Initialize all div with carousel class
  var carousels = bulmaCarousel.attach('.carousel', options);

  // Loop on each carousel initialized
  for (var i = 0; i < carousels.length; i++) {
    // Add listener to  event
    carousels[i].on('before:show', state => {
      console.log(state);
    });
  }

  // Access to bulmaCarousel instance of an element
  var element = document.querySelector('#my-element');
  if (element && element.bulmaCarousel) {
    // bulmaCarousel instance is available as element.bulmaCarousel
    element.bulmaCarousel.on('before-show', function (state) {
      console.log(state);
    });
  }
})
