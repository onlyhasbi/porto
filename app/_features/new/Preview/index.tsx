import Card from '@/app/_components/ui/Card';
import React from 'react';

type Props = {};

function Preview({}: Props) {
  return (
    <div className="flex justify-center items-start min-h-full pt-[7rem]">
      <Card className="w-9/12 bg-white ">Live Preview Portfolio</Card>
    </div>
  );
}

export default Preview;
