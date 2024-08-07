"use client"

import { faker } from '@faker-js/faker';
import {
    Chart as ChartJS,
    Legend,
    LinearScale,
    PointElement,
    Tooltip,
} from 'chart.js';
import Image from 'next/image';
import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { vector1615 } from '../../../../../public';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
	scales: {
		x: {
			
			grid: {
				drawTicks: false,
			},
			ticks: {
				stepSize: 1,
				padding: 10,
			},
		},
		y: {
			beginAtZero: true,
			ticks: {
				stepSize: 1,
				padding: 10,
			},
			grid: {
				drawTicks: false,
			},
		},
	},
};

export const data = {
	datasets: [
		{
			label: 'Group 1',
			data: Array.from({ length: 1 }, () => ({
				x: faker.number.int({ min: 4, max: 100 }),
				y: faker.number.int({ min: 2, max: 100 }),
				r: faker.number.int({ min: 2, max: 100 }),
			})),
			backgroundColor: '#ceb0fa',
		},
		{
			label: 'Group 2',
			data: Array.from({ length: 1 }, () => ({
				x: faker.number.int({ min: 2, max: 100 }),
				y: faker.number.int({ min: 2, max: 100 }),
				r: faker.number.int({ min: 5, max: 10 }),
			})),
			backgroundColor: '#b78af7',
		},
		{
			label: 'Group 3',
			data: Array.from({ length: 1 }, () => ({
				x: faker.number.int({ min: 2, max: 100 }),
				y: faker.number.int({ min: 2, max: 100 }),
				r: faker.number.int({ min: 5, max: 100 }),
			})),
			backgroundColor: '#9654f4',
		},
	],
};

export default function SalesDistributionChart() {
  return (
		<div className="self-stretch shadow-[0px_2px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start pt-4 px-0 pb-[23.9px] gap-[10px] text-sm">
			<div className="self-stretch h-[351px] relative shadow-[0px_2px_10px_rgba(0,_0,_0,_0.1)] bg-white hidden" />
			<div className="flex flex-row items-start justify-start py-0 px-6">
				<div className="flex flex-col items-start justify-start gap-[8px]">
					<h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[116px] z-[1]">
						Sales Distribution
					</h3>
					<div className="relative text-xs text-gray1-100 inline-block min-w-[105px] z-[1]">
						Based on Location
					</div>
				</div>
			</div>
			<div className="w-[20.5px] h-[18.3px] relative hidden">
				<div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-gray-2" />
				<div className="absolute h-[66.67%] w-[16.59%] top-[16.94%] right-[41.46%] bottom-[16.39%] left-[41.95%]">
					<div className="absolute h-[66.39%] w-full top-[32.79%] right-[0%] bottom-[0.82%] left-[0%] rounded-md bg-white" />
					<div className="absolute h-[24.59%] w-full top-[0%] right-[0%] bottom-[75.41%] left-[0%] rounded-md bg-white" />
				</div>
			</div>
			<div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5">
				<Image
					className="flex-1 relative max-w-full overflow-hidden max-h-full object-contain mt-[-2px] z-[1]"
					loading="lazy"
					alt=""
					src={vector1615}
				/>
			</div>
			<div className="w-[190.5px] h-[196.2px] relative rounded-[50%] bg-foundation-purple-purple-200 hidden" />
			<Bubble options={options} data={data} />

			{/* <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[31px] pl-[39px] text-xs">
				<div className="flex-1 flex flex-col items-start justify-start gap-[4.9px]">
					<div className="self-stretch flex flex-row items-start justify-start gap-[25px] sm:flex-wrap">
						<div className="flex flex-col items-start justify-start gap-[8px]">
							<div className="relative inline-block min-w-[61px] z-[1]">
								Product 1
							</div>
							<div className="relative inline-block min-w-[61px] z-[1]">
								Product 4
							</div>
						</div>
						<div className="flex flex-row items-start justify-start relative">
							<div className="relative inline-block min-w-[61px] z-[100]">
								Product 2
							</div>
							<div className="h-[275px] w-[260.2px] absolute !m-[0] bottom-[-262px] left-[-109px]">
								<div className="absolute top-[0px] left-[6px] rounded-[50%] bg-foundation-purple-purple-100 w-[9px] h-[9px] z-[1]" />
								<div className="absolute top-[0px] left-[92px] rounded-[50%] bg-foundation-purple-purple-200 w-[9px] h-[9px] z-[1]" />
								<div className="absolute top-[0px] left-[178px] rounded-[50%] bg-foundation-purple-purple-300 w-[9px] h-[9px] z-[1]" />
								<div className="absolute top-[25px] left-[6px] rounded-[50%] bg-foundation-purple-purple-400 w-[9px] h-[9px] z-[1]" />
								<div className="absolute top-[90.97px] left-[314.27px] rounded-[50%] bg-foundation-purple-purple-300 w-[194.8px] h-[191.9px] [transform:_rotate(60.7deg)] [transform-origin:0_0] z-[2]" />
								<div className="absolute top-[161.8px] left-[136.24px] rounded-[50%] bg-foundation-purple-purple-400 w-[195.8px] h-[190.9px] [transform:_rotate(-104.6deg)] [transform-origin:0_0] z-[3]" />
							</div>
						</div>
						<div className="relative inline-block min-w-[61px] z-[1]">
							Product 3
						</div>
					</div>
					<div className="w-[214.3px] flex flex-row items-start justify-start py-0 pr-3 pl-[11.9px] box-border text-white">
						<div className="flex-1 flex flex-col items-start justify-start pt-[49.1px] px-[25px] pb-[34.9px] relative gap-[23.7px]">
							<div className="w-full h-full absolute !m-[0] top-[196.2px] right-[-190.5px] bottom-[-196.2px] left-[190.5px] rounded-[50%] bg-foundation-purple-purple-100 [transform:_rotate(-180deg)] [transform-origin:0_0] z-[4]" />
							<div className="self-stretch flex flex-row items-start justify-end py-0 px-7">
								<div className="relative inline-block min-w-[25px] z-[5]">
									42%
								</div>
							</div>
							<div className="flex flex-row items-start justify-start pt-0 px-0 pb-[6.9px]">
								<div className="relative inline-block min-w-[25px] z-[5]">
									20%
								</div>
							</div>
							<div className="self-stretch flex flex-row items-start justify-start py-0 pr-[19px] pl-[39.3px]">
								<div className="flex-1 flex flex-col items-start justify-start">
									<div className="self-stretch flex flex-row items-start justify-end">
										<div className="relative inline-block min-w-[23px] z-[5]">
											12%
										</div>
									</div>
									<div className="relative inline-block min-w-[25px] z-[5] mt-[-2.1px]">
										26%
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
}
