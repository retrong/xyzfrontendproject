import React from 'react';
import SetupHeader from './_setupComponets/setupHeader';
import SetupSidebar from './_setupComponets/setupSidebar';
;

export default function SetupLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full relative bg-white flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:20px] text-xl text-white font-text-xs-medium mq750:flex-wrap">
			<SetupSidebar />
			<main className="flex-1 flex flex-col items-start justify-start min-w-[673px] max-w-[1400px] mq750:gap-[16px] mq750:min-w-full">
                <SetupHeader />
				{children}
			</main>
		</div>
	);
}
