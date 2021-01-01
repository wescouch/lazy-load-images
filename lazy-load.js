/*
// Lazy loaded images
*/

let lazyImgs = document.getElementsByClassName('lazy'),
    lazyImgsObserverOptions = {
      rootMargin: '200px', //RootMargin declares where it will trigger the observer (optional). 200px means when you scroll to within 200px of the image
    };
if (!!lazyImgs.length) {
  let isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  if (!!isIE11) { // IE11
    for (var i = 0; i < lazyImgs.length; i++) {
      if (!!(lazyImgs[i] instanceof HTMLImageElement) && !!lazyImgs[i].classList.contains('lazy')) {
        lazyImgs[i].dataset.src ? lazyImgs[i].src = lazyImgs[i].dataset.src : ''
      }
    }
  } else { // Modern Browsers
    let observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let el = entry.target;

          if (!!(el instanceof HTMLImageElement) && !!el.classList.contains('lazy')) {
            el.dataset.src ? el.src = el.dataset.src : ''
            el.dataset.srcset ? el.srcset = el.dataset.srcset : ''
            el.dataset.sizes ? el.sizes = el.dataset.sizes : ''
          }
          observer.unobserve(el);
        }
      });
    }, lazyImgsObserverOptions);

    for (let img of lazyImgs) {
      observer.observe(img);
    }
  }
}



/*
// Lazy loaded background images
*/

let lazyBgEls = document.getElementsByClassName('lazy-bg'),
    lazyBgElsObserverOptions = {
      rootMargin: '200px', //RootMargin declares where it will trigger the observer (optional). 200px means when you scroll to within 200px of the image
    };
if (!!lazyBgEls.length) {
  let isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  if (!!isIE11) { // IE11
    for (var i = 0; i < lazyBgEls.length; i++) {
      lazyBgEls[i].dataset.bg ? lazyBgEls[i].style.backgroundImage = `url("${lazyBgEls[i].dataset.bg}")` : ''
    }
  } else { // Modern Browsers
    let observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let el = entry.target;

          el.dataset.bg ? el.style.backgroundImage = `url("${el.dataset.bg}")` : ''
          
          observer.unobserve(el);
        }
      });
    }, lazyBgElsObserverOptions);

    for (let el of lazyBgEls) {
      observer.observe(el);
    }
  }
}