import type { ReactNode } from 'react';

import { Header } from '@/components/Header';

type Props = {
  children: ReactNode;
};

const Main = (props: Props) => (
  <>
    <Header />
    {props.children}
  </>
);

export { Main };
