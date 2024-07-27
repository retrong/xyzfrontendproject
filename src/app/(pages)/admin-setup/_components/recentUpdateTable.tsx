"use client"

import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

type AppPath = '/';

interface RecentUpdate {
	id: number;
	allTypes: string;
	company: string;
	location: string;
	lastModified: string;
	icon?: React.ReactNode;
	path?: AppPath;
}

const RecentUpdateTable: React.FC = () => {
	const [rows, setRows] = useState<RecentUpdate[]>([
		{
			id: 1,
			allTypes: 'Invoicing',
			company: 'GFAMS',
			location: `Latitude 37.7749\u00B0 N,    \nLongitude 122.4194\u00B0 W`,
			icon: <FaExternalLinkAlt />,
			lastModified: '2023-03-31',
		},
		{
			id: 2,
			allTypes: 'Receive Payment',
			company: 'GFAMS',
			location: `Latitude 37.7749\u00B0 N,    \nLongitude 122.4194\u00B0 W`,
			icon: <FaExternalLinkAlt />,
			lastModified: '2023-03-31',
		},
		{
			id: 3,
			allTypes: 'Sale Reconcilation',
			company: 'GFAMS',
			location: `Latitude 37.7749\u00B0 N,    \nLongitude 122.4194\u00B0 W`,
			lastModified: '2023-03-31',
		},
	]);

	const handleAction = (id: number) => {
		// Implement action logic here
		console.log(`Action for row ${id}`);
	};

	return (
		<div className="w-full mq850:mt-5 mt-2">
			<div className="scroll min-w-[500px] scrollbar-thin scrollbar-track-primary scrollbar-thumb-plain scrollbar-thumb-current overflow-x-auto overflow-auto border-2 border-solid border-foundation-grey-grey-300 rounded-xl">
				<table
					style={{ borderSpacing: 0 }}
					className="bg-white border border-gray-300 w-full text-sm"
				>
					<thead className="bg-foundation-grey-grey-300/25 text-foundation-black-black-400 text-sm w-full">
						<tr>
							<th className="py-4 px-4 font-medium text-center">All Types</th>
							<th className="py-4 px-4 font-medium text-center">Company</th>
							<th className="py-4 px-4 font-medium text-center">Location</th>
							<th className="py-4 px-4 font-medium text-center">
								Last Modified
							</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((row) => (
							<tr
								key={row.id}
								className="border-b border-gray-200 hover:bg-gray-100"
							>
								<td className="py-4 px-4 whitespace-break-spaces text-foundation-grey-grey-700 text-center">
									{row.allTypes} <span>{row.icon}</span>
								</td>
								<td className="py-4 px-4 whitespace-break-spaces text-foundation-grey-grey-700 text-center">
									{row.company}
								</td>
								<td className="py-4 px-4 whitespace-break-spaces text-foundation-grey-grey-700 text-center">
									{row.location}
								</td>
								<td className="py-4 px-4 whitespace-break-spaces text-foundation-grey-grey-700 text-center">
									{row.lastModified}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RecentUpdateTable;
