import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export const ButtonVariants = ['primary', 'secondary', 'tertiary'] as const;

export type ButtonVariant = (typeof ButtonVariants)[number];

export type ButtonStyle = {
  [K in ButtonVariant]: string;
};
