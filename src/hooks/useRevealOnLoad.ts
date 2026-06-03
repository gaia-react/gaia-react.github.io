import {useEffect} from 'react';

// Reveal on load, never on scroll. Unlike useScrollReveal, this adds `is-in` to
// every [data-reveal] element on mount instead of waiting for it to scroll into
// view. Above-the-fold elements are seen animating in; anything already marked
// but below the fold finishes its transition off-screen, before you scroll to
// it. The page never scroll-reveals (per the no-reveal-below-the-fold
// convention), and it stays correct no matter how many entries happen to sit
// above the fold on a given viewport. Use this on list pages where the count of
// above-the-fold items is data-dependent, like the changelog.
export const useRevealOnLoad = () => {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.querySelectorAll('[data-reveal]').forEach((element) => {
      element.classList.add('is-in');
    });
  }, []);
};
