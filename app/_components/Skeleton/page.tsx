import clsx from 'clsx';

export const Skeleton = ({
  type,
  className = 'w-4 h-4',
}: {
  type: 'line' | 'rounded';
  className?: string;
}) => {
  if (type === 'line')
    return (
      <span
        className={clsx([
          className,
          'bg-gray-200 rounded-full dark:bg-gray-700',
        ])}
      ></span>
    );

  if (type === 'rounded')
    return (
      <span
        className={clsx([
          className,
          'block bg-gray-200 rounded-full dark:bg-gray-700',
        ])}
      ></span>
    );

  return null;
};
