"use client"

import { faker } from '@faker-js/faker';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import Image from 'next/image';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { group11, vector161 } from '../../../../../public';


ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	indexAxis: 'y' as const,
	elements: {
		bar: {
			borderWidth: 2,
		},
	},
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: false,
			text: 'Chart.js Horizontal Bar Chart',
		},
	},
};

const labels = ['Mon', 'Tue', 'Web', 'Thurs', 'Fri', 'Sat', 'Sun'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Product category 1',
			data: labels.map(() => faker.number.int({ min: 0, max: 10 })),
			borderColor: '#ceb0fa',
			backgroundColor: '#ceb0fa',
		},
		{
			label: 'Product category 2',
			data: labels.map(() => faker.number.int({ min: 0, max: 10 })),
			borderColor: '#b78af7',
			backgroundColor: '#b78af7',
		},
	],
};
export default function SalesRevenueChart() {
  return (
		<div className="self-stretch shadow-[0px_2px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white flex flex-col items-end justify-start pt-[23.8px] px-0 pb-[20.9px] box-border gap-[5.2px] max-w-full text-base text-foundation-black-black-400">
			<div className="self-stretch h-[335px] relative shadow-[0px_2px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white hidden" />
			<div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
				<div className="self-stretch flex flex-row items-start justify-start py-0 pr-[27px] pl-[24.1px] box-border max-w-full">
					<div className="flex-1 flex flex-col items-start justify-start gap-[4px] max-w-full">
						<div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
							<h2 className="m-0 relative text-inherit font-normal font-inherit z-[1]">
								Sales Revenue Chart
							</h2>
							<div className="flex flex-col items-start justify-start pt-[3.7px] px-0 pb-0">
								<div className="w-[3.1px] h-[13.8px] relative">
									<div className="absolute top-[4.6px] left-[0px] rounded-2xl bg-white w-[3.1px] h-[9.2px] z-[1]" />
									<div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[3.1px] h-[3.4px] z-[1]" />
								</div>
							</div>
						</div>
						<div className="self-stretch flex flex-row items-start justify-start gap-[22px] text-xs text-foundation-grey-grey-900 mq750:flex-wrap">
							<div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[165px]">
								<div className="relative z-[1]">
									A Bar Chart showing sales revenue over time
								</div>
							</div>

							{/* product indication */}
							<div className="flex-1 rounded-2xl flex flex-row items-start justify-start gap-[4px] min-w-[159px] z-[1] text-foundation-black-black-400 mq450:flex-wrap">
								<div className="flex flex-col items-start justify-start pt-[3.6px] px-0 pb-0">
									<div className="w-[7.3px] h-[7.8px] relative rounded-[50%] bg-foundation-purple-purple-100" />
								</div>
								<div className="flex-1 relative inline-block min-w-[71px]">
									Product category 1
								</div>
								<div className="flex flex-col items-start justify-start pt-[3.6px] px-0 pb-0">
									<div className="w-[7.3px] h-[7.8px] relative rounded-[50%] bg-foundation-purple-purple-200" />
								</div>
								<div className="flex-1 relative inline-block min-w-[71px]">
									Product category 2
								</div>
							</div>
						</div>
					</div>
				</div>
				<Image
					className="self-stretch relative rounded-2xl max-w-full overflow-hidden max-h-full z-[1]"
					loading="lazy"
					alt=""
					src={vector161}
				/>
			</div>
			<Bar options={options} data={data} />
			{/* <div className="self-stretch flex flex-row items-start justify-end py-0 pr-4 pl-[23px] box-border max-w-full text-right text-4xs text-foundation-grey-grey-900">
				<div className="flex-1 flex flex-col items-end justify-start gap-[3.3px] max-w-full">
					<div className="self-stretch flex flex-row items-start justify-end py-0 pr-2.5 pl-0 box-border max-w-full">
						<div className="flex-1 flex flex-row items-start justify-start gap-[4.6px] max-w-full mq750:flex-wrap">
							<div className="w-[21.8px] flex flex-col items-start justify-start pt-[6.1px] px-0 pb-0 box-border">
								<div className="self-stretch flex flex-col items-end justify-start gap-[14.2px]">
									<div className="relative inline-block min-w-[19px] z-[1]">
										Mon
									</div>
									<div className="w-[17.9px] relative inline-block min-w-[17.9px] z-[1]">
										Tue
									</div>
									<div className="self-stretch relative inline-block min-w-[21.8px] z-[1]">
										Wed
									</div>
									<div className="w-[17.9px] relative inline-block min-w-[17.9px] z-[1]">
										Thu
									</div>
									<div className="w-[17.9px] relative inline-block z-[1]">
										Fri
									</div>
									<div className="w-[17.9px] relative inline-block min-w-[17.9px] z-[1]">
										Sat
									</div>
									<div className="w-[17.9px] relative leading-[11.2px] inline-block min-w-[17.9px] z-[1]">
										Sun
									</div>
								</div>
							</div>
							<div className="h-[182.8px] flex-1 relative min-w-[323px] max-w-full">
								<Image
									className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
									loading="lazy"
									alt=""
									src={group11}
								/>
								<div className="absolute top-[164.6px] left-[0.6px] w-[188.9px] h-[11.4px] z-[2]">
									<div className="absolute top-[0px] left-[0px] w-full h-full">
										<div className="absolute top-[0px] left-[0px] bg-foundation-purple-purple-100 w-[163px] h-[5.7px]" />
										<div className="absolute top-[5.7px] left-[0px] bg-foundation-purple-purple-200 w-[188.9px] h-[5.7px] z-[1]" />
									</div>
								</div>
								<div className="absolute top-[138px] left-[0.6px] bg-foundation-purple-purple-100 w-[247px] h-[5.7px] z-[2]" />
								<div className="absolute top-[143.7px] left-[0.6px] bg-foundation-purple-purple-200 w-[386.6px] h-[5.7px] z-[2]" />
								<div className="absolute top-[111px] left-[0.6px] w-[320.4px] h-[12.6px] z-[2]">
									<div className="absolute top-[0px] left-[0px] w-full h-full">
										<div className="absolute top-[0px] left-[0px] bg-foundation-purple-purple-100 w-[163px] h-[6.9px]" />
										<div className="absolute top-[5.7px] left-[0px] bg-foundation-purple-purple-200 w-[320.4px] h-[6.9px] z-[1]" />
									</div>
								</div>
								<div className="absolute top-[87px] left-[0.6px] bg-foundation-purple-purple-100 w-[205px] h-[5.7px] z-[2]" />
								<div className="absolute top-[92.7px] left-[0.6px] bg-foundation-purple-purple-200 w-[452px] h-[5.7px] z-[2]" />
								<div className="absolute top-[61px] left-[0.6px] w-[368.1px] h-[12.6px] z-[2]">
									<div className="absolute top-[0px] left-[0px] w-full h-full">
										<div className="absolute top-[0px] left-[0px] bg-foundation-purple-purple-100 w-[368.1px] h-[6.9px]" />
										<div className="absolute top-[5.7px] left-[0px] bg-foundation-purple-purple-200 w-[91.2px] h-[6.9px] z-[1]" />
									</div>
								</div>
								<div className="absolute top-[35.6px] left-[0.6px] bg-foundation-purple-purple-100 w-[81.5px] h-[5.7px] z-[2]" />
								<div className="absolute top-[41.3px] left-[0.6px] bg-foundation-purple-purple-200 w-[205px] h-[5.7px] z-[2]" />
								<div className="absolute top-[9px] left-[0.6px] bg-foundation-purple-purple-100 w-[123.5px] h-[5.7px] z-[2]" />
								<div className="absolute top-[14.7px] left-[0.6px] bg-foundation-purple-purple-200 w-[179.2px] h-[5.7px] z-[3]" />
							</div>
						</div>
					</div>
					<div className="w-[506.6px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left mq750:flex-wrap">
						<div className="w-[20.2px] relative inline-block shrink-0 z-[1]">
							0
						</div>
						<div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
							<div className="relative inline-block min-w-[20.2px] z-[1]">
								1.25
							</div>
						</div>
						<div className="w-[27.9px] flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
							<div className="self-stretch relative z-[1]">2.5</div>
						</div>
						<div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
							<div className="relative inline-block min-w-[20.2px] z-[1]">
								3.75
							</div>
						</div>
						<div className="w-[27.2px] flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border">
							<div className="self-stretch relative z-[1]">5</div>
						</div>
						<div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
							<div className="relative inline-block min-w-[20.2px] z-[1]">
								6.25
							</div>
						</div>
						<div className="w-[27.1px] flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border">
							<div className="self-stretch relative z-[1]">7.5</div>
						</div>
						<div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
							<div className="relative inline-block min-w-[20.2px] z-[1]">
								8.75
							</div>
						</div>
						<div className="relative inline-block min-w-[10px] shrink-0 z-[1] mq750:w-full mq750:h-2.5">
							10
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
}
