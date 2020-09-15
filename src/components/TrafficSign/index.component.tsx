import * as React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as LightChevron } from '../../assets/icons/chevron-white-left.svg';
import { ReactComponent as DarkChevron } from '../../assets/icons/chevron-dark-left.svg';

interface Props {
  type?: 'primary' | 'clear' | 'outline';
  label: string;
  direction?: 'left' | 'right';
}

export const TrafficSign = ({
  type = 'primary',
  label,
  direction = 'right'
}: Props) => {
  const anchorClasses = [
    styles.trafficSign,
    styles[type],
    styles[direction]
  ].join(' ');

  const renderChevron = () =>
    !['clear', 'outline'].includes(type) ? (
      <LightChevron className={styles.trafficSign__direction} />
    ) : (
      <DarkChevron className={styles.trafficSign__direction} />
    );

  return (
    <a className={anchorClasses}>
      <span>{label}</span>
      {renderChevron()}
    </a>
  );
};
