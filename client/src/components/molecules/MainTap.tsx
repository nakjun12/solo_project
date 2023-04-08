function Tab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`px-4 py-2 cursor-pointer ${active ? 'border-b-2' : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

export default function MainTab({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex flex-col font-poppins  text-lg">
      <div className="flex flex-row font-semibold my-12">
        <Tab
          label="퀴즈"
          active={activeTab === 1}
          onClick={() => handleTabClick(1)}
        />
        <Tab
          label="화상면접"
          active={activeTab === 2}
          onClick={() => handleTabClick(2)}
        />
      </div>
      <div className="p-4">
        {activeTab === 1 && (
          <p className="whitespace-nowrap">
            시간 체크 기능과 난이도 변화로 본인의 레벨을 확인하세요!
          </p>
        )}
        {activeTab === 2 && (
          <p className="whitespace-nowrap">
            말하기 봇과 함께 면접을 진행하고 영상을 파일로 저장하세요!{' '}
          </p>
        )}
      </div>
    </div>
  );
}
