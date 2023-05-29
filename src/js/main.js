const iconMenuHTML = document.querySelector(".iconMenu");
const menuHTML = document.querySelector(".menu");
iconMenuHTML.addEventListener("click", function () {
    menuHTML.classList.toggle("menu_show");
});

function animationScroll() {
  const contentNavbarHMTL = document.querySelector(".header_info");
  const navbarHMTL = document.querySelector(".navbar");
  let y = window.scrollY;

  if (y > 90) {
      contentNavbarHMTL.classList.add("content_navbar-scroll");
      navbarHMTL.classList.add("navbar_scroll");
  } else {
      contentNavbarHMTL.classList.remove("content_navbar-scroll");
      navbarHMTL.classList.remove("navbar_scroll");
  }
}

window.onscroll = () => animationScroll();

particlesJS(
    {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 1262.6362266116362
            }
          },
          "color": {
            "value": "#ac43e6"
          },
          "shape": {
            "type": "triangle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 6
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
);