// Dark mode toggle part
const toggle = document.querySelector(".toggle");

let darkMode = localStorage.getItem("darkMode");
const enable = () => {
  document.querySelector("body").classList.add("dark__bg");
  localStorage.setItem("darkMode", "enabled");
};

const disabled = () => {
  document.querySelector("body").classList.remove("dark__bg");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enable();
  toggle.classList.add("active");
}

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enable();
    console.log(darkMode);
  } else {
    disabled();
    console.log(darkMode);
  }
});

// slider part
const clienSlider = document.querySelector(".client__slider");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

$(clienSlider).slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: prev,
  nextArrow: next,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// arrow top part
const arrowTop = document.querySelector(".arrow__top");

arrowTop.addEventListener("click", () => {
  window.scroll({
    top: 0,
    scrollBehavior: "smooth",
  });
});

// loader part
const loader = document.querySelector(".loader");

window.addEventListener("DOMContentLoaded", () => {
  let setTime = setTimeout(() => {
    loader.style.display = "none";
    $(".animated_title").textillate({ in: { effect: "rollIn" } });
    $(".animated_tag").textillate({ in: { effect: "rollIn" } });
    AOS.init();
  }, 3000);

  return setTime;
});
