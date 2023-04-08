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
    <div className="flex flex-col">
      <div className="flex">
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
        {activeTab === 1 && <p>퀴즈</p>}
        {activeTab === 2 && <p>화상면접</p>}
      </div>
    </div>
  );
}
