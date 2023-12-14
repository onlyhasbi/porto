import React from 'react';
import TabPanelItem from './TabPanelItem';
import TabContentItem from './TabContentItem';

type TabProps = {
  items: {
    key: string;
    label: string;
    content: React.ReactNode;
  }[];
};
function Tab({ items }: TabProps) {
  if (items.length == 0) return null;
  return (
    <>
      <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-100 whitespace-nowrap dark:border-slate-700">
        {items?.map(({ key, label }) => (
          <TabPanelItem key={key} label={label} />
        ))}
      </div>

      <div className="mt-3">
        {items.map(({ key, content }) => (
          <TabContentItem key={key} content={content} />
        ))}
      </div>
    </>
  );
}

export default Tab;
