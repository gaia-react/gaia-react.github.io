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
      {rootMargin: '0px 0px -40px 0px', threshold: 0.12}
    );

    document
      .querySelectorAll('[data-reveal], [data-stagger]')
      .forEach((element) => io.observe(element));

    return () => io.disconnect();
  }, []);
};
