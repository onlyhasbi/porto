import clsx from 'clsx';
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
        className={clsx({
          'bg-slate-50 border text-slate-800 text-sm focus:border-transparent rounded-md focus:ring-blue-500 block w-full p-2.5 placeholder:text-slate-300':
            true,
          'border-slate-200': !props.error,
          'border-red-600': props.error,
        })}
        id={id}
        rows={3}
      ></textarea>
      {props.error && (
        <p className="block ml-auto text-sm text-red-600">{props.error}</p>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
