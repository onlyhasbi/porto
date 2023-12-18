'use client';

import Card from '@/app/_components/ui/Card';
import { usePortfolioStore } from '@/store/portfolio';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

type Props = {};

function Preview({}: Props) {
  const params = useParams();
  const { portfolio } = usePortfolioStore();
  const currentPortfolio = portfolio.find(
    (item) => item.id == (params.id as string)
  );

  return (
    <div className="flex justify-center items-start min-h-full pt-[7rem]">
      <div className="rounded-md w-8/12 h-[40rem] min-h-[28rem] bg-white shadow-lg">
        {currentPortfolio && (
          <>
            <div className="w-full h-[10rem]">
              {currentPortfolio.personal_details?.cover && (
                <Image
                  src={currentPortfolio.personal_details.cover}
                  alt={`image-cover-${currentPortfolio.personal_details?.name}`}
                  width={800}
                  height={500}
                  layout="responsive"
                  objectFit="cover"
                />
              )}
            </div>

            <div className='w-11 h-11 rounded-full overflow-hidden border border-white'>
              {currentPortfolio.personal_details?.avatar && (
                <Image
                  src={currentPortfolio.personal_details.avatar}
                  alt={`image-avatar-${currentPortfolio.personal_details?.name}`}
                  width={150}
                  height={150}
                />
              )}
            </div>

            <h2>{currentPortfolio.personal_details?.name}</h2>
            <h3>{currentPortfolio.personal_details?.position}</h3>
            <p>{currentPortfolio.personal_details?.description}</p>

            {currentPortfolio.experience.length > 0 && (
              <h3 className="text-xl font-bold mb-2 mt-5">
                Employee Experience
              </h3>
            )}

            <div className="space-y-3">
              {currentPortfolio.experience?.map((ex) => (
                <div key={ex.id}>
                  <h2 className="text-lg font-medium">
                    {textSeparator(ex.job_title, ex.company, 'at')}
                  </h2>
                  <p className="text-sm font-light">
                    {textSeparator(ex.start_date, ex.end_date, '-')}
                    {textSeparator(' ', ex.city, 'in')}
                  </p>
                  <p className="text-sm mt-1 font-light">{ex.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
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
