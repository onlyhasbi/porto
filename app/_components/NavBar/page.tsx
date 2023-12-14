import Image from 'next/image';
import React from 'react';

function NavBar() {
  return (
    <nav className="border-b border-gray-100 shadow-sm">
      <div className="m-auto w-10/12 flex justify-between py-4 items-center">
        <h3 className="font-semibold text-lg">Porto.io</h3>
        <Image
          className="inline-block h-[2.875rem] w-[2.875rem] relative object-fit rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="Image Description"
          height={100}
          width={100}
        />
      </div>
    </nav>
  );
}

export default NavBar;
