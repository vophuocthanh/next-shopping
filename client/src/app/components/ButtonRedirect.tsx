'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ButtonRedirect() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/login');
  };
  return (
    <button
      className='inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]'
      onClick={handleClick}
    >
      Chuyển sang trang Login
    </button>
  );
}
