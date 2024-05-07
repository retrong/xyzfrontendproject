"use client"

import MenuPopupState from '@/components/navbarMenu';
import { sidebarItems } from '@/data';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { chevronDown2, chevrondownWite, closeButton, hamburger, profileimage, xyz } from '../../../../../public';

export default function Sidebar() {

    // set path and active state for navigation
    const pathname = usePathname()

    // logic to help manage hover state and image switch on hover
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isToggled, setIsToggled] = useState(true);

    const handleMouseEnter = (index : any) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    // to animate the sidebar
    let isTab = useMediaQuery({ query: "(max-width: 768px)" });

    console.log(isTab, "isTab")
    const [isOpen, setIsOpen] = useState(isTab ? false : true);

    const Siderbar_animation = isTab ? 
    // mobile view
    {
        open : {
            x :0,
            width: "25.3rem",
            transition: {
                damping : 40,
            }
        },
        closed: {
            x : -250,
            width: 0,
            transition: {
                damping: 40,
                delay : 0.15,
            },
        },
    } :{
        // System view
        open : {
            width: "25.3rem",
            transition: {
                damping : 40,
            }
        },
        closed: {
            width: "10rem",
            transition: {
                damping: 40,
            },
        },
    };


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
			<motion.div
				variants={Siderbar_animation}
				animate={isOpen ? 'open' : 'closed'}
				className={` h-auto self-stretch bg-foundation-purple-purple-400 flex flex-col items-end justify-start pt-11 px-[23.5px] pb-[34.3px] box-border gap-[290.9px] max-w-[80%] mq450:gap-[145px] mq450:pt-5 mq450:pb-5 mq450:box-border mq450:min-w-full mq1050:pt-[29px] mq1050:pb-[22px] mq1050:box-border mq750:absolute z-[999] ${
					isToggled ? 'flex' : 'hidden'
				}`}
			>
				<div className="w-auto h-[1024px] relative bg-foundation-purple-purple-400 hidden max-w-full" />
				<div className="self-stretch flex flex-col items-start justify-start gap-[44.5px] max-w-full mq450:gap-[22px]">
					<div className="mq750:flex hidden justify-end items-end w-full gap-0">
						<Image
							src={closeButton}
							loading="lazy"
							alt=""
							width={26}
							height={26}
							onClick={() => setIsToggled(!isToggled)}
							className="z-[999] flex justify-end cursor-pointer h-[26px] w-[26px]"
						/>
					</div>
					<div>
						<Image
							src={hamburger}
							loading="lazy"
							alt=""
							width={26}
							height={26}
							onClick={() => setIsToggled(isToggled)}
							className="mq750:flex hidden justify-end cursor-pointer h-[26px] w-[26px]"
						/>
					</div>
					<div className="self-stretch flex flex-row items-start justify-center py-0 px-5 overflow-x-hidden whitespace-pre">
						<Image
							className="h-10 w-[108px] relative object-cover z-[1] min-w-max"
							loading="lazy"
							alt=""
							src={xyz}
						/>
					</div>
					<div className="self-stretch h-px flex flex-row items-start justify-start py-0 pr-3.5 pl-[15.5px] box-border max-w-full">
						<div className="self-stretch flex-1 relative box-border max-w-full z-[1] border-[1px] border-solid border-white" />
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[1]">
						{sidebarItems.map((item, index) => {
							const isActive = pathname === item.path;
							const isHovered = hoveredIndex === index;

							return (
								<Link
									href={item.path}
									key={index}
									className={`self-stretch rounded-2xl ${
										isActive || isHovered
											? 'bg-white text-foundation-purple-purple-400'
											: ' text-inherit'
									} flex flex-col items-start justify-center py-[26.5px] px-14 mq450:pl-5 mq450:pr-5 mq450:box-border cursor-pointer hover:bg-white hover:text-foundation-purple-purple-400 hover:z-[1] overflow-x-hidden`}
									onMouseEnter={() => handleMouseEnter(index)}
									onMouseLeave={handleMouseLeave}
								>
									<div className="flex flex-row items-center justify-start gap-[32px] whitespace-pre overflow-x-hidden">
										<Image
											width={500}
											height={500}
											className="h-8 w-8 relative min-w-max"
											loading="lazy"
											alt=""
											// src={item.icon}
											src={isHovered || isActive ? item.iconHover : item.icon}
										/>
										<h1 className="m-0 relative text-inherit leading-[30px] font-normal text-nowrap whitespace-nowrap font-inherit mq450:text-base mq450:leading-[24px]">
											<span className={`${item.isActive ? 'font-medium' : ''}`}>
												{item.title}{' '}
											</span>
										</h1>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
				<div className="flex justify-center items-center w-full ">
					<div className=" flex w-auto flex-row items-start justify-center py-0 text-base text-foundation-grey-grey-800 mq450:pl-5 mq450:pr-5 mq450:box-border overflow-x-hidden whitespace-pre">
						<div className=" flex-1 rounded-2xl bg-white flex flex-col items-start justify-center pt-[9.5px] pb-[9.3px] px-4 gap-[8px] z-[1] mq450:pl-5 mq450:box-border overflow-x-hidden whitespace-pre">
							<div className="relative font-semibold">Change Company</div>
							<div className="flex gap-0 align-middle items-center font-text-xs-medium text-base text-foundation-purple-purple-400 w-auto">
								<Image
									src={profileimage}
									alt=""
									className="w-[28px] h-[28px] object-contain min-w-max"
								/>
								<MenuPopupState title="Company" subs={company} />
							</div>
						</div>
					</div>
				</div>

				{/* Control button for open and close of size nav */}
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
					<Image
						src={chevronDown2}
						alt=""
						className="w-[30px] h-[30px] object-contain rotate-90 align-middle"
					/>
				</motion.div>
			</motion.div>
		</>
	);
}