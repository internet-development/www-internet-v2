'use client';
import styles from '@components/PageGutter.module.scss';

import { classNames } from '@root/common/utilities';

export default function PageGutter({ children, leftOnly = false, isArticle = false, ...props }) {
  return (
    <div className={classNames(styles.container, props.className)} style={props.style}>
      {children}
    </div>
  );
}
