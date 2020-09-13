import * as React from 'react'
import styles from './styles.module.scss'
import { ReactComponent as Ill } from '../../assets/illustrations/brandElement.svg'
import { Button } from '..'

interface Props {
  actionLabel: string,
}

export const MainAction = ({actionLabel}: Props) => {
  return (
    <div className={styles.mainAction}>
      <Ill className={styles.mainAction__ill} />
      <div className={styles.mainAction__content}>
        <h3 className={styles.mainAction__subheader}>
          Build your digital business today
        </h3>
        <h2 className={styles.mainAction__header}>
          Get a dedicated product team to design and develop your next product,
          or ideate with you.
        </h2>
      </div>
      <div className={styles.mainAction__actionSection}>
        <div className={styles.mainAction__actionButton}>
          <Button label={actionLabel} type='clear'/>
        </div>
      </div>
    </div>
  )
}
