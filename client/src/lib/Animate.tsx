const pageTransitionSpeed = 300;

const swipeAnim = {
  show: {
    opacity: 1,
    x: ["-1rem", "0rem"],
    transition: {
      x: {
        duration: 0.8,
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
    x: ["0rem", "1rem"],
    opacity: 0,
    transition: {
      x: {
        duration: 0.4,
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
      ease: "linear",
      when: "beforeChildren",
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: pageTransitionSpeed / 1000,
      ease: "linear",
      when: "beforeChildren",
    },
  },
};
export { swipeAnim, pageTransitionAnim, pageTransitionSpeed };
