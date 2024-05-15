"use client"

import Image from 'next/image';
import React from 'react';
import { logoxyz, mapmarker } from '../../../public';
import DynamicSelect from '../molecules/select';

const footerLinks = [
	{
		title: 'product',
		links: [
			{
				name: 'Content',
				link: '#',
			},
			{
				name: 'How it Works',
				link: '#',
			},
			{
				name: 'Create',
				link: '#',
			},
			{
				name: 'Explore',
				link: '#',
			},
			{
				name: 'Terms & Services',
				link: '#',
			},
		],
	},
	{
		title: 'Company',
		links: [
			{
				name: 'Help Center',
				link: 'https://www.hoobank.com/help-center/',
			},
			{
				name: 'Partners',
				link: 'https://www.hoobank.com/partners/',
			},
			{
				name: 'Suggestions',
				link: 'https://www.hoobank.com/suggestions/',
			},
			{
				name: 'Blog',
				link: 'https://www.hoobank.com/blog/',
			},
			{
				name: 'Newsletters',
				link: 'https://www.hoobank.com/newsletters/',
			},
		],
	},
	{
		title: 'Resources',
		links: [
			{
				name: 'Our Partner',
				link: 'https://www.hoobank.com/our-partner/',
			},
			{
				name: 'Become a Partner',
				link: 'https://www.hoobank.com/become-a-partner/',
			},
		],
	},
	{
		title: 'social',
		links: [
			{
				name: 'Help Center',
				link: 'https://www.hoobank.com/help-center/',
			},
			{
				name: 'Partners',
				link: 'https://www.hoobank.com/partners/',
			},
			{
				name: 'Suggestions',
				link: 'https://www.hoobank.com/suggestions/',
			},
			{
				name: 'Blog',
				link: 'https://www.hoobank.com/blog/',
			},
			{
				name: 'Newsletters',
				link: 'https://www.hoobank.com/newsletters/',
			},
		],
	},
	{
		title: 'legal',
		links: [
			{
				name: 'Help Center',
				link: 'https://www.hoobank.com/help-center/',
			},
			{
				name: 'Partners',
				link: 'https://www.hoobank.com/partners/',
			},
			{
				name: 'Suggestions',
				link: 'https://www.hoobank.com/suggestions/',
			},
			{
				name: 'Blog',
				link: 'https://www.hoobank.com/blog/',
			},
			{
				name: 'Newsletters',
				link: 'https://www.hoobank.com/newsletters/',
			},
		],
	},
];
export default function Footer() {
  return (
		<section className="w-full h-full py-14 px-24 mq750:px-6">
			<div className=" text-foundation-white-white-400 flex justify-center flex-col">
				<div className="flex flex-row justify-between flex-wrap w-full max-w-[1150px] gap-3">
					{footerLinks.map((footerlink) => (
						<div
							key={footerlink.title}
							className="flex flex-col mq450:my-0 my-2 text-start justify-start items-start"
						>
							<h4 className="font-medium text-[16px] my-0 leading-[27px] text-foundation-grey-grey-600 capitalize">
								{footerlink.title}
							</h4>
							<ul className="list-none mt-2 ms-0 ps-0">
								{footerlink.links.map((link, index) => (
									<li
										key={link.name}
										className={`font-normal text-[14px] ${
											footerlink.links.length - 1 ? 'mb-2' : 'mb-0'
										} text-foundation-grey-grey-200 hover:text-foundation-purple-purple-400 active:bg-foundation-purple-purple-100 `}
									>
										{link.name}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="flex flex-col items-center justify-center">
					<div className="border-[1px] border-foundation-purple-purple-400 border-solid rounded-lg mb-10">
						<div className="flex flex-row gap-8 px-4 py-2">
							<p className='my-0'>Language</p>
						</div>
					</div>
					<div className="flex flex-row gap-2 text-white items-start justify-center align-middle">
						<Image
							src={mapmarker}
							alt=""
							className="w-6 h-6 object-contain overflow-hidden"
						/>
						<h2 className="text-base leading-[24px] my-0 font-normal">
							Our Address 14b, Ijaola Street, Onigbongbo Maryland Lagos,
							Nigeria.
						</h2>
					</div>
				</div>
				<div className=" h-[1px] bg-whitesmoke w-full my-8" />
				<div className="flex flex-row justify-between items-center align-middle">
					<Image
						src={logoxyz}
						alt=""
						className="w-[108px] h-10 object-contain"
					/>
					<h3 className="w-[293px] relative leading-[24px] inline-block shrink-0 my-0 text-[#667085] whitespace-nowrap">
						© 2024 XYZ. All rights reserved.
					</h3>
				</div>
			</div>
		</section>
	);
}
