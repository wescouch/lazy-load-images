/*
// Lazy loaded images
*/
const lazyImgs = document.getElementsByClassName('lazy')
const lazyImgsObserverOptions = {
  rootMargin: '200px', //RootMargin declares where it will trigger the observer (optional). 200px means when you scroll to within 200px of the image
};
if (!!lazyImgs.length) {
  let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        let el = entry.target;
        observer.unobserve(el);

        if (!!(el instanceof HTMLImageElement) && !!el.classList.contains('lazy')) {
          el.dataset.src ? el.src = el.dataset.src : ''
          el.dataset.srcset ? el.srcset = el.dataset.srcset : ''
          el.dataset.sizes ? el.sizes = el.dataset.sizes : ''
        }
      }
    });
  }, lazyImgsObserverOptions);

  for (let img of lazyImgs) {
    observer.observe(img);
  }
}


/*
// Lazy loaded background images
*/
const lazyBgEls = document.getElementsByClassName('lazy-bg')
const lazyBgElsObserverOptions = {
  rootMargin: '200px', //RootMargin declares where it will trigger the observer (optional). 200px means when you scroll to within 200px of the image
};
if (!!lazyBgEls.length) {
  let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        let el = entry.target;
        observer.unobserve(el);

        el.dataset.bg ? el.style.backgroundImage = `url("${el.dataset.bg}")` : ''
      }
    });
  }, lazyBgElsObserverOptions);

  for (let el of lazyBgEls) {
    observer.observe(el);
  }
}