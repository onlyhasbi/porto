'use client'

import Input from '@/app/_components/ui/Input';
import TextArea from '@/app/_components/ui/TextArea';
import React from 'react';


function PortfolioForm() {
  return (
    <form className="grid grid-cols-2 gap-3 p-1">
      <Input type="text" label="Job Title" />
      <Input type="text" label="Company" />
      <div className="flex gap-3">
        <Input type="text" label="Start Date" />
        <Input type="text" label="End Date" />
      </div>
      <Input type="text" label="City" />
      <div className="grid col-span-2">
        <TextArea label="Description" />
      </div>
    </form>
  );
}

export default PortfolioForm;
