import { swipeAnim } from '@/lib/Animate';
import { motion } from 'framer-motion';

import TabBlock from '../atmos/TabBlock';
export default function MainTab({
  activeBoolean,
  setActiveTab,
}: {
  activeBoolean: boolean;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex flex-col font-poppins  text-lg">
      <div className="flex flex-row font-semibold justify-start my-10">
        <div className="relative">
          <TabBlock
            label="퀴즈"
            active={activeBoolean}
            onClick={() => handleTabClick(1)}
          />
          {activeBoolean && (
            <motion.div
              className="mainTab"
              layoutId={activeBoolean ? 'mainTab' : undefined}
            />
          )}
        </div>

        <div className="relative">
          <TabBlock
            label="화상면접"
            active={!activeBoolean}
            onClick={() => handleTabClick(2)}
          />
          {!activeBoolean && (
            <motion.div
              className="mainTab"
              layoutId={!activeBoolean ? 'mainTab' : undefined}
            />
          )}
        </div>
      </div>
      <div className="p-4 max-w-[400px] ">
        {activeBoolean && (
          <motion.div
            initial="hide"
            animate={activeBoolean ? 'show' : 'hide'}
            variants={swipeAnim}
          >
            <p className="overflow-wrap break-word">
              시간 체크 기능과 난이도 변화로 본인의 레벨을 확인하세요!
            </p>
          </motion.div>
        )}
        {!activeBoolean && (
          <motion.div
            initial="hide"
            animate={!activeBoolean ? 'show' : 'hide'}
            variants={swipeAnim}
          >
            <p className="overflow-wrap break-word">
              말하기 봇과 함께 면접을 진행하고 영상을 파일로 저장하세요!{' '}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
