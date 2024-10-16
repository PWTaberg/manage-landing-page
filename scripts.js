const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const menuModal = document.getElementById("menu-modal");

//document.querySelector(".menu-modal").computedStyleMap.display = "";
btn.addEventListener("click", () => {
  btn.classList.toggle("open");

  menuModal.classList.toggle("navbar_menu-modal--is-visible");

  /*
  nav.classList.toggle("flex");
  */
});

/**** SWIPER  */
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  breakpoints: {
    // when window width is <= 499px
    0: {
      slidesPerView: 1
    },
    // when window width is <= 999px
    768: {
      slidesPerView: 2
    },
    // when window width is <= 999px
    1024: {
      slidesPerView: 3
    }
  }
});

// Handle input form

const validateEmail = email => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

/* not needed
document
  .querySelector(".form-content")
  .addEventListener("submit", async function (e) {
    console.log("Submit was clicked");
    e.preventDefault();

    const emailField = document.querySelector("#email");
    const userEmail = emailField.value;

    if (validateEmail(userEmail)) {
      console.log("Email OK");
      emailField.innerHTML = "Thank you!";
    } else {
      console.log("Email Invalid Format");
      emailField.innerHTML = "Sorry, please enter an email address";
    }

    console.log(userEmail);
  });
*/
