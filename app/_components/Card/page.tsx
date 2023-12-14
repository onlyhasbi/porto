import React, { PropsWithChildren } from 'react';

function Card({ children }: PropsWithChildren) {
  return <div className="p-4 md:p-5">{children}</div>;
}

export const CardBody = ({ children }: PropsWithChildren) => (
  <p className="mt-2 text-gray-500 dark:text-gray-400">{children}</p>
);

export const CardTitle = (title: string) => (
  <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
);
