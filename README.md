# Lazy Load Images
- Lazy load images with JS utilizing the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
  - `rootMargin` set to `200px` in the script, but can be edited/removed. Also `threshold` can be utilized instead to fire observer when some/all of the image has scrolled into view
- IE11 fallback included


## Img tag Example
`<img data-src="img_src" data-srcset="img_srcset" data-sizes="img_sizes" alt="img_alt" class="lazy">`