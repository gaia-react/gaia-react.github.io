import {useEffect} from 'react';

export const useScrollToHash = (): void => {
  useEffect(() => {
    const {hash} = window.location;

    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        // Not scrollIntoView: a [data-reveal] target is still offset by its
        // entrance transform, so measure where it will settle instead.
        const {scrollMarginTop, transform} = getComputedStyle(element);
        const revealOffset =
          transform === 'none' ? 0 : new DOMMatrixReadOnly(transform).m42;

        window.scrollTo({
          behavior: 'instant',
          top:
            element.getBoundingClientRect().top +
            window.scrollY -
            revealOffset -
            Number.parseFloat(scrollMarginTop),
        });
      }
    }
  }, []);
};
