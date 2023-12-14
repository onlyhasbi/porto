import React from 'react';

type Props = { key: string; content: React.ReactNode };

function TabContentItem({ key, content }: Props) {
  return (
    <div
      key={key}
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
