import React from 'react';
import DashboardComponent from '../_components/dashboardComponent';

export default function AdminDashboard() {
	return (
		<section className="max-w-full text-foundation-black-black-400 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] [row-gap:5px] mq1125:flex-wrap container mq850:px-12 px-4 ">
			<div className="flex flex-col gap-2 mt-0 mq850:mt-2">
				<h2 className=" font-medium text-[20px] m-0">Modules</h2>
				<p className="font-normal text-base text-foundation-grey-grey-800 m-0">
					Select a module to get started
				</p>
			</div>
            <DashboardComponent />
		</section>
	);
}
