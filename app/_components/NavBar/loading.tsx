import React from 'react';
import { Skeleton } from '../ui/Skeleton/page';

function NavBarLoading() {
  return (
    <nav className="border-b-1 shadow-sm">
      <div className="m-auto w-10/12 flex justify-between py-4 items-center">
        <Skeleton type="line" className="w-6 h-4" />
        <Skeleton type="rounded" className="h-[2.875rem] w-[2.875rem]" />
      </div>
    </nav>
  );
}

export default NavBarLoading;
