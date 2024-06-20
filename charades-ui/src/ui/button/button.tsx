import clsx from 'clsx';
import { forwardRef } from 'react';

import { ButtonProps, ButtonStyle } from './button.types';

const ButtonClasses: ButtonStyle = {
  primary: 'flex bg-blue-500 hover-button-primary',
  secondary: '',
  tertiary: '',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ForwardedButton(
  { variant = 'primary', className, ...rest },
  ref
) {
  return (
    <button
      {...rest}
      className={clsx('h-fit rounded-2xl p-4', ButtonClasses[variant], className)}
      ref={ref}
    ></button>
  );
});

export default Button;
