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
      <Card className="w-9/12 bg-white ">
        <p>Live Preview Portfolio</p>
        {currentPortfolio && (
          <>
            {currentPortfolio.personal_details?.cover && (
              <Image
                src={currentPortfolio.personal_details.cover}
                alt={`image-cover-${currentPortfolio.personal_details?.name}`}
                width={150}
                height={150}
              />
            )}

            {currentPortfolio.personal_details?.avatar && (
              <Image
                src={currentPortfolio.personal_details.avatar}
                alt={`image-avatar-${currentPortfolio.personal_details?.name}`}
                width={150}
                height={150}
              />
            )}
            <h2>{currentPortfolio.personal_details?.name}</h2>
            <h3>{currentPortfolio.personal_details?.position}</h3>
            <p>{currentPortfolio.personal_details?.description}</p>
          </>
        )}
      </Card>
    </div>
  );
}

export default Preview;
