'use client';

import Button from '@/app/_components/ui/Button';
import Collapse from '@/app/_components/ui/Collapse';
import { usePortfolioStore } from '@/store/portfolio';
import { ChevronLeft, Plus, Trash } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PortfolioForm from './PortfolioForm';
import ProfileForm from './ProfileForm';
import { useDebounce } from '@uidotdev/usehooks';

function CardInput({ id }: { id: string }) {
  const { register, setValue, watch } = useForm({
    defaultValues: {
      portfolio_name: 'Untitled',
    },
  });

  const { portfolio, changePortfolioName } = usePortfolioStore();
  const debounceName = useDebounce(watch('portfolio_name'), 300);

  useEffect(() => {
    const loadPortfolio = portfolio.filter((item) => item.id == id);
    if (loadPortfolio.length) {
      setValue('portfolio_name', loadPortfolio[0].portfolio_name!);
    }
  }, []);

  useEffect(() => {
    if (debounceName)
      changePortfolioName({ id_portfolio: id, portfolio_name: debounceName });
  }, [debounceName]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Link href="/">
          <ChevronLeft className="hover:text-blue-600 cursor-pointer" />
        </Link>
        <input
          className="border-none focus:outline-none focus:ring-0 text-xl font-semibold placeholder:text-slate-300"
          type="text"
          placeholder="Portfolio name"
          {...register('portfolio_name', {
            onBlur: (e) => {
              if (!e.target.value) setValue('portfolio_name', 'Untitled');
            },
          })}
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
        <ProfileForm />
      </div>
      <div className="mb-2">
        <h2 className="text-xl font-semibold">Employment History</h2>
        <p className="text-xs font-light mt-1">
          Show your relevant experience (last 10 years). Use bullet points to
          note your achievements
        </p>
      </div>
      <div>
        <div className="group relative">
          <Collapse title="Frontend at Octopus">
            <PortfolioForm />
          </Collapse>
          <button
            onClick={() => {
              console.log('delete portfolio click');
            }}
            className="hidden group-hover:flex absolute hover:justify-center hover:items-center -right-[3rem] top-1 p-4"
          >
            <Trash size={18} className="hover:text-red-600" />
          </button>
        </div>

        <Button
          onClick={() => {
            console.log('add portfolio click');
          }}
          variant="solid"
          className="flex gap-2"
        >
          <Plus size={18} /> Add one more portfolio
        </Button>
      </div>
    </div>
  );
}

export default CardInput;
