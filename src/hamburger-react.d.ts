declare module 'hamburger-react' {
  import { FC } from 'react';

  interface HamburgerProps {
    toggled: boolean;
    toggle: (toggle: boolean) => void;
    size?: number;
  }

  const Hamburger: FC<HamburgerProps>;

  export { Hamburger };
}
