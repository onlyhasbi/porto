'use client';

import Button from '@/app/_components/ui/Button';
import Input from '@/app/_components/ui/Input';
import TextArea from '@/app/_components/ui/TextArea';
import { Experience } from '@/store/type';
import React from 'react';
import { useForm } from 'react-hook-form';

function PortfolioForm({ id }: { id?: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Experience>({
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
      <Input
        type="text"
        label="Job Title"
        {...register('job_title', { required: '*required' })}
        error={errors.job_title?.message}
      />
      <Input
        type="text"
        label="Company"
        {...register('company', { required: '*required' })}
        error={errors.company?.message}
      />
      <div className="flex gap-3">
        <Input
          type="text"
          label="Start Date"
          {...register('start_date', { required: '*required' })}
          error={errors.start_date?.message}
        />
        <Input
          type="text"
          label="End Date"
          {...register('end_date', { required: '*required' })}
          error={errors.end_date?.message}
        />
      </div>
      <Input
        type="text"
        label="City"
        {...register('city', { required: '*required' })}
        error={errors.city?.message}
      />
      <div className="grid col-span-2">
        <TextArea
          label="Description"
          {...register('description', { required: '*required' })}
          error={errors.description?.message}
        />
      </div>
      <Button
        type="submit"
        variant="solid"
        className="grid col-span-2 w-auto px-3 ml-auto"
      >
        Add Portfolio
      </Button>
    </form>
  );
}

export default PortfolioForm;
