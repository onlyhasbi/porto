import React from 'react';

type Props = {
  label: string;
};

const TextArea = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const id = props.label.split('').join('-').toLocaleLowerCase();
  return (
    <div className="relative mb-3" data-te-input-wrapper-init>
      <label
        htmlFor={id}
        className="block mb-2 text-sm text-slate-600 dark:text-white"
      >
        {props.label}
      </label>
      <textarea
        className="block p-2.5 w-full text-sm text-slate-800 bg-slate-50 focus:border-transparent rounded-md border border-slate-200 focus:ring-blue-500 focus:border-blue-600 placeholder:text-slate-300"
        id={id}
        rows={3}
      ></textarea>
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
