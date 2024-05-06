import React from 'react';
import Sidebar from './_salesComponent/Sidebar';
import Header from './_salesComponent/header';

export default function SalesLayout({children}: {children: React.ReactNode}) {
  return (
		<div className="w-full relative bg-white flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:20px] text-xl text-white font-text-xs-medium mq750:flex-wrap">
			<Sidebar />
			<main className="flex-1 flex flex-col items-start justify-start min-w-[673px] max-w-full mq750:gap-[16px] mq750:min-w-full">
                <Header />
				{children}
			</main>
		</div>
	);
}
