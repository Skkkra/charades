import clsx from 'clsx';
import { forwardRef } from 'react';

import { ButtonProps, ButtonStyle } from './button.types';

const ButtonClasses: ButtonStyle = {
  primary: 'flex bg-blue-500',
  secondary: '',
  tertiary: '',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ForwardedButton(
  { variant = 'primary', ...rest },
  ref
) {
  return (
    <button
      className={clsx('p-4 rounded-2xl', ButtonClasses[variant])}
      ref={ref}
      {...rest}
    ></button>
  );
});

export default Button;
