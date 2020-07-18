/*
// HOW TO USE
//
// 1) Add class "lazy" to the image
// 2) Add "data-" to the src/srcset/sizes attributes
//
// Example:
// <img data-src="img_src" data-srcset="img_srcset" data-sizes="img_sizes" alt="img_alt" class="lazy">
*/


let lazyImgs = document.getElementsByClassName('lazy'),
    lazyObserverOptions = {
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
    }, lazyObserverOptions);

    for (let img of lazyImgs) {
      observer.observe(img);
    }
  }
}