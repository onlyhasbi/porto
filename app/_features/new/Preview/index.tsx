'use client';

import HydrationZustand from '@/app/_components/Hydration';
import Card from '@/app/_components/ui/Card';
import { usePortfolioStore } from '@/store/portfolio';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

function Preview() {
  const params = useParams();
  const { portfolio } = usePortfolioStore();
  const currentPortfolio = portfolio.find(
    (item) => item.id == (params.id as string)
  );

  return (
    <HydrationZustand>
      <div className="flex justify-center items-start min-h-full pt-[7rem]">
        <div className="rounded-md w-8/12 min-h-[40rem] bg-white shadow-lg overflow-hidden">
          {currentPortfolio && (
            <>
              <div className="w-full h-[12rem] overflow-hidden">
                {currentPortfolio.personal_details?.cover && (
                  <Image
                    src={currentPortfolio.personal_details.cover}
                    alt={`image-cover-${currentPortfolio.personal_details?.name}`}
                    width={800}
                    height={500}
                    objectFit="cover"
                    className="object-cover object-center"
                  />
                )}
              </div>

              <div className="relative -mt-12 w-32 h-32 rounded-full overflow-hidden border-solid border-4 border-white mx-auto">
                {currentPortfolio.personal_details?.avatar && (
                  <Image
                    src={currentPortfolio.personal_details.avatar}
                    alt={`image-avatar-${currentPortfolio.personal_details?.name}`}
                    width={150}
                    height={150}
                  />
                )}
              </div>

              <div className="text-center px-6">
                <h2 className="font-semibold text-2xl">
                  {currentPortfolio.personal_details?.name}
                </h2>
                <h3 className="text-slate-500 text-sm tracking-wider">
                  {currentPortfolio.personal_details?.position}
                </h3>
                <p className="mt-3">
                  {currentPortfolio.personal_details?.description}
                </p>
              </div>

              <div className="px-6 pb-12">
                {currentPortfolio.experience.length > 0 && (
                  <h3 className="text-xl font-bold mb-2 mt-5">
                    Working Experiences
                  </h3>
                )}
                <ul className="space-y-3 list-disc pl-3">
                  {currentPortfolio.experience?.map((ex) => (
                    <li key={ex.id}>
                      <h2 className="text-lg font-semibold">
                        {textSeparator(ex.job_title, ex.company, 'at')}
                      </h2>
                      <p className="text-sm font-light">
                        {textSeparator(ex.start_date, ex.end_date, '-')}
                        {textSeparator(' ', ex.city, 'in')}
                      </p>
                      <p className="text-sm mt-1 font-light">
                        {ex.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </HydrationZustand>
  );
}

function textSeparator(
  firstText: string,
  secondText: string,
  separator: string
) {
  if (firstText && secondText) {
    return `${firstText} ${separator} ${secondText}`;
  }

  if (firstText) return firstText;
  if (secondText) return secondText;
  return '';
}

export default Preview;
