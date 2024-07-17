'use client';

import { sidebarItems } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
    closeButton,
    hamburger,
    xyz,
} from '../../../../../public';
// import ProgressSteps from './progressBar';


export const setupItems = [
	{
		icon: '/viewdashboardoutline.svg',
		title: 'Business Setup & Information',
		content: 'Manage your business information',
		path: '/setup/business-information',
		// subTitle: 'Overview',
		isActive: true,
	},
	{
		icon: '/mapmarkeroutline.svg',
		path: '/setup/price-payment',
		title: 'Pricing & Payments',
		content: 'Payment for plans and payment methods',
	},
	{
		icon: '/chartboxoutline.svg',
		path: '/setup/manage-account',
		title: 'Manage your Account',
		content: 'Your subscription and user type setup',
	},
	{
		icon: '/borderinside.svg',
		path: '/sales/3',
		title: 'Business Accounts',
		content: 'Manage multiple accounts',
	},
	{
		icon: '/tune.svg',
		path: '/sales/4',
		title: 'Admin Dashboard',
		content: 'Manage multiple paid modules',
	},
];

export default function SetupSidebar() {
	// set path and active state for navigation
	const pathname = usePathname();


	// to animate the sidebar
	let isTab = useMediaQuery({ query: '(max-width: 1060px)' });

	const [isOpen, setIsOpen] = useState(isTab ? false : true);

	const Siderbar_animation = isTab
		? // mobile view
		  {
				open: {
					x: 0,
					width: '25.3rem',
					transition: {
						damping: 40,
					},
				},
				closed: {
					x: -550,
					width: 0,
					transition: {
						damping: 40,
						delay: 0.15,
					},
				},
		  }
		: {
				// System view
				open: {
					width: '25.3rem',
					transition: {
						damping: 40,
					},
				},
				closed: {
					width: '10rem',
					transition: {
						damping: 40,
					},
				},
		  };

	useEffect(() => {
		if (isTab) {
			// mobile
			setIsOpen(false);
		} else {
			// desktop
			setIsOpen(true);
		}
	}, [isTab]);

	const company = [
		{
			children: 'Gfams',
			link: '#',
		},
		{
			children: 'Asap',
			link: '#',
		},
	];

	return (
		<>
			<div
				onClick={() => setIsOpen(false)}
				className={`mq750:fixed hidden inset-0 max-h-screen z-[998] bg-black/50 ${
					isOpen ? 'block' : 'hidden'
				} `}
			></div>
			<motion.div
				variants={Siderbar_animation}
				animate={isOpen ? 'open' : 'closed'}
				className={`self-stretch bg-foundation-purple-purple-400 flex flex-col items-end justify-start pt-11 mq850:px-[23.5px] px-2 py-[34.3px] box-border gap-[290.9px] max-w-[80%] mq450:gap-[145px] mq450:pt-5 mq450:pb-5 mq450:box-border mq450:min-w-full mq1050:pt-[29px] mq1050:pb-[22px] mq1050:box-border mq750:absolute z-[999] 
                `}
			>
				{/* <div className="w-auto relative bg-foundation-purple-purple-400 hidden max-w-full" /> */}
				<div className="self-stretch flex flex-col items-start justify-start gap-[34.5px] max-w-full mq450:gap-[22px]">
					<div className="mq750:flex hidden justify-end items-end w-full gap-0">
						<Image
							src={closeButton}
							loading="lazy"
							alt=""
							onClick={() => setIsOpen(!isOpen)}
							className="z-[999] flex justify-end cursor-pointer h-[30px] w-[30px] object-contain"
						/>
					</div>
					<div className="self-stretch flex flex-col items-center gap-3 justify-center py-2 px-5 mt-4 overflow-x-hidden whitespace-pre">
						<Image
							className="h-10 w-[108px] relative object-contain z-[1]"
							loading="lazy"
							alt=""
							src={xyz}
						/>
						<p className="mb-2 leading-[30px] font-normal font-inherit text-[35px] text-white whitespace-nowrap text-nowrap">
							Account Setup
						</p>
					</div>
					<div className="self-stretch h-px flex flex-row items-start justify-start py-0 pr-3.5 pl-[15.5px] box-border max-w-full">
						<div className="self-stretch flex-1 relative box-border max-w-full z-[1] border-[1px] border-solid border-white" />
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[1] mb-10">
						{setupItems.map((item, index) => {
							const isActive = pathname === item.path;

							return (
								<Link
									href={item.path}
									key={index}
									className={`self-stretch rounded-2xl ${
										isActive
											? ' '
											: ' text-inherit'
									} flex flex-col items-start hover:text-foundation-purple-purple-100 justify-center py-[26.5px] px-4 mq450:pl-2 mq450:pr-2 mq450:box-border cursor-pointer overflow-x-hidden`}
								>
									<div className="flex flex-row items-center justify-start gap-[30px] whitespace-pre overflow-x-hidden">
										<Image
											width={500}
											height={500}
											className="h-8 w-8 relative min-w-max"
											loading="lazy"
											alt=""
											// src={item.icon}
											src={item.icon}
										/>
										<div className="flex flex-col">
											<h1 className="m-0 relative text-[20px] leading-[30px] font-normal text-nowrap whitespace-nowrap font-inherit mq450:text-base mq450:leading-[24px]">
												<span
													className={`${item.isActive ? 'font-medium' : ''}`}
												>
													{item.title}{' '}
												</span>
											</h1>
											<p
												className={`m-0 text-white text-[14px] relative font-normal text-nowrap whitespace-nowrap ${
													item.isActive ? 'font-medium' : ''
												}`}
											>
												{item.content}
											</p>
										</div>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
				
				<motion.div
					className="absolute w-fit h-fit z-50 top-0 mt-5 float-right cursor-pointer mq1050:hidden block bg-white rounded-[50px]"
					animate={
						isOpen
							? {
									x: 0,
									y: 0,
									rotate: 0,
							  }
							: {
									x: 0,
									y: 0,
									rotate: 180,
							  }
					}
					transition={{
						duration: 0,
					}}
					onClick={() => setIsOpen(!isOpen)}
				>
					{/* <Image
						src={chevronDown2}
						alt=""
						className="w-[30px] h-[30px] object-contain rotate-90 align-middle"
					/> */}
				</motion.div>
			</motion.div>
			<div>
				<Image
					src={hamburger}
					alt=""
					className="w-[40px] h-[40px] object-contain m-1 mq750:block hidden"
					onClick={() => setIsOpen(true)}
				/>
			</div>
		</>
	);
}
