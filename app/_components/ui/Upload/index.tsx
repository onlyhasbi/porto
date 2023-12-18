import clsx from 'clsx';
import { UploadCloud } from 'lucide-react';
import React from 'react';

type Props = {
  title?: string;
  sizeInfo?: string;
  onChange: (e: React.ChangeEvent) => void;
  onBlur: (e: React.ChangeEvent) => void;
  name: string;
  path: string;
  error?: string;
};

const Upload = React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <div className="flex flex-col gap-2 items-end justify-center w-full">
    <label
      htmlFor={`${props.name}-file`}
      className={clsx({
        'group relative flex flex-col items-center justify-center w-full h-44 border rounded-md cursor-pointer bg-slate-50':
          true,
        'border-slate-200': !props.error,
        'border-red-600': props.error,
      })}
    >
      <span className="absolute top-3 left-3 px-3 py-[.3rem] block text-white bg-blue-500 text-sm rounded-md">
        {`${props.title}${props.path ? ' - ' + props.path : ''}`}
      </span>
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <UploadCloud className="group-hover:text-blue-600" size={30} />
        <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
          <span className="font-semibold">Click to upload</span> or drag and
          drop
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {`SVG, PNG, JPG or GIF (MAX. ${props.sizeInfo}px)`}
        </p>
      </div>
      <input
        ref={ref}
        id={`${props.name}-file`}
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        onChange={props.onChange}
        onBlur={props.onBlur}
        name={props.name}
        className="hidden"
      />
    </label>
    {props.error && <p className="text-sm text-red-600">{props.error}</p>}
  </div>
));

Upload.displayName = 'Upload';

export default Upload;
