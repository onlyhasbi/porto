'use client';

import Input from '@/app/_components/ui/Input';
import TextArea from '@/app/_components/ui/TextArea';
import { Experience } from '@/store/type';
import React from 'react';
import { useForm } from 'react-hook-form';

function PortfolioForm({ id }: { id?: string }) {
  const { register, handleSubmit } = useForm<Experience>({
    defaultValues: {
      job_title: '',
      company: '',
      start_date: '',
      end_date: '',
      city: '',
      description: '',
    },
  });


  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-2 gap-3 p-1">
      <Input type="text" label="Job Title" {...register('job_title')} />
      <Input type="text" label="Company" {...register('company')} />
      <div className="flex gap-3">
        <Input type="text" label="Start Date" {...register('start_date')} />
        <Input type="text" label="End Date" {...register('end_date')} />
      </div>
      <Input type="text" label="City" {...register('city')} />
      <div className="grid col-span-2">
        <TextArea label="Description" {...register('description')} />
      </div>
    </form>
  );
}

export default PortfolioForm;
