import React from 'react';

type Props = {
  label: string;
  onChange: (e: React.ChangeEvent) => void;
  onBlur: (e: React.ChangeEvent) => void;
  name: string;
  error?: string;
};

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const id = props.label.split('').join('-').toLocaleLowerCase();
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="block mb-2 text-sm text-slate-600 dark:text-white"
      >
        {props.label}
      </label>
      <textarea
        ref={ref}
        onChange={props.onChange}
        onBlur={props.onBlur}
        name={props.name}
        className="block p-2.5 w-full text-sm text-slate-800 bg-slate-50 focus:border-transparent rounded-md border border-slate-200 focus:ring-blue-500 focus:border-blue-600 placeholder:text-slate-300"
        id={id}
        rows={3}
      ></textarea>
      {props.error && <p className="block ml-auto text-sm text-red-600">{props.error}</p>}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
