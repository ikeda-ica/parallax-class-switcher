'use strict';

class scrollFunc {
  constructor(target){
    this.target = target;
  }

  check() {
    let el = this.target;
    let offsetTop = 0;
    while (el) {
      offsetTop += el.offsetTop;
      el = el.offsetParent;
    }
    const top = offsetTop - window.pageYOffset;

    if ((top - window.innerHeight / 2) < 0) {
      return true;
    }else{
      return false;
    }
  }
}

const scrollfunc = new scrollFunc(dom);
window.addEventListener('scroll', scrollfunc.check)
