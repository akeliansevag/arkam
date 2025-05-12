'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { mainMenu } from '../data/nav';
import { usePathname } from 'next/navigation';

const MainMenu = ({handleMegaMenuOpen}) => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Close mega menu on route change
    setHoveredIndex(null);
    handleMegaMenuOpen(false);
  }, [pathname]);

  return (
    <div className="max-lg:hidden h-full">
      <ul className="flex items-center lg:gap-7 xl:gap-14 h-full">
        {mainMenu.map((item, index) => {
          const isActive = pathname === item.href;
          const isHovered = hoveredIndex === index;

          return (
            <li
              className="group h-full flex flex-col justify-center"
              key={index}
              onMouseEnter={() => {
                setHoveredIndex(index);
                if(item.children && item.children.length > 0){
                    handleMegaMenuOpen(true);
                }
                
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);

                if(item.children && item.children.length > 0){
                  handleMegaMenuOpen(false);
                }
                
              }}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className={`text-sm h-full flex flex-col justify-center ${
                    isActive ? 'text-secondary' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.title}
                </Link>
              ) : (
                <div
                  className={`text-sm h-full flex flex-col justify-center ${
                    isActive ? 'text-secondary' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.title}
                </div>
              )}

              {item.children && item.children.length > 0 && isHovered && (
                <div className="mega-menu">
                  <div className="container flex justify-between">
                    {item.children.map((it, inx) => (
                      <div key={inx}>
                        {it.href ? (
                          <Link className="text-sm font-bold" href={it.href}>
                            {it.title}
                          </Link>
                        ) : (
                          <div className="text-sm font-bold">{it.title}</div>
                        )}
                        {it.items && it.items.length > 0 && (
                          <ul className="mt-3">
                            {it.items.map((sub, s) => (
                              <li key={s}>
                                <Link
                                  className="text-sm text-gray-500 hover:text-white"
                                  href={sub.href}
                                >
                                  {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainMenu;