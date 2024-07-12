import React, { MouseEventHandler } from 'react';

export interface IButtonProps {
  label: string | React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  mobile?: boolean;
  background?: string;
  customClass?: string;
}
