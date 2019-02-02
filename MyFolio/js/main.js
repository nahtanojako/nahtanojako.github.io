(function(){
  "use strict"

  let header = document.querySelector('.main-header'),
      navToggler = document.querySelector('.nav-toggler'),
      btnClose = document.querySelector('#btn-close'),
      navCollapse = document.querySelector('.nav-collapse'),
      toTop = document.querySelector('#to-top'),
      navLinks = document.querySelectorAll('.nav-collapse li');

  // BurgerMenu Click ---------------------------
  navToggler.addEventListener('click', () => {
    navCollapse.classList.add('show');
  })

  // Close Icon Click ---------------------------
  btnClose.addEventListener('click', () => {
    navCollapse.classList.remove('show');
  })

  // When you scroll page
  window.addEventListener('scroll', () => {

    // add Class to header
    if(window.pageYOffset > 100){
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }

    // show To top button
    if (window.pageYOffset > 600) {
      toTop.classList.add('show');
    } else {
      toTop.classList.remove('show');
    }
  })

  // Navigation Links add / remove active
  navLinks.forEach(link => {
    link.onclick = function() {

      let linkFirst = navLinks[0];
      while(linkFirst){
        if(linkFirst.tagName === 'LI') {
          linkFirst.classList.remove('active');
        }
        linkFirst = linkFirst.nextSibling;
      }

      this.classList.add('active');
      navCollapse.classList.remove('show');
    }
  })


})()