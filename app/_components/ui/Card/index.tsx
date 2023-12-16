import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

function Card({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div
      className={`${clsx(
        className
      )} flex flex-col bg-transparent border shadow-sm rounded-md dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]`}
    >
      <div className="p-4 md:p-5">{children}</div>
    </div>
  );
}

export const CardBody = ({ children }: PropsWithChildren) => (
  <p className="mt-2 text-gray-500 dark:text-gray-400">{children}</p>
);

export const CardTitle = (title: string) => (
  <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
);

export default Card;
