const pageTransitionSpeed = 300;

const swipeAnim = {
  show: {
    opacity: 1,
    x: ['-1rem', '0rem'],
    transition: {
      x: {
        duration: 1.5,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
      opacity: {
        duration: 0.2,
        delay: 0.1,
      },
    },
  },
  hide: {
    x: ['0rem', '1rem'],
    opacity: 0,
    transition: {
      x: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
};

const pageTransitionAnim = {
  show: {
    opacity: 1,
    transition: {
      duration: pageTransitionSpeed / 1000,
      delay: 0.2,
      ease: 'linear',
      when: 'beforeChildren',
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: pageTransitionSpeed / 1000,
      ease: 'linear',
      when: 'beforeChildren',
    },
  },
};
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0, //기본 위치
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 100, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    };
  },
};
export { pageTransitionAnim, pageTransitionSpeed, swipeAnim, variants };
