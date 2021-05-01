import Image from 'next/image';
import React, { FC } from 'react';
import styles from '../styles/components/Avatar.module.css';

export const Avatar: FC = () => {
    return <Image className={styles.avatar} src="/images/storm.png"  width={64} height={64} alt="Profile picture of Mathias Storm" />
};