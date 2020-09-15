import * as React from 'react';
import styles from './styles.module.scss';

interface Props {
  type?: 'primary' | 'secondary' | 'clear' | 'outline';
  label: string;
}

export const Button = ({ type = 'primary', label }: Props) => {
  const buttonClasses = [styles.btn, styles[type]].join(' ');

  return <button className={buttonClasses}>{label}</button>;
};
