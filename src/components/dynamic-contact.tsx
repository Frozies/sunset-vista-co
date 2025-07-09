'use client';
import dynamic from "next/dynamic";
export const DynamicContact = dynamic(() => import('@/components/contact'), {ssr: false})
