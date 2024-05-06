import MenuPopupState from '@/components/navbarMenu';
import Select from '@mui/material/Select';
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
			<div className="w-[742px] flex flex-row items-start justify-start py-0 px-12 box-border max-w-full mq750:pl-6 mq750:pr-6 mq750:box-border">
				<nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[38px] max-w-full whitespace-nowrap mq750:flex-wrap mq750:gap-[19px]">
					<MenuPopupState title="Filter By Location" subs={menus} />
					<MenuPopupState title="Filter By Product Category" subs={menus} />
					<MenuPopupState title="Filter By Sales Rep" subs={menus} />
				</nav>
			</div>

			{/* main section of page */}
			<div className="self-stretch flex flex-row items-start justify-start px-12 box-border max-w-full h-dvh text-left text-base text-foundation-black-black-400 font-text-xs-medium mq1050:pl-6 mq1050:pr-6 mq1050:box-border mb-14 mq750:mb-0">
				<div className="flex-1 flex flex-row items-start justify-start py-5 px-6 max-w-full">
					<div className=" flex-1 flex flex-row flex-wrap items-start justify-start relative max-w-full z-[1] mq1050:h-auto mq1050:min-h-[837]">
						{/* checkboxes */}
						<div className="mb-10">
							<SalesCalculationSection />
						</div>

						<div className="mt-36 flex-1 flex flex-wrap mq1050:flex-col flex-row relative gap-[19px_14px] max-w-full z-[1] mq1050:h-auto mq1050:min-h-[837]">
							{/* charts */}
							<div className="w-fit !m-[0] flex flex-col justify-start gap-[16px] max-w-full text-4xs text-gray mq750:w-full">
								{/* sales trend chart */}
								<SalesTrendChart />
								{/* sales trend chart ends here */}

								{/* sales revenue chart */}
								<SalesRevenueChart />
							</div>

							<div className="w-[370px] mq750:mt-2 self-stretch flex flex-col gap-[16px] items-start max-w-full justify-start text-xs mq750:w-full">
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