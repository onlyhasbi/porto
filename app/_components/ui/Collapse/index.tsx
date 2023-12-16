'use client';

import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Collapse = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div className="border border-slate-300 px-5 py-3 cursor-pointer rounded-md">
        <div
          className="flex justify-between items-center w-full"
          onClick={toggleCollapse}
        >
          <h3 className="text-md py-1 hover:text-blue-600">{title}</h3>
          <ChevronDown
            className={`${
              isOpen ? 'rotate-180' : 'rotate-0'
            } transition-transform delay-50 duration-1500 ease-out`}
          />
        </div>
        <div
          className={`grid transition-all duration-1500 ${
            isOpen ? 'grid-rows-1 opacity-100 max-h-[auto] pt-5' : 'grid-rows-none opacity-0 max-h-0'
          } overflow-hidden`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
