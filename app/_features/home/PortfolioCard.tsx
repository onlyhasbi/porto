'use client';

import React from 'react';
import Card from '../../_components/ui/Card';
import { v4 as uuidv4 } from 'uuid';
import { usePortfolioStore } from '@/store/portfolio';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
function PortfolioCard() {
  const { portfolio, addPortfolio } = usePortfolioStore();
  const router = useRouter();

  const handleAddPortfolio = () => {
    const id = uuidv4();
    addPortfolio(id);
    router.push(`/portfolio/${id}/edit`);
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        {portfolio?.map((item) => (
          <Link
            key={item.id}
            href={`/portfolio/${item.id}/edit`}
            className="cursor-pointer"
          >
            {item.id}
          </Link>
        ))}
      </div>
      <div onClick={handleAddPortfolio} className="flex gap-7 items-start">
        <Card className="group/add max-w-15 w-[13rem] h-[18rem] flex justify-center items-center">
          <Circle />
        </Card>
        <Description />
      </div>
    </>
  );
}

const Description = () => (
  <div className="max-w-xs">
    <h2 className="text-lg">New Portfolio</h2>
    <p className="text-xs max-w-xl">
      Create a tailored portfolio for each job application. Double your chances
      of getting hired!
    </p>
  </div>
);

const Circle = () => (
  <div className="group-hover/add:bg-blue-500 bg-[#eff2f9] rounded-full w-20 h-20 flex items-center justify-center cursor-pointer">
    <div className="text-3xl">
      <Cross />
    </div>
  </div>
);

const Cross = () => (
  <div className="relative w-7 h-7">
    <div className="absolute inset-0 mx-auto my-auto left-0 w-full h-[.1rem] bg-[#bec4d5] group-hover/add:bg-white transform rotate-180"></div>
    <div className="absolute inset-0 mx-auto my-auto -translate-y-50 left-0 w-full h-[.1rem] bg-[#bec4d5] group-hover/add:bg-white transform -rotate-90"></div>
  </div>
);

export default PortfolioCard;
