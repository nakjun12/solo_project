import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./mainCarousel.module.css";
import { variants } from "@/lib/Animate";

const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const mainCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = Math.abs((page + 1) % images.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <div className={styles.big_container}>
      <div className={styles.container}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            className="img_motion"
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.5 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              //드래그 기능
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        <div className={styles.next} onClick={() => paginate(-1)}>
          {"‣"}
        </div>
        <div className={styles.prev} onClick={() => paginate(1)}>
          {"‣"}
        </div>
      </div>
    </div>
  );
};
export default mainCarousel;
