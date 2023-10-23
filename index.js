import './style.css';

window.onscroll = function (num) {
  var vm = this;
  var btns = document.getElementById('float-btns');
  vm.pxScrolledFromTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  vm.fullPgHeight = document.getElementById('page-wrapper').clientHeight;
  vm.viewportHeight = window.innerHeight;
  vm.footerHeight = document.getElementById('footer').clientHeight;

  vm.userLocInPage = vm.fullPgHeight - vm.pxScrolledFromTop;
  // USER LOCATION IN PAGE
  
  vm.userLocInView = vm.userLocInPage - vm.viewportHeight;
  // USER LOCATION IN VIEWPORT

  if (vm.userLocInView > vm.footerHeight) {
    btns.classList.add('sticky-btns');
    btns.classList.remove('static-btns');
  } else if (vm.userLocInView < vm.footerHeight) {
    btns.classList.remove('sticky-btns');
    btns.classList.add('static-btns');
  }
};

// CALLS SCROLL FUNCTION AFTER HALF SECOND TRANSITION
window.onscroll();
