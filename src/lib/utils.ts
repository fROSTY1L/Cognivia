import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { 
    getDefaultConfig,
 } from '@rainbow-me/rainbowkit';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base
} from 'wagmi/chains'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const config = getDefaultConfig({
    appName: "Cognivia",
    projectId: "a0f94438df1f9c467454f5477a1ecbd4",
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true
})