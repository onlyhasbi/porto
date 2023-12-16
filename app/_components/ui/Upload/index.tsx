import { UploadCloud } from 'lucide-react';
import React from 'react';

type Props = {
  title?: string;
  sizeInfo?: string;
};

function Upload({ title, sizeInfo }: Props) {
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="group relative flex flex-col items-center justify-center w-full h-44 border border-slate-200 rounded-md cursor-pointer bg-slate-50"
      >
        <span className="absolute top-3 left-3 px-3 py-[.3rem] block text-white bg-blue-500 text-sm rounded-md">
          {title}
        </span>
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <UploadCloud className='group-hover:text-blue-600' size={30}/>
          <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {`SVG, PNG, JPG or GIF (MAX. ${sizeInfo}px)`}
          </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
}

export default Upload;
