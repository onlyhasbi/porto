'use client';

import Button from '@/app/_components/ui/Button';
import Input from '@/app/_components/ui/Input';
import TextArea from '@/app/_components/ui/TextArea';
import Upload from '@/app/_components/ui/Upload';
import { usePortfolioStore } from '@/store/portfolio';
import { PersonalDetails } from '@/store/type';
import { useParams } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';

function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalDetails>({
    defaultValues: {
      cover: '',
      avatar: '',
      name: '',
      position: '',
      description: '',
    },
  });
  const { editPersonalDetails } = usePortfolioStore();
  const params = useParams();

  const onSubmit = handleSubmit(async (values: FieldValues) => {
    const coverFile = values.cover[0];
    const avatarFile = values.avatar[0];

    try {
      const readCover = await readFile(coverFile);
      const readAvatar = await readFile(avatarFile);
      const id = params.id.toString();
      const payload = {
        cover: readCover,
        avatar: readAvatar,
        name: values.name,
        position: values.position,
        description: values.description,
      };
      editPersonalDetails({ id_portfolio: id, personal_details: payload });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 p-1">
      <Upload
        title="Cover"
        sizeInfo="800x400"
        {...register('cover', { required: 'required' })}
        error={errors.cover?.message}
      />
      <Upload
        title="Avatar"
        sizeInfo="500x500"
        {...register('avatar', { required: 'required' })}
        error={errors.avatar?.message}
      />
      <Input
        type="text"
        label="Name"
        {...register('name', { required: 'required' })}
        error={errors.name?.message}
      />
      <Input
        type="text"
        label="Position"
        {...register('position', { required: 'required' })}
        error={errors.position?.message}
      />
      <TextArea
        label="Description"
        {...register('description', { required: 'required' })}
        error={errors.description?.message}
      />
      <Button
        type="submit"
        variant="solid"
        className="flex-none flex-grow-0 w-24 ml-auto"
      >
        Save
      </Button>
    </form>
  );
}

function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
  });
}

export default ProfileForm;
