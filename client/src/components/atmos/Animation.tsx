import { swipeAnim } from '@/lib/Animate';
import { m } from 'framer-motion';
import { useMemo } from 'react';
import Lottie from 'react-lottie-player';
import quiz from '../../../public/Lottie/quiz.json';
import videoInterview from '../../../public/Lottie/videoInterview.json';
export default function Animation({
  activeBoolean,
}: {
  activeBoolean: boolean;
}) {
  const animationData = useMemo(() => {
    return activeBoolean ? quiz : videoInterview;
  }, [activeBoolean]);

  return (
    <div className="sm:w-[400px] h-[400px]">
      {activeBoolean && (
        <div>
          <m.div
            initial="hide"
            animate={activeBoolean ? 'show' : 'hide'}
            variants={swipeAnim}
          >
            <Lottie loop animationData={quiz} play />
          </m.div>
        </div>
      )}
      {!activeBoolean && (
        <div className="pt-20">
          <m.div
            initial="hide"
            animate={!activeBoolean ? 'show' : 'hide'}
            variants={swipeAnim}
          >
            <Lottie loop animationData={videoInterview} play />
          </m.div>
        </div>
      )}
    </div>
  );
}
