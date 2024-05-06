"use client"

import { faker } from '@faker-js/faker';
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import Image from 'next/image';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { valueTransformer } from '../../../../../public';

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
)

export const options = {
	responsive: true,
	interaction: {
		mode: 'index' as const,
		interset: false,
	},
	stacked: false,
	plugins: {},
	scales: {
		x: {
			grid: {
				drawTicks: false,
			},
			border: {
				dash: [6, 6],
				display: false,
			},
		},
		y: {
			type: 'linear' as const,
			display: true,
			position: 'left' as const,
			grid: {
				drawTicks: false,
			},
			border: {
				dash: [6, 6],
				display: false,
			},
			ticks: {
				stepSize: 5,
				padding: 10,
				callback: (value: any, index: any, values: any) => {
					const totalItems = values.length - 1;
					if (index !== totalItems) {
						return value;
					}
				},
			},
		},
		// y1: {
		// 	type: 'linear' as const,
		// 	display: true,
		// 	position: 'right' as const,
		// 	grid: {
		// 		drawOnChartArea: false,
		// 	},
		// },
	},
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const data = {
	labels,
	datasets: [
        {
            label: 'Product 1',
            data: labels.map(() => faker.number.int({ min: 0, max: 13 })),
            borderColor: '#ceb0fa',
            backgroundColor: '#ceb0fa',
            yAxisID: 'y',
        },
		{
            label: 'Product 2',
			data: labels.map(() => faker.number.int({ min: 0, max: 12 })),
			borderColor: '#b78af7',
			backgroundColor: '#b78af7',
			yAxisID: 'y',
		},
		{
            label: 'Product 3',
			data: labels.map(() => faker.number.int({ min: 0, max: 12 })),
			borderColor: '#9654f4',
			backgroundColor: '#9654f4',
			yAxisID: 'y',
		},
        {
            label: 'Product 4',
            data: labels.map(() => faker.number.int({ min: 0, max: 14 })),
            borderColor: '#8133f1',
            backgroundColor: '#8133f1',
            yAxisID: 'y',
        },
	],
};
export default function SalesTrendChart() {
  return (
		<div className="self-stretch shadow-[0px_2px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start pt-6 px-0 pb-6 box-border gap-[0.2px] max-w-full">
			<div className="self-stretch h-[335px] relative shadow-[0px_2px_10px_rgba(0,_0,_0,_0.1)] bg-white hidden" />
			<div className="flex flex-row items-start justify-start pt-0 px-[18px] pb-[7.8px] text-base text-foundation-black-black-400">
				<h2 className="m-0 relative text-inherit font-normal font-inherit z-[1]">
					Sales Trends Chart
				</h2>
			</div>
			<div className="self-stretch flex flex-row items-start justify-start pt-0 px-[18px] pb-[25.8px] box-border max-w-full text-xs text-gray1-100">
				<div className="flex-1 flex flex-row items-start justify-start gap-[39px] max-w-full mq750:flex-wrap">
					<div className="relative z-[1]">
						A line Chart showing trends in sales
					</div>
					<div className="flex-1 flex flex-row items-start justify-start gap-[3.9px] min-w-[190px] text-foundation-black-black-400 mq450:flex-wrap">
						<div className="flex-1 flex flex-row items-start justify-start py-0 pr-[4.1px] pl-0 box-border gap-[4px] min-w-[47px]">
							<div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
								<div className="w-[7.9px] h-[9px] relative rounded-[50%] bg-foundation-purple-purple-100 shrink-0 z-[1]" />
							</div>
							<div className="relative inline-block min-w-[54px] shrink-0 z-[1]">
								Product 1
							</div>
						</div>
						<div className="flex-1 flex flex-row items-start justify-start py-0 pr-[4.1px] pl-0 box-border gap-[4px] min-w-[47px]">
							<div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
								<div className="w-[7.9px] h-[9px] relative rounded-[50%] bg-foundation-purple-purple-200 shrink-0 z-[1]" />
							</div>
							<div className="relative inline-block min-w-[56px] shrink-0 z-[1]">
								Product 2
							</div>
						</div>
						<div className="flex-1 flex flex-row items-start justify-start py-0 pr-[4.1px] pl-0 box-border gap-[4px] min-w-[47px]">
							<div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
								<div className="w-[7.9px] h-[9px] relative rounded-[50%] bg-foundation-purple-purple-300 shrink-0 z-[1]" />
							</div>
							<div className="relative inline-block min-w-[56px] shrink-0 z-[1]">
								Product 3
							</div>
						</div>
						<div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
							<div className="w-[7.9px] h-[9px] relative rounded-[50%] bg-foundation-purple-purple-400 z-[1]" />
						</div>
						<div className="relative inline-block min-w-[56px] z-[1]">
							Product 4
						</div>
					</div>
				</div>
			</div>
			<Image
				className="flex-1 self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
				alt=""
				src={valueTransformer}
			/>
			<Line options={options} data={data}  className=' box-border cursor-pointer'/>
			{/* <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[21.8px] box-border relative max-w-full">
				<Image
					className="flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
					alt=""
					src={valueTransformer}
				/>
				<div className="w-[529.9px] !m-[0] absolute right-[18px] bottom-[-139.2px] flex flex-row items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full">
					<Image
						className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] max-h-full z-[1]"
						alt=""
						src={group1}
					/>
					<div className="h-[7.1px] w-[6.2px] absolute !m-[0] right-[-1.2px] bottom-[39.4px] rounded-[50%] bg-foundation-purple-purple-100 z-[3]" />
					<div className="h-[7.1px] w-[6.2px] absolute !m-[0] top-[62px] right-[-2.2px] rounded-[50%] bg-foundation-purple-purple-300 z-[7]" />
					<div className="h-[136px] flex-1 relative max-w-full">
						<button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2px] left-[1.9px] w-[528px] h-[92px]">
							<Image
								className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
								alt=""
								src={treeRoot}
							/>
							<div className="absolute top-[37px] left-[129px] rounded-[50%] bg-foundation-purple-purple-100 w-[6.2px] h-[7.1px] z-[3]" />
							<div className="absolute top-[50px] left-[393px] rounded-[50%] bg-foundation-purple-purple-100 w-[6.2px] h-[7.1px] z-[3]" />
						</button>
						<Image
							className="absolute top-[71px] left-[2.9px] w-[527px] h-[65px] z-[4]"
							alt=""
							src={inputProcess}
						/>
						<button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[61px] left-[1.9px] w-[528px] h-[66px]">
							<div className="absolute top-[3px] left-[260px] rounded-[50%] bg-foundation-purple-purple-100 w-[6.2px] h-[7.1px] z-[3]" />
							<div className="absolute top-[51px] left-[129px] rounded-[50%] bg-foundation-purple-purple-200 w-[6.2px] h-[7.1px] z-[5]" />
							<div className="absolute top-[44px] left-[261px] rounded-[50%] bg-foundation-purple-purple-200 w-[6.2px] h-[7.1px] z-[5]" />
							<div className="absolute top-[7px] left-[393px] rounded-[50%] bg-foundation-purple-purple-200 w-[6.2px] h-[7.1px] z-[5]" />
							<Image
								className="absolute top-[0px] left-[0px] w-full h-full z-[6]"
								alt=""
								src={vector251}
							/>
							<div className="absolute top-[36px] left-[129px] rounded-[50%] bg-foundation-purple-purple-300 w-[6.2px] h-[7.1px] z-[7]" />
							<div className="absolute top-[23px] left-[259px] rounded-[50%] bg-foundation-purple-purple-300 w-[6.2px] h-[7.1px] z-[7]" />
							<div className="absolute top-[15px] left-[393px] rounded-[50%] bg-foundation-purple-purple-300 w-[6.2px] h-[7.1px] z-[7]" />
						</button>
						<div className="absolute top-[87.8px] left-[0px] rounded-[50%] bg-foundation-purple-purple-400 box-border w-[6.2px] h-[7.1px] z-[9] border-[0px] border-solid border-foundation-purple-purple-400" />
						<button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[2.9px] w-[527px] h-[92px]">
							<Image
								className="absolute top-[0px] left-[0px] w-full h-full z-[8]"
								alt=""
								src={vector27}
							/>
							<div className="absolute top-[49px] left-[128px] rounded-[50%] bg-foundation-purple-purple-400 box-border w-[6.2px] h-[7.1px] z-[9] border-[0px] border-solid border-foundation-purple-purple-400" />
							<div className="absolute top-[22px] left-[259px] rounded-[50%] bg-foundation-purple-purple-400 box-border w-[6.2px] h-[7.1px] z-[9] border-[0px] border-solid border-foundation-purple-purple-400" />
							<div className="absolute top-[35px] left-[392px] rounded-[50%] bg-foundation-purple-purple-400 box-border w-[6.2px] h-[7.1px] z-[9] border-[0px] border-solid border-foundation-purple-purple-400" />
						</button>
					</div>
				</div>
			</div>
			<div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[13.1px] pr-4 pl-[22.9px] box-border max-w-full">
				<div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
					<div className="flex flex-col items-start justify-start pt-[1.6px] px-0 pb-0">
						<div className="w-[6.2px] h-[7.1px] relative rounded-[50%] bg-foundation-purple-purple-100 shrink-0 z-[3]" />
					</div>
					<div className="h-[7.1px] w-[6.2px] relative rounded-[50%] bg-foundation-purple-purple-400 box-border shrink-0 z-[9] border-[0px] border-solid border-foundation-purple-purple-400" />
				</div>
			</div>
			<div className="w-[22.7px] flex flex-row items-start justify-start pt-0 pb-[46.8px] pr-1 pl-[3.9px] box-border text-right">
				<div className="flex-1 relative shrink-0 z-[1]">10</div>
			</div>
			<div className="w-[27.1px] flex flex-row items-start justify-start pt-0 pb-[33.9px] pr-2 pl-[8.3px] box-border text-right">
				<div className="flex-1 relative z-[1]">5</div>
			</div>
			<div className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-[23.2px] box-border max-w-full">
				<div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
					<div className="flex flex-col items-start justify-start pt-[3.1px] px-0 pb-0">
						<div className="w-[6.2px] h-[7.1px] relative rounded-[50%] bg-foundation-purple-purple-300 shrink-0 z-[7]" />
					</div>
					<div className="h-[7.1px] w-[6.2px] relative rounded-[50%] bg-foundation-purple-purple-200 shrink-0 z-[5]" />
				</div>
			</div>
			<div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[14.6px] box-border max-w-full">
				<div className="flex-1 flex flex-row items-start justify-between py-0 pr-px pl-0 box-border max-w-full gap-[20px] mq450:flex-wrap">
					<div className="flex flex-row items-start justify-start py-0 pr-[10.7px] pl-0 gap-[2.6px] text-right">
						<div className="relative inline-block min-w-[6px] z-[1]">0</div>
						<div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-left">
							<div className="flex flex-col items-start justify-start gap-[21.4px]">
								<div className="w-[6.2px] h-[7.1px] relative rounded-[50%] bg-foundation-purple-purple-200 shrink-0 z-[5]" />
								<div className="flex flex-row items-start justify-start py-0 pr-0 pl-[2.6px]">
									<div className="relative inline-block min-w-[37.7px] shrink-0 z-[1]">
										Monday
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start justify-start pt-[30.5px] pb-0 pr-[15px] pl-0">
						<div className="relative inline-block min-w-[37.7px] z-[1]">
							Tuesday
						</div>
					</div>
					<div className="flex flex-col items-start justify-start pt-[30.5px] px-0 pb-0">
						<div className="relative inline-block min-w-[50px] z-[1]">
							Wednesday
						</div>
					</div>
					<div className="w-[45.6px] flex flex-col items-start justify-start pt-[30.5px] px-0 pb-0 box-border">
						<div className="self-stretch relative leading-[8px] z-[1]">
							Thursday
						</div>
					</div>
					<div className="w-[31.5px] flex flex-col items-start justify-start pt-[29.5px] px-0 pb-0 box-border">
						<div className="self-stretch relative leading-[8px] z-[1]">
							Friday
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
}
