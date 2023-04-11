import type { dropDownList, dropDownValue, headerType } from '@/Type/typeList';
import { useToggleMenu } from '@/lib/context/MenuContext';
import { m } from 'framer-motion';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { GrClose } from 'react-icons/gr';
export default function MobileDropDown({ dropDown, isOpen }: headerType) {
  const toggleMenu = useToggleMenu();
  const router = useRouter();
  const menuHandler = (address: string) => {
    router.push(`${address}`);
    toggleMenu(false);
  };

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
              toggleMenu(false);
            }}
          >
            <GrClose size={'40px'} />
          </button>
          <div className="flex flex-col font-bold gap-6 mt-10 text-2xl">
            {dropDown?.map((item: dropDownList | null, index: number) => {
              return (
                <Fragment key={`${item?.title}${index}`}>
                  {item?.dropDownList?.map(
                    (item: dropDownValue | null, index) => {
                      if (!item) {
                        return <></>;
                      }

                      return (
                        <button
                          onClick={() => {
                            menuHandler(item.address);
                          }}
                          key={`${item.address}${index}`}
                          className="text-left ml-4"
                        >
                          {item.name}
                        </button>
                      );
                    },
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </m.div>
    </>
  );
}
