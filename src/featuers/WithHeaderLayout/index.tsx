import { JSX, ReactNode } from 'react';

type Props = {
  header: ReactNode;
  content: ReactNode;
  layoutH?: string;
  headerH?: string;
};

export function WithHeaderLayout({ header, content, layoutH = '100vh', headerH = '60px' }: Props): JSX.Element {
  return (
    <div style={{ height: layoutH }}>
      <div style={{ height: headerH }}>{header}</div>
      <div style={{ height: `calc(${layoutH} - ${headerH})` }}>{content}</div>
    </div>
  );
}
