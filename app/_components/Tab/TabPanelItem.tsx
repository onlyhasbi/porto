import React from 'react'

type Props = {key:string;label:string}

function TabPanelItem({key,label}: Props) {
  return <button
  key={key}
  className="inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:px-4 -px-1 dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none"
>
  <span className="mx-1 text-sm sm:text-base">{label}</span>
</button>
}

export default TabPanelItem