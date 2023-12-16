import React from 'react';

type Props = {
  label: string;
  type: string;
};

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const id = props.label.split('').join('-').toLocaleLowerCase();

  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm text-slate-600 dark:text-white"
      >
        {props.label}
      </label>
      <input
        ref={ref}
        id={id}
        className="bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:border-transparent rounded-md focus:ring-blue-500 block w-full p-2.5 placeholder:text-slate-300"
      />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
