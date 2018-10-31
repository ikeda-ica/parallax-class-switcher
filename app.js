'use strict';

class scrollFunc {
  addClass() {
    for (var j = 0; j < document.querySelectorAll('.parallax').length; j++) {
      let el = document.querySelectorAll('.parallax')[j];
      let offsetTop = 0;
      while (el) {
        offsetTop += el.offsetTop;
        el = el.offsetParent;
      }
      const top = offsetTop - window.pageYOffset;

      if ((top - window.innerHeight / 2) < 0) {
        document.querySelectorAll('.parallax')[j].classList.add('moved');
      } else {
        document.querySelectorAll('.parallax')[j].classList.remove('moved');
      }
    }
  }
}

const scrollfunc = new scrollFunc();
window.addEventListener('scroll', scrollfunc.addClass)
