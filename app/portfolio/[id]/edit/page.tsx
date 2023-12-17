import React from 'react';
import CardInput from '../../../_features/new/CardInput';
import Preview from '../../../_features/new/Preview';

function NewPortFolio({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="py-10 w-9/12 mx-auto">
        <CardInput id={id} />
      </div>
      <div className="bg-slate-800">
        <Preview />
      </div>
    </div>
  );
}

export default NewPortFolio;
