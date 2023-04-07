import { useHasMounted } from '@/lib/Helpers';
import { useTheme } from 'next-themes';

const themes = [
  { title: 'Light Mode', name: 'light', color: { hex: '#f4f4f0' } },
  { title: 'Dark Mode', name: 'dark', color: { hex: '#000000' } },
];

const DarkModeSwitch = () => {
  const hasMounted = useHasMounted();
  const { theme, setTheme } = useTheme();

  // Make sure it's client-only
  if (!hasMounted || !theme) return null;

  // store our current and next theme objects (will be first theme, if undefined)
  const currentIndex = Math.max(
    0,
    themes.findIndex(t => t.name === theme)
  );

  const nextTheme = themes[(currentIndex + 1) % themes.length];
  const currentTheme = themes[currentIndex];

  return (
    <>
      <button
        className="mr-4 cursor-pointer"
        onClick={() => setTheme(nextTheme.name)}
        aria-label={`Change theme to ${nextTheme.title}`}
      >
        <div className="text-base font-bold">{currentTheme.title}</div>
      </button>
    </>
  );
};

export default DarkModeSwitch;
