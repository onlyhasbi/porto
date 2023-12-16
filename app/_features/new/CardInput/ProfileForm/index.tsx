'use client';

import Input from '@/app/_components/ui/Input';
import TextArea from '@/app/_components/ui/TextArea';
import Upload from '@/app/_components/ui/Upload';

type Props = {};

function ProfileForm({}: Props) {
  return (
    <form className="flex flex-col gap-3 p-1">
      <Upload title="Cover" sizeInfo="800x400" />
      <Upload title="Avatar" sizeInfo="500x500" />
      <Input type="text" label="Name" />
      <Input type="text" label="Position" />
      <TextArea label="Description" />
    </form>
  );
}

export default ProfileForm;
