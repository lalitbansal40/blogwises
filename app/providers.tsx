'use client';

import { HeroUIProvider } from '@heroui/react';
import { ReactNode } from 'react';
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
    </EmotionProvider>
  );
}
