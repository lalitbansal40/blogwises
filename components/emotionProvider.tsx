"use client";

import { CacheProvider } from "@emotion/react";
import { emotionCache } from "@/components/utils/emotionCache";
import { ReactNode } from "react";

export default function EmotionProvider({ children }: { children: ReactNode }) {
  return <CacheProvider value={emotionCache()}>{children}</CacheProvider>;
}
