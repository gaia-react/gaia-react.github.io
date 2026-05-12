import {useEffect} from 'react';

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
