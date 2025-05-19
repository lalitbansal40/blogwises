// app/providers.tsx
'use client';

import { HeroUIProvider } from '@heroui/react';
// Import any other providers if needed
import { ReactNode } from 'react';
// import EmotionProvider from '@/components/emotionProvider';
import EmotionProvider from '@/components/emotionProvider';
type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <EmotionProvider>
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  );
}
