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
import { chart, vector1610, vector1611, vector1612, vector1613, vector162, vector1621, vector163, vector164, vector165, vector166, vector167, vector168, vector169 } from '../../../../../public';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
	scales: {
		x: {
			title: {
				display: true,
				text: 'Customer Demographics',
			},
			grid: {
				drawTicks: false,
                display: false
			},
			ticks: {
                stepSize: 1,
				padding: 10,
			},
		},
		y: {
			beginAtZero: true,
			title: {
				display: true,
				text: 'Sales Volume',
			},
			ticks: {
				stepSize: 1,
				padding: 10,
			},
			grid: {
				drawTicks: false,
                display: false
			},
		},
	},
};

export const data = {
	datasets: [
		{
			label: 'Group 1',
			data: Array.from({ length: 5 }, () => ({
				x: faker.number.int({ min: 4, max: 10 }),
				y: faker.number.int({ min: 2, max: 10 }),
				r: faker.number.int({ min: 2, max: 10 }),
			})),
			backgroundColor: '#ceb0fa',
		},
		{
			label: 'Group 2',
			data: Array.from({ length: 5 }, () => ({
				x: faker.number.int({ min: 2, max: 10 }),
				y: faker.number.int({ min: 2, max: 10 }),
				r: faker.number.int({ min: 5, max: 10 }),
			})),
			backgroundColor: '#b78af7',
		},
		{
			label: 'Group 3',
			data: Array.from({ length: 5 }, () => ({
				x: faker.number.int({ min: 2, max: 10 }),
				y: faker.number.int({ min: 2, max: 10 }),
				r: faker.number.int({ min: 5, max: 10 }),
			})),
			backgroundColor: '#9654f4',
		},
		{
			label: 'Group 4',
			data: Array.from({ length: 5 }, () => ({
				x: faker.number.int({ min: 2, max: 10 }),
				y: faker.number.int({ min: 2, max: 10 }),
				r: faker.number.int({ min: 5, max: 10 }),
			})),
			backgroundColor: '#8133f1',
		},
		{
			label: 'Group 5',
			data: Array.from({ length: 5 }, () => ({
				x: faker.number.int({ min: 2, max: 10 }),
				y: faker.number.int({ min: 2, max: 10 }),
				r: faker.number.int({ min: 5, max: 10 }),
			})),
			backgroundColor: '#6200ee',
		},
	],
};

export default function SalesVolumeChart() {
  return (
		<div className="self-stretch shadow-[0px_2px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start pt-[18px] px-0 pb-2.5 gap-[8.5px] cursor-pointer">
			<div className="self-stretch h-80 relative shadow-[0px_2px_10px_rgba(0,_0,_0,_0.1)] bg-white hidden" />
			<div className="w-[20.5px] h-[16.6px] relative hidden">
				<div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-gray-2" />
				<div className="absolute h-[66.27%] w-[16.59%] top-[16.87%] right-[41.46%] bottom-[16.87%] left-[41.95%]">
					<div className="absolute h-[67.27%] w-full top-[33.64%] right-[0%] bottom-[-0.91%] left-[0%] rounded-md bg-white" />
					<div className="absolute h-[25.45%] w-full top-[0%] right-[0%] bottom-[74.55%] left-[0%] rounded-md bg-white" />
				</div>
			</div>
			<div className="flex flex-row items-start justify-start py-0 px-[18px] text-sm">
				<h3 className="m-0 relative text-inherit leading-[20px] font-normal font-inherit z-[1]">
					<p className="m-0">{`Sales Volume vs Customer `}</p>
					<p className="m-0">{`Demographics `}</p>
				</h3>
			</div>
			<div className="self-stretch flex flex-row items-start justify-start py-0 px-[18px] text-4xs text-foundation-grey-grey-800">
				<div className="flex-1 flex flex-row items-start justify-start gap-[4px] mq450:flex-wrap">
					<div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
						<div className="w-3 h-3 relative rounded-[50%] bg-foundation-purple-purple-100 z-[1]" />
					</div>
					<div className="flex-1 relative leading-[18px] inline-block min-w-[23px] z-[1]">
						Group 1
					</div>
					<div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
						<div className="w-3 h-3 relative rounded-[50%] bg-foundation-purple-purple-200 z-[1]" />
					</div>
					<div className="flex-1 relative leading-[18px] inline-block min-w-[23px] z-[1]">
						Group 2
					</div>
					<div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
						<div className="w-3 h-3 relative rounded-[50%] bg-foundation-purple-purple-300 z-[1]" />
					</div>
					<div className="flex-1 relative leading-[18px] inline-block min-w-[23px] z-[1]">
						Group 3
					</div>
					<div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
						<div className="w-3 h-3 relative rounded-[50%] bg-foundation-purple-purple-400 z-[1]" />
					</div>
					<div className="flex-1 relative leading-[18px] inline-block min-w-[23px] z-[1]">
						Group 4
					</div>
					<div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
						<div className="w-3 h-3 relative rounded-[50%] bg-foundation-purple-purple-500 z-[1]" />
					</div>
					<div className="flex-1 relative leading-[18px] inline-block min-w-[23px] z-[1]">
						Group 5
					</div>
				</div>
			</div>
			<Image
				className="self-stretch relative w-full object-cover overflow-hidden max-h-full z-[1]"
				alt=""
				src={vector162}
			/>
			<Bubble options={options} data={data} />
		</div>
	);
}
