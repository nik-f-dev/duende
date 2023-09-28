'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './styles.module.css';

type navLink = {
  name: string;
  href: string;
};

interface Props {
  navLinks: Array<navLink>;
}

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={clsx(styles.link, { [styles.active]: isActive })}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
