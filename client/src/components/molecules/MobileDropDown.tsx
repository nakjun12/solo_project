import type { dropDownList, dropDownValue, headerType } from '@/Type/typeList';
import { useToggleMenu } from '@/lib/context/MenuContext';
import { m } from 'framer-motion';
import { GrClose } from 'react-icons/Gr';

export default function MobileDropDown({ dropDown, isOpen }: headerType) {
  const toggleMenu = useToggleMenu();

  return (
    <>
      <m.div
        initial="hide"
        animate={isOpen ? 'show' : 'hide'}
        variants={{
          show: {
            x: '0%',
          },
          hide: {
            x: '-100%',
          },
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="menu-mobile"
      >
        <div className="ml-12 mt-12">
          <button
            onClick={() => {
              toggleMenu(false, '퀴즈');
            }}
          >
            <GrClose size={'40px'} />
            {dropDown?.map((item: dropDownList | null) => {
              return (
                <>
                  {item?.dropDownList?.map((item: dropDownValue | null) => {
                    return <>{item?.name}</>;
                  })}
                </>
              );
            })}
          </button>
        </div>
      </m.div>
    </>
  );
}
