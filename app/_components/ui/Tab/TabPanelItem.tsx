import React from 'react'

type Props = {label:string}

function TabPanelItem({label}: Props) {
  return <button
  className="inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-primary bg-transparent border-b-2 border-blue-600 sm:px-4 -px-1 dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none"
>
  <span className="mx-1 text-sm sm:text-base">{label}</span>
</button>
}

export default TabPanelItem