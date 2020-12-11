const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");

// const section1 = document.getElementById('section-1');
// const section3 = document.getElementById('section-3');
// const section4 = document.getElementById('section-4');

window.addEventListener("scroll", () => {
  mainFn();
  // console.log('window.pageYOffset: ',window.pageYOffset, 'home-section1.offsetTop: ',section1.offsetTop);
  // console.log('window.pageYOffset: ',window.pageYOffset, 'protfolio-section3.offsetTop: ',section3.offsetTop);
  // console.log('window.pageYOffset: ',window.pageYOffset, 'contact-section4.offsetTop: ',section4.offsetTop);
});

const mainFn = () => {
  // navbar 固定
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }


  // navbar 偵測 section 區塊
  sections.forEach((section, i) => {

    if (window.pageYOffset >= section.offsetTop - 10) {
      console.log('window.pageYOffset: ',window.pageYOffset, '目前 section.offsetTop: ',section.offsetTop);

      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      
      navbarLinks[i].classList.add("change");
    }
  });
};

mainFn();

