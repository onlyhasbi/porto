'use client';

import Button from '@/app/_components/ui/Button';
import Input from '@/app/_components/ui/Input';
import TextArea from '@/app/_components/ui/TextArea';
import { usePortfolioStore } from '@/store/portfolio';
import { Experience } from '@/store/type';
import { useParams } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

function PortfolioForm({ initialValues }: { initialValues: Experience }) {
  const { editExperience } = usePortfolioStore();
  const { id } = initialValues;
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Experience>({
    defaultValues: {
      job_title: initialValues.job_title || '',
      company: initialValues.company || '',
      start_date: initialValues.start_date || '',
      end_date: initialValues.end_date || '',
      city: initialValues.city || '',
      description: initialValues.description || '',
    },
  });

  const onSubmit = handleSubmit((values) => {
    const id_portfolio = params.id as string;
    const id_experience = id;
    editExperience({ id_portfolio, id_experience, payload: values });
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
          placeholder="MM / YYYY"
          {...register('start_date', { required: '*required' })}
          error={errors.start_date?.message}
        />
        <Input
          type="text"
          label="End Date"
          placeholder="MM / YYYY"
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
        Set Portfolio
      </Button>
    </form>
  );
}

export default PortfolioForm;
