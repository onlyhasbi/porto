'use client'

import React from 'react';
import ProfileForm from './ProfileForm';
import Card from '@/app/_components/ui/Card';
import PortfolioForm from './PortfolioForm';
import Button from '@/app/_components/ui/Button';
import Collapse from '@/app/_components/ui/Collapse';
import { ChevronLeft, Plus, Trash } from 'lucide-react';
import Link from 'next/link';

type Props = {};

function CardInput({}: Props) {
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
        />
      </div>
      <Card>
        <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
        <ProfileForm />
      </Card>
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
          <button onClick={()=>{console.log('delete portfolio click')}} className="hidden group-hover:flex absolute hover:justify-center hover:items-center -right-[3rem] top-1 p-4">
            <Trash size={18} className="hover:text-red-600" />
          </button>
        </div>
        <Button onClick={()=>{console.log('add portfolio click')}} variant="solid" className="flex gap-2">
          <Plus size={18} /> Add one more portfolio
        </Button>
      </div>
    </div>
  );
}

export default CardInput;
