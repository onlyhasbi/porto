'use client';

import React, { useId } from 'react';
import HydrationZustand from '../../Hydration';

type Props = { content: React.ReactNode };

function TabContentItem({ content }: Props) {
  const key = useId();
  return (
    <HydrationZustand>
      <div
        id={`tabs-with-underline-${key}`}
        role="tabpanel"
        aria-labelledby={`tabs-with-underline-item-${key}`}
        className="mt-8"
      >
        {content}
      </div>
    </HydrationZustand>
  );
}

export default TabContentItem;
