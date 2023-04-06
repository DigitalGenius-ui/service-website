const sliderContainer = document.querySelector(".client_slider");
const nextArrow = document.querySelector(".next");
const prevArrow = document.querySelector(".prev");

$(sliderContainer).slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: prevArrow,
  nextArrow: nextArrow,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
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
      },
    },
  ],
});


let darkMode = localStorage.getItem("darkMode");

const enable = () => {
  document.querySelector("body").classList.add("dark__bg");
  localStorage.setItem("darkMode", "enabled");
};

const disabled = () => {
  document.querySelector("body").classList.remove("dark__bg");
  localStorage.setItem("darkMode", null);
};

// dark and light
const toggleBtn = document.querySelector(".toggle");
if (darkMode == "enabled") {
  enable();
  toggleBtn.classList.add("active");
}

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enable();
  } else {
    disabled();
  }
});

// arrow up
const arrowUp = document.querySelector(".arrow_up");

arrowUp.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// loading part
const loader = document.querySelector(".loader");

window.addEventListener("DOMContentLoaded", () => {
  let setTime = setTimeout(() => {
    loader.style.display = "none";
    // scroll  animation function
    AOS.init();
  }, 3000);

  return setTime;
});
