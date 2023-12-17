import clsx from 'clsx';
import React, { forwardRef } from 'react';

type Props = {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

type Variant = 'solid' | 'ghost';

type ButtonVariant = {
  solid: React.ReactNode;
  ghost?: React.ReactNode;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant, className, type, onClick }, ref) => {
    const buttonVariant: ButtonVariant = {
      solid: (
        <button
          ref={ref}
          type={type}
          onClick={onClick}
          className={clsx([
            className,
            'inline-block rounded-md px-2 pb-2 pt-2.5 text-sm font-medium leading-normal bg-primary text-white hover:bg-blue-500 focus:outline-none focus:ring-0',
          ])}
        >
          {children}
        </button>
      ),
      ghost: (
        <button
          ref={ref}
          type={type}
          onClick={onClick}
          className={clsx([
            className,
            'inline-block rounded px-2 pb-2 pt-2.5 text-sm font-medium leading-normal text-primary focus:outline-none focus:ring-0 active:text-primary-700',
          ])}
        >
          {children}
        </button>
      ),
    };

    return buttonVariant[variant];
  }
);

Button.displayName = 'Button';

export default Button;
