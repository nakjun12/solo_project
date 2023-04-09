export default function TabBlock({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div>
      <label
        className={
          active ? 'px-4 py-2 cursor-pointer' : 'px-4 py-2 cursor-pointer'
        }
        onClick={onClick}
      >
        {label}
      </label>
    </div>
  );
}
