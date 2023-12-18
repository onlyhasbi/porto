'use client';

import HydrationZustand from '@/app/_components/Hydration';
import { usePortfolioStore } from '@/store/portfolio';
import { Trash } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../../_components/ui/Card';
function PortfolioCard() {
  const [isAdd, setIsAdd] = useState(false);
  const { portfolio, addPortfolio, deletePortfolio } = usePortfolioStore();
  const router = useRouter();

  const handleAddPortfolio = () => {
    const id = uuidv4();
    setIsAdd(true);
    addPortfolio(id);
    router.push(`/portfolio/${id}/edit`);
  };

  if (isAdd) return <>Loading...</>;

  return (
    <HydrationZustand><div className="flex gap-8 min-h-screen">
    {portfolio?.map((item) => (
      <div
        key={item.id}
        className="flex flex-col items-start gap-3 max-w-[28rem]"
      >
        <Link href={`/portfolio/${item.id}/edit`} className="cursor-pointer">
          <Card className="group/add w-[13rem] max-w-[15rem] h-[18rem] flex justify-center items-center text-center">
            <h3 className="text-lg text-slate-500">Preview Portfolio</h3>
            <p className="text-sm text-slate-400">shown as image</p>
          </Card>
        </Link>
        <div className="flex justify-between items-center w-full">
          <Link
            href={`/portfolio/${item.id}/edit`}
            className="text-lg font-medium"
          >
            {item.portfolio_name}
          </Link>
          <Trash
            onClick={() => deletePortfolio(item.id)}
            size={18}
            className="hover:text-red-600 mx-2 cursor-pointer"
          />
        </div>
      </div>
    ))}
    <button
      onClick={handleAddPortfolio}
      className="flex flex-col justify-start items-center text-center gap-3  max-w-[28rem]"
    >
      <Card className="group/add w-[13rem] max-w-[15rem] h-[18rem] flex justify-center items-center">
        <Circle />
      </Card>
      <h2 className="text-lg font-medium mb-1">
        <span className="font-semibold">New</span> Portfolio
      </h2>
    </button>
  </div></HydrationZustand>
  );
}

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
