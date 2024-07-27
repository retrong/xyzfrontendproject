import React from 'react';
import AdminHeader from './_components/adminHeader';
import AdminSidebar from './_components/adminSidebar';
export default function SetupLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full relative bg-white flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:5px] text-xl text-white font-text-xs-medium mq750:flex-wrap">
			<AdminSidebar />
			<main className="flex-1 flex flex-col items-start justify-start min-w-[673px] max-w-[1400px] mq750:gap-[16px] mq750:min-w-full">
				<AdminHeader />
				{children}
			</main>
		</div>
	);
}
