import {useEffect} from 'react';

// Apply js-ready at module load, before React's first paint, so the gated
// hidden state (.js-ready [data-reveal]) is in place when the reveal elements
// paint. In prod the prerenderer bakes this onto <html>; dev has no prerender,
// so without this the elements paint visible and their entrance transition is
// skipped. JS-gated, so no-JS users still get the visible fallback.
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('js-ready');
}

export const useScrollReveal = () => {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        }
      },
      {rootMargin: '0px 0px -40px 0px', threshold: 0}
    );

    const viewportHeight = window.innerHeight;

    document
      .querySelectorAll('[data-reveal], [data-stagger]')
      .forEach((element) => {
        // Anything inside the fold on load animates in immediately, including
        // the bottom strip the observer's rootMargin trims off. Only elements
        // genuinely below the fold wait for a scroll.
        if (element.getBoundingClientRect().top < viewportHeight) {
          element.classList.add('is-in');
        } else {
          io.observe(element);
        }
      });

    return () => io.disconnect();
  }, []);
};
