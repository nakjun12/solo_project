import { useMemo } from 'react';
import Lottie from 'react-lottie-player';
import quiz from '../../../public/Lottie/quiz.json';
import videoInterview from '../../../public/Lottie/videoInterview.json';
export default function Animation({ activeTab }: { activeTab: number }) {
  const animationData = useMemo(() => {
    return activeTab === 1 ? quiz : videoInterview;
  }, [activeTab]);

  return (
    <div className="w-[400px] h-[400px]">
      <Lottie loop animationData={animationData} play />
    </div>
  );
}
