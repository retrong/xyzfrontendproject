import MenuPopupState from '@/components/navbarMenu';
import React from 'react';
import SalesCalculationSection from './_salesComponent/sales-calculation-section';
import SalesDistributionChart from './_salesComponent/salesDistribution';
import SalesRevenueChart from './_salesComponent/salesRevenueChart';
import SalesTrendChart from './_salesComponent/salesTrendChart';
import SalesVolumeChart from './_salesComponent/salesVolumeChart';

const menus = [
	{
		children: 'Filter By Location',
		link: '#',
	},
];

export default function SalesModule() {
  return (
		<>
			{/* drop down select section on page */}
			<div className="w-[742px] flex flex-row items-start justify-start py-0 px-12 box-border max-w-full md:pl-6 md:pr-6 md:box-border">
				<nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[38px] max-w-full whitespace-nowrap md:flex-wrap md:gap-[19px]">
					<MenuPopupState title="Filter By Location" subs={menus} />
					<MenuPopupState title="Filter By Product Category" subs={menus} />
					<MenuPopupState title="Filter By Sales Rep" subs={menus} />
				</nav>
			</div>

			{/* main section of page */}
			<div className="self-stretch flex flex-row items-start justify-start px-12 box-border max-w-full h-dvh text-left text-base text-foundation-black-black-400 font-text-xs-medium lg:pl-6 lg:pr-6 lg:box-border mb-14 md:mb-0">
				<div className="flex-1 flex flex-row items-start justify-start py-5 px-6 max-w-full">
					<div className=" flex-1 flex flex-row flex-wrap items-start justify-start relative max-w-full z-[1] lg:h-auto lg:min-h-[837]">
						{/* checkboxes */}
						<div className="mb-10">
							<SalesCalculationSection />
						</div>

						<div className="mt-36 flex-1 flex flex-wrap lg:flex-col flex-row relative gap-[19px_14px] max-w-full z-[1] lg:h-auto lg:min-h-[837]">
							{/* charts */}
							<div className="w-fit !m-[0] flex flex-col justify-start gap-[16px] max-w-full text-4xs text-gray md:w-full">
								{/* sales trend chart */}
								<SalesTrendChart />
								{/* sales trend chart ends here */}

								{/* sales revenue chart */}
								<SalesRevenueChart />
							</div>

							<div className="w-[370px] md:mt-2 self-stretch flex flex-col gap-[16px] items-start max-w-full justify-start text-xs md:w-full">
								{/* sales volume vs customer */}
								<SalesVolumeChart />

								{/* sales distribution chart */}
								<SalesDistributionChart />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};