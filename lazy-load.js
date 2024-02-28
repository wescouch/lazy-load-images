/*
// Lazy loaded images
*/
const lazyImgs = document.querySelectorAll('img[data-src]:not([data-src=""]')
const lazyImgsObserverOptions = {
  rootMargin: '200px', //RootMargin declares where it will trigger the observer (optional). 200px means when you scroll to within 200px of the image
};
if (!!lazyImgs.length) {
	let observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				let el = entry.target;
				observer.unobserve(el);

				el.dataset.src ? el.src = el.dataset.src : '';
				el.dataset.srcset ? el.srcset = el.dataset.srcset : '';
				el.dataset.sizes ? el.sizes = el.dataset.sizes : '';
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
const lazyBkgEls = document.querySelectorAll('*[data-bkg]:not([data-bkg=""]')
const lazyBkgElsObserverOptions = {
  rootMargin: '200px', //RootMargin declares where it will trigger the observer (optional). 200px means when you scroll to within 200px of the image
};
if (!!lazyBkgEls.length) {
	let observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				let el = entry.target;
				observer.unobserve(el);

				el.dataset.bkg ? el.style.backgroundImage = `url("${el.dataset.bkg}")` : '';
			}
		});
	}, lazyBkgElsObserverOptions);

	for (let el of lazyBkgEls) {
		observer.observe(el);
	}
}