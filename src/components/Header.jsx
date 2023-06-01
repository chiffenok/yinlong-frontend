import Link from 'next/link';

import styles from './Header.module.css';

export const navLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'recipes',
    route: '/recipes',
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Yinlong project</h1>
      <nav className={styles.navigation}>
        <ul>
          {navLinks.map(({ label, route }) => (
            <li key={label}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
