// app/providers.tsx
'use client';

import { HeroUIProvider } from '@heroui/react';
// Import any other providers if needed
import { ReactNode } from 'react';

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  );
}
