'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import localFont from 'next/font/local';

import styles from './styles.module.css';

const steppe = localFont({
  src: '../../../public/fonts/Steppe/Steppe.otf',
  weight: '400',
  style: 'normal',
});

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
            className={
              isActive
                ? clsx(styles.active, steppe.className)
                : clsx(styles.inactive, steppe.className)
            }
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
