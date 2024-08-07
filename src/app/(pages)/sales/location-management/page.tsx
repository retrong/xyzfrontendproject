// import { FunctionComponent, useCallback } from "react";
import Image from 'next/image';
import { FunctionComponent } from 'react';
// import { useNavigate } from "react-router-dom";
import { arrowexpand, call2action, filtervariant, plus, sort } from '../../../../../public';

const SalesModuleLocation: FunctionComponent = () => {
	//   const navigate = useNavigate();

	//   const onFrameContainer1Click = useCallback(() => {
	//     navigate("/sales-modulelocation-management");
	//   }, [navigate]);

    // location table

	return (
		<div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:20px] xl:flex-wrap">
			<main className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[673px] max-w-full md:gap-[16px] md:min-w-full">
				<section className="self-stretch flex flex-row items-start justify-start py-0 px-12 box-border max-w-full text-left text-5xl text-foundation-black-black-400 font-text-xs-medium lg:pl-6 lg:pr-6 lg:box-border">
					<div className="flex-1 flex flex-row items-start justify-start py-12 pr-[47px] pl-12 box-border relative min-h-[730px] max-w-full md:pt-[31px] md:pb-[31px] md:box-border lg:pl-6 lg:pr-[23px] lg:box-border">
						<div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl bg-gray1-200" />
						<div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[9px] max-w-full z-[1]">
							<div className="self-stretch flex flex-row items-center justify-between gap-[20px] sm:flex-wrap">
								<h2 className="m-0 relative text-inherit font-normal font-inherit sm:text-lgi">
									Sales Outlets
								</h2>
								<button className="cursor-pointer [border:none] py-2 px-0 bg-[transparent] rounded-2xl flex flex-row items-center justify-center gap-[4px]">
									<Image
										className="h-6 w-6 relative overflow-hidden shrink-0"
										loading="lazy"
										alt=""
										src={plus}
									/>
									<div className="relative text-base leading-[36px] font-text-xs-medium text-foundation-purple-purple-400 text-left">
										Add More Locations
									</div>
								</button>
							</div>
							<div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-foundation-purple-purple-400 sm:flex-wrap">
								<div className="flex flex-row items-start justify-start gap-[16px]">
									<div className="flex flex-row items-start justify-start">
										<div className="flex flex-row items-center justify-start gap-[8px]">
											<div className="relative leading-[36px] inline-block min-w-[38px]">
												Filter
											</div>
											<Image
												className="h-6 w-6 relative overflow-hidden shrink-0"
												loading="lazy"
												alt=""
												src={filtervariant}
											/>
										</div>
									</div>
									<div className="flex flex-row items-start justify-start">
										<div className="flex flex-row items-center justify-start gap-[8px]">
											<div className="relative leading-[36px] inline-block min-w-[33px]">
												Sort
											</div>
											<Image
												className="h-6 w-6 relative overflow-hidden shrink-0"
												loading="lazy"
												alt=""
												src={sort}
											/>
										</div>
									</div>
								</div>
								<div
									className="flex flex-row items-center justify-start gap-[8px] cursor-pointer"
									//   onClick={onFrameContainer1Click}
								>
									<div className="relative leading-[36px] inline-block min-w-[102px]">{`Expand Table `}</div>
									<Image
										className="h-6 w-6 relative overflow-hidden shrink-0"
										loading="lazy"
										alt=""
										src={arrowexpand}
									/>
								</div>
							</div>
							<div className="self-stretch flex flex-col items-start justify-start">
								<div className="self-stretch shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] rounded-xl bg-white flex flex-col items-start justify-start border-[1px] border-solid border-foundation-grey-grey-300">
									<form className="m-0 self-stretch bg-white flex flex-row items-start justify-center [row-gap:20px] lg:flex-wrap">
										<div className="w-52 flex flex-col items-start justify-start">
											<div className="self-stretch bg-foundation-grey-grey-50 flex flex-row items-center justify-start pt-6 px-6 pb-[22px] gap-[12px] border-b-[1px] border-solid border-foundation-grey-grey-200">
												<div className="hidden flex-row items-center justify-center">
													<div className="h-5 w-5 relative rounded-md bg-white box-border overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
												</div>
												<div className="flex flex-row items-center justify-start">
													<div className="relative text-xs leading-[18px] font-medium font-text-xs-medium text-foundation-grey-grey-900 text-left inline-block min-w-[73px]">
														Outlet Name
													</div>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[27.5px] px-6 pb-[26px] border-b-[1px] border-solid border-whitesmoke">
												<div className="flex flex-row items-center justify-start py-0 pr-2 pl-0">
													<div className="relative text-sm font-text-xs-medium text-gray1-100 text-left inline-block min-w-[88px]">
														Mushin Store
													</div>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[27.5px] px-6 pb-[26px] border-b-[1px] border-solid border-whitesmoke">
												<div className="w-24 flex flex-row items-center justify-start py-0 px-0 box-border">
													<div className="w-[133px] relative text-sm font-text-xs-medium text-gray1-100 text-left inline-block shrink-0">
														Victoria Island Store
													</div>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[27.5px] px-6 pb-[26px] border-b-[1px] border-solid border-whitesmoke">
												<div className="flex flex-row items-center justify-start py-0 pr-[22px] pl-0">
													<div className="relative text-sm font-text-xs-medium text-gray1-100 text-left inline-block min-w-[74px]">
														Lekki Store
													</div>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[27.5px] px-6 pb-[26px] border-b-[1px] border-solid border-whitesmoke">
												<div className="flex flex-row items-center justify-start py-0 px-0">
													<div className="w-[103px] relative text-sm font-text-xs-medium text-gray1-100 text-left inline-block">
														Gwarinpa Store
													</div>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[27.5px] px-6 pb-[26px] border-b-[1px] border-solid border-whitesmoke">
												<div className="flex flex-row items-center justify-start py-0 pr-[19px] pl-0">
													<div className="relative text-sm font-text-xs-medium text-gray1-100 text-left inline-block min-w-[77px]">
														Wuse Store
													</div>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[27.5px] px-6 pb-[26px] border-b-[1px] border-solid border-whitesmoke">
												<div className="flex flex-row items-center justify-start py-0 px-0">
													<div className="relative text-sm font-text-xs-medium text-gray1-100 text-left inline-block min-w-[100px] whitespace-nowrap">
														Mainland Store
													</div>
												</div>
											</div>
										</div>
										<div className="flex-1 flex flex-col items-start justify-start min-w-[186px]">
											{/* changed Input to input */}
											<input className="bg-foundation-grey-grey-50 self-stretch h-[66px] box-border flex flex-row items-center justify-start py-7 pr-[214px] pl-6 font-text-xs-medium font-medium text-xs text-foundation-grey-grey-900 border-b-[1px] border-solid border-foundation-grey-grey-200" />
											<div className="self-stretch flex flex-row items-center justify-start pt-[19px] px-6 pb-[17px] border-b-[1px] border-solid border-whitesmoke">
												<div className="flex-1 relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left">
													<p className="[margin-block-start:0] [margin-block-end:14px]">
														Industrial Crescent, 100253, Mushin
													</p>
													<p className="m-0">Lagos State Nigeria</p>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[19px] px-6 pb-[17px] border-b-[1px] border-solid border-whitesmoke">
												<div className="flex-1 relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left">
													<p className="[margin-block-start:0] [margin-block-end:14px]">
														Industrial Crescent, 100253, Mushin
													</p>
													<p className="m-0">Lagos State Nigeria</p>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[19px] px-6 pb-[17px] border-b-[1px] border-solid border-whitesmoke">
												<div className="flex-1 relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left">
													<p className="[margin-block-start:0] [margin-block-end:14px]">
														Industrial Crescent, 100253, Mushin
													</p>
													<p className="m-0">Lagos State Nigeria</p>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[19px] px-6 pb-[17px] border-b-[1px] border-solid border-whitesmoke">
												<div className="flex-1 relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left">
													<p className="[margin-block-start:0] [margin-block-end:14px]">
														Industrial Crescent, 100253, Mushin
													</p>
													<p className="m-0">Lagos State Nigeria</p>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[19px] px-6 pb-[17px] border-b-[1px] border-solid border-whitesmoke">
												<div className="flex-1 relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left">
													<p className="[margin-block-start:0] [margin-block-end:14px]">
														Industrial Crescent, 100253, Mushin
													</p>
													<p className="m-0">Lagos State Nigeria</p>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[19px] px-6 pb-[17px] border-b-[1px] border-solid border-whitesmoke">
												<div className="flex-1 relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left">
													<p className="[margin-block-start:0] [margin-block-end:14px]">
														Industrial Crescent, 100253, Mushin
													</p>
													<p className="m-0">Lagos State Nigeria</p>
												</div>
											</div>
										</div>
										<div className="w-64 flex flex-col items-start justify-start">
											<input className="bg-foundation-grey-grey-50 self-stretch h-[66px] box-border flex flex-row items-center justify-start py-7 pr-[136px] pl-6 font-text-xs-medium font-medium text-xs text-foundation-grey-grey-900 border-b-[1px] border-solid border-foundation-grey-grey-200" />
											<div className="self-stretch flex flex-row items-center justify-start pt-[19px] px-6 pb-[17px] border-b-[1px] border-solid border-whitesmoke">
												<div className="w-[165px] relative text-sm leading-[10px] font-text-xs-medium text-foundation-purple-purple-400 text-left inline-block">
													<p className="[margin-block-start:0] [margin-block-end:14px]">{`Latitude: 37.7749° N, `}</p>
													<p className="m-0">Longitude: -122.4194° W</p>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[19px] px-6 pb-[17px] border-b-[1px] border-solid border-whitesmoke">
												<div className="w-[165px] relative text-sm leading-[10px] font-text-xs-medium text-foundation-purple-purple-400 text-left inline-block">
													<p className="[margin-block-start:0] [margin-block-end:14px]">{`Latitude: 37.7749° N, `}</p>
													<p className="m-0">Longitude: -122.4194° W</p>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[19px] px-6 pb-[17px] border-b-[1px] border-solid border-whitesmoke">
												<div className="w-[165px] relative text-sm leading-[10px] font-text-xs-medium text-foundation-purple-purple-400 text-left inline-block">
													<p className="[margin-block-start:0] [margin-block-end:14px]">{`Latitude: 37.7749° N, `}</p>
													<p className="m-0">Longitude: -122.4194° W</p>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[19px] px-6 pb-[17px] border-b-[1px] border-solid border-whitesmoke">
												<div className="w-[165px] relative text-sm leading-[10px] font-text-xs-medium text-foundation-purple-purple-400 text-left inline-block">
													<p className="[margin-block-start:0] [margin-block-end:14px]">{`Latitude: 37.7749° N, `}</p>
													<p className="m-0">Longitude: -122.4194° W</p>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[19px] px-6 pb-[17px] border-b-[1px] border-solid border-whitesmoke">
												<div className="w-[165px] relative text-sm leading-[10px] font-text-xs-medium text-foundation-purple-purple-400 text-left inline-block">
													<p className="[margin-block-start:0] [margin-block-end:14px]">{`Latitude: 37.7749° N, `}</p>
													<p className="m-0">Longitude: -122.4194° W</p>
												</div>
											</div>
											<div className="self-stretch flex flex-row items-center justify-start pt-[19px] px-6 pb-[17px] border-b-[1px] border-solid border-whitesmoke">
												<div className="w-[165px] relative text-sm leading-[10px] font-text-xs-medium text-foundation-purple-purple-400 text-left inline-block">
													<p className="[margin-block-start:0] [margin-block-end:14px]">{`Latitude: 37.7749° N, `}</p>
													<p className="m-0">Longitude: -122.4194° W</p>
												</div>
											</div>
										</div>
										<div className="h-[555px] hidden flex-col items-start justify-start">
											<div className="w-[92px] h-11 bg-gray-50 box-border flex flex-row items-center justify-start py-3 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="h-[18px] flex-1 flex flex-row items-center justify-start">
													<div className="self-stretch flex-1 relative text-xs leading-[18px] font-medium font-text-xs-medium text-gray-600 text-left">
														Column
													</div>
												</div>
											</div>
											<div className="w-[92px] flex-1 box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
										</div>
										<div className="h-[555px] hidden flex-col items-start justify-start">
											<div className="w-[92px] h-11 bg-gray-50 box-border flex flex-row items-center justify-start py-3 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="h-[18px] flex-1 flex flex-row items-center justify-start">
													<div className="self-stretch flex-1 relative text-xs leading-[18px] font-medium font-text-xs-medium text-gray-600 text-left">
														Column
													</div>
												</div>
											</div>
											<div className="w-[92px] flex-1 box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
										</div>
										<div className="h-[555px] hidden flex-col items-start justify-start">
											<div className="w-[92px] h-11 bg-gray-50 box-border flex flex-row items-center justify-start py-3 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="h-[18px] flex-1 flex flex-row items-center justify-start">
													<div className="self-stretch flex-1 relative text-xs leading-[18px] font-medium font-text-xs-medium text-gray-600 text-left">
														Column
													</div>
												</div>
											</div>
											<div className="w-[92px] flex-1 box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
											<div className="w-[92px] h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="relative text-sm leading-[20px] font-text-xs-medium text-gray-600 text-left">
													Text
												</div>
											</div>
										</div>
										<div className="flex flex-col items-start justify-start">
											<div className="bg-foundation-grey-grey-50 flex flex-row items-center justify-start pt-7 px-6 pb-[26px] border-b-[1px] border-solid border-foundation-grey-grey-200">
												<div className="flex flex-row items-center justify-start">
													<div className="relative text-xs leading-[10px] font-medium font-text-xs-medium text-foundation-grey-grey-900 text-left inline-block min-w-[44px]">
														Actions
													</div>
												</div>
											</div>
											<div className="flex flex-row items-center justify-center pt-[26px] px-9 pb-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="hidden flex-col items-start justify-start z-[1]">
													<Image
														className="w-5 h-5 relative overflow-hidden shrink-0"
														alt=""
														src={call2action}
													/>
												</div>
												<div className="flex flex-col items-center justify-start">
													<Image
														className="w-5 h-5 relative overflow-hidden shrink-0"
														alt=""
														src={call2action}
													/>
												</div>
											</div>
											<div className="flex flex-row items-center justify-center pt-[26px] px-9 pb-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="hidden flex-col items-start justify-start z-[1]">
													<Image
														className="w-5 h-5 relative overflow-hidden shrink-0"
														alt=""
														src={call2action}
													/>
												</div>
												<div className="flex flex-col items-center justify-start">
													<Image
														className="w-5 h-5 relative overflow-hidden shrink-0"
														alt=""
														src={call2action}
													/>
												</div>
											</div>
											<div className="flex flex-row items-center justify-center pt-[26px] px-9 pb-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="hidden flex-col items-start justify-start z-[1]">
													<Image
														className="w-5 h-5 relative overflow-hidden shrink-0"
														alt=""
														src={call2action}
													/>
												</div>
												<div className="flex flex-col items-center justify-start">
													<Image
														className="w-5 h-5 relative overflow-hidden shrink-0"
														alt=""
														src={call2action}
													/>
												</div>
											</div>
											<div className="flex flex-row items-center justify-center pt-[26px] px-9 pb-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="hidden flex-col items-start justify-start z-[1]">
													<Image
														className="w-5 h-5 relative overflow-hidden shrink-0"
														alt=""
														src={call2action}
													/>
												</div>
												<div className="flex flex-col items-center justify-start">
													<Image
														className="w-5 h-5 relative overflow-hidden shrink-0"
														alt=""
														src={call2action}
													/>
												</div>
											</div>
											<div className="flex flex-row items-center justify-center pt-[26px] px-9 pb-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="hidden flex-col items-start justify-start z-[1]">
													<Image
														className="w-5 h-5 relative overflow-hidden shrink-0"
														alt=""
														src={call2action}
													/>
												</div>
												<div className="flex flex-col items-center justify-start">
													<Image
														className="w-5 h-5 relative overflow-hidden shrink-0"
														alt=""
														src={call2action}
													/>
												</div>
											</div>
											<div className="flex flex-row items-center justify-center pt-[26px] px-9 pb-6 border-b-[1px] border-solid border-whitesmoke">
												<div className="hidden flex-col items-start justify-start z-[1]">
													<Image
														className="w-5 h-5 relative overflow-hidden shrink-0"
														alt=""
														src={call2action}
													/>
												</div>
												<div className="flex flex-col items-center justify-start">
													<Image
														className="w-5 h-5 relative overflow-hidden shrink-0"
														alt=""
														src={call2action}
													/>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default SalesModuleLocation;
