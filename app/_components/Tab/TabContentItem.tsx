'use client';

import React, { useId } from 'react';

type Props = { content: React.ReactNode };

function TabContentItem({ content }: Props) {
  const key = useId();
  return (
    <div
      id={`tabs-with-underline-${key}`}
      role="tabpanel"
      aria-labelledby={`tabs-with-underline-item-${key}`}
      className="px-5"
    >
      {content}
    </div>
  );
}

export default TabContentItem;
