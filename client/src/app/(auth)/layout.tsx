import React from 'react';

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>Header</header>
      {children}
    </div>
  );
}
