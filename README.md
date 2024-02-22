# Lazy Load Images

Lazy load images with JS utilizing the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- `rootMargin` set to `200px` in the script, but can be edited/removed. Also `threshold` can be utilized instead to fire observer when some/all of the image has scrolled into view

### How to create

- Add `data-src` attribute with the image URL that will be changed out with the `src` attribute
  - *Note: You can add `data-srcset` and `data-sizes` attributes as well, but `data-src` is required*

### Example

    <img data-src="img_src" data-srcset="img_srcset" data-sizes="img_sizes" alt="Image">



&nbsp;



# Lazy Loaded Background Images

Lazy load background images with JS utilizing the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- `rootMargin` set to `200px` in the script, but can be edited/removed. Also `threshold` can be utilized instead to fire observer when some/all of the image has scrolled into view

### How to create

- Add `data-bkg` attribute with the image URL that will be changed out with the "background-image" style

### Background Image Example

    <div data-bkg="img_src"></div>