"use client"
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import Image from "next/image";
import { FunctionComponent, useCallback, useState } from 'react';
import { filecogoutline, filtervariant, plus, sort } from "../../../../../public";

const SalesModuleOrderManagement: FunctionComponent = () => {
	const [tableCellDateTimePickerValue, setTableCellDateTimePickerValue] =
		useState(null);
	const [tableCellDateTimePicker1Value, setTableCellDateTimePicker1Value] =
		useState(null);
	const [tableCellDateTimePicker2Value, setTableCellDateTimePicker2Value] =
		useState(null);
	const [tableCellDateTimePicker3Value, setTableCellDateTimePicker3Value] =
		useState(null);
	const [tableCellDateTimePicker4Value, setTableCellDateTimePicker4Value] =
		useState(null);
	const [tableCellDateTimePicker5Value, setTableCellDateTimePicker5Value] =
		useState(null);

	const onButtonContainerClick = useCallback(() => {
		// Please sync "Sales Module/Order Management" to the project
	}, []);

	const onButtonContainer1Click = useCallback(() => {
		// Please sync "Sales Module/Order Management" to the project
	}, []);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="w-[994px] flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full mq1050:pl-[27px] mq1050:pr-[27px] mq1050:box-border">
                <div className="flex-1 rounded-2xl bg-foundation-purple-purple-400 flex flex-col items-start justify-start p-4 box-border max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                        <nav className="m-0 flex-1 flex flex-row items-center justify-start gap-[8px] max-w-full whitespace-nowrap text-left text-base text-white font-text-xs-medium mq1050:flex-wrap">
                            <button className="cursor-pointer [border:none] p-2 bg-white rounded-lg flex flex-row items-center justify-start whitespace-nowrap hover:bg-gainsboro">
                                <div className="relative text-base font-text-xs-medium text-foundation-purple-purple-400 text-left inline-block min-w-[112px]">
                                    Order Creation
                                </div>
                            </button>
                            <div className="flex flex-row items-center justify-start p-2">
                                <div className="relative inline-block min-w-[115px]">
                                    Order Approval
                                </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start p-2 box-border min-w-[105px]">
                                <div className="relative">Order Confirmation</div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start p-2 box-border min-w-[103px]">
                                <div className="relative">Invoice Generation</div>
                            </div>
                            <div className="flex flex-row items-center justify-start p-2">
                                <div className="relative inline-block min-w-[126px]">
                                    Order Fulfillment
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start p-2">
                                <div className="relative inline-block min-w-[75px]">
                                    Payments
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <section className="self-stretch flex flex-row items-start justify-start py-0 px-12 box-border max-w-full text-left text-5xl text-foundation-black-black-400 font-text-xs-medium mq1050:pl-6 mq1050:pr-6 mq1050:box-border">
                <div className="flex-1 flex flex-row items-start justify-start pt-[31px] px-16 pb-[13px] box-border relative max-w-full mq750:pt-5 mq750:pb-5 mq750:box-border mq1050:pl-8 mq1050:pr-8 mq1050:box-border">
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl bg-gray1-200" />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full z-[1]">
                        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq750:flex-wrap">
                            <h2 className="m-0 w-[214px] relative text-inherit font-normal font-inherit inline-block shrink-0 mq450:text-lgi">
                                Order Creation
                            </h2>
                            <div
                                className="rounded-2xl flex flex-row items-center justify-center py-2 px-0 gap-[4px] cursor-pointer text-base text-foundation-purple-purple-400"
                                onClick={onButtonContainerClick}
                            >
                                <Image
                                    className="h-6 w-6 relative overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src={filecogoutline}
                                />
                                <div className="relative leading-[36px]">
                                    Order Creation Settings
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-base text-foundation-purple-purple-400 mq750:flex-wrap">
                            <div className="flex flex-col items-start justify-start min-w-[214px] mq750:flex-1">
                                <div className="rounded-2xl flex flex-row items-center justify-center py-2 px-0 gap-[4px]">
                                    <Image
                                        className="h-6 w-6 relative overflow-hidden shrink-0"
                                        loading="lazy"
                                        alt=""
                                        src={plus}
                                    />
                                    <div className="relative leading-[36px]">
                                        Create a New Order
                                    </div>
                                </div>
                                <div
                                    className="rounded-2xl flex flex-row items-center justify-center py-2 px-0 gap-[3px] cursor-pointer"
                                    onClick={onButtonContainer1Click}
                                >
                                    <Image
                                        className="h-6 w-6 relative overflow-hidden shrink-0"
                                        loading="lazy"
                                        alt=""
                                        src={plus}
                                    />
                                    <div className="relative leading-[36px]">
                                        Create a New Order Link
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start">
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
                            </div>
                        </div>
                        <div className="self-stretch shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] rounded-xl bg-white flex flex-col items-start justify-start border-[1px] border-solid border-foundation-grey-grey-300">
                            <form className="m-0 self-stretch bg-white flex flex-row items-start justify-center py-0 pr-1 pl-0 [row-gap:20px] mq1050:flex-wrap mq1050:pl-1 mq1050:pt-1 mq1050:pb-1 mq1050:box-border">
                                <div className="w-[88px] flex flex-col items-start justify-start">
                                    <button className="self-stretch h-[66px] bg-foundation-grey-grey-50 box-border flex flex-row items-center justify-start py-7 pr-[52px] pl-6 border-b-[1px] border-solid border-foundation-grey-grey-200">
                                        <div className="h-2.5 w-3 flex flex-row items-center justify-start">
                                            <div className="h-2.5 w-3 relative text-xs leading-[10px] font-medium font-text-xs-medium text-foundation-grey-grey-900 text-left inline-block">
                                                ID
                                            </div>
                                        </div>
                                    </button>
                                    <div className="flex flex-row items-center justify-start pt-[31px] pb-[29px] pr-[30px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[34px]">
                                            5567
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start pt-[31px] pb-[29px] pr-[29px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[35px]">
                                            5568
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start pt-[31px] pb-[29px] pr-[29px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[35px]">
                                            5569
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start pt-[31px] pb-[29px] pr-[30px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[34px]">
                                            5570
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start pt-[31px] pb-[29px] pr-8 pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[32px]">
                                            5571
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start pt-[31px] pb-[29px] pr-[30px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[34px]">
                                            5572
                                        </div>
                                    </div>
                                </div>
                                <div className="m-0 flex-1 flex flex-col items-start justify-start min-w-[118px]">
                                    <div className="self-stretch bg-foundation-grey-grey-50 flex flex-row items-center justify-start pt-6 px-6 pb-[22px] gap-[12px] border-b-[1px] border-solid border-foundation-grey-grey-200">
                                        <div className="hidden flex-row items-center justify-center">
                                            <div className="h-5 w-5 relative rounded-md bg-white box-border overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
                                        </div>
                                        <div className="flex flex-row items-center justify-start">
                                            <div className="relative text-xs leading-[18px] font-medium font-text-xs-medium text-foundation-grey-grey-900 text-left inline-block min-w-[93px]">
                                                Customer Name
                                            </div>
                                        </div>
                                    </div>
                                    <button className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-[27.5px] pr-[62px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="h-[] w-24 flex flex-row items-center justify-start py-0 px-0 box-border">
                                            <div className="h-[17px] w-[103px] relative text-sm font-text-xs-medium text-gray1-100 text-left inline-block shrink-0">
                                                Samuel Charles
                                            </div>
                                        </div>
                                    </button>
                                    <button className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-[27.5px] pr-[62px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="h-[] w-24 flex flex-row items-center justify-start py-0 px-0 box-border">
                                            <div className="h-[17px] w-[111px] relative text-sm font-text-xs-medium text-gray1-100 text-left inline-block shrink-0">
                                                Williams Thomas
                                            </div>
                                        </div>
                                    </button>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[27.5px] px-6 pb-[26px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="flex flex-row items-center justify-start py-0 px-0">
                                            <div className="relative text-sm font-text-xs-medium text-gray1-100 text-left inline-block min-w-[100px] whitespace-nowrap">
                                                Charity Ibekwe
                                            </div>
                                        </div>
                                    </div>
                                    <button className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-[27.5px] pr-[62px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="h-[] w-24 flex flex-row items-center justify-start py-0 px-0 box-border">
                                            <div className="h-[17px] w-28 relative text-sm font-text-xs-medium text-gray1-100 text-left inline-block shrink-0">
                                                Adeniyi Adeniran
                                            </div>
                                        </div>
                                    </button>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[27.5px] px-6 pb-[26px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="flex flex-row items-center justify-start py-0 pr-0.5 pl-0">
                                            <div className="relative text-sm font-text-xs-medium text-gray1-100 text-left inline-block min-w-[94px]">
                                                Paschal Ngozi
                                            </div>
                                        </div>
                                    </div>
                                    <button className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-[27.5px] pr-[62px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="h-[] w-24 flex flex-row items-center justify-start py-0 px-0 box-border">
                                            <div className="h-[17px] w-[127px] relative text-sm font-text-xs-medium text-gray1-100 text-left inline-block shrink-0">
                                                Abudullahi Rahamn
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="w-[95px] flex flex-col items-start justify-start">
                                    <div className="self-stretch bg-foundation-grey-grey-50 flex flex-row items-center justify-center pt-[17px] px-[9px] pb-[15px] border-b-[1px] border-solid border-foundation-grey-grey-200">
                                        <div className="flex-1 flex flex-row items-center justify-start">
                                            <div className="flex-1 relative text-xs leading-[10px] font-medium font-text-xs-medium text-foundation-grey-grey-900 text-left">
                                                <p className="[margin-block-start:0] [margin-block-end:12px]">
                                                    Total Amount
                                                </p>
                                                <p className="m-0 whitespace-pre-wrap">
                                                    Spent (USD)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start pt-[31px] pb-[29px] pr-[35px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[36px]">
                                            1,500
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start pt-[31px] pb-[29px] pr-[35px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[36px]">
                                            1,000
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start pt-[31px] pb-[29px] pr-[35px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[36px]">
                                            1,500
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start pt-[31px] pb-[29px] pr-8 pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[39px]">
                                            2,500
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start pt-[31px] pb-[29px] pr-[26px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[45px]">
                                            10,000
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start pt-[31px] pb-[29px] pr-[23px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[48px]">
                                            30,000
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[90px] flex flex-col items-start justify-start">
                                    <div className="self-stretch bg-foundation-grey-grey-50 flex flex-row items-center justify-start pt-[17px] pb-[15px] pr-[33px] pl-6 border-b-[1px] border-solid border-foundation-grey-grey-200">
                                        <div className="flex-1 flex flex-row items-center justify-start">
                                            <div className="flex-1 relative text-xs leading-[10px] font-medium font-text-xs-medium text-foundation-grey-grey-900 text-left">
                                                <p className="[margin-block-start:0] [margin-block-end:12px]">
                                                    Unit
                                                </p>
                                                <p className="m-0">Order</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[16px]">
                                            10
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[16px]">
                                            10
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[16px]">
                                            10
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[16px]">
                                            10
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[16px]">
                                            10
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[16px]">
                                            10
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[82px] flex flex-col items-start justify-start">
                                    <div className="self-stretch bg-foundation-grey-grey-50 flex flex-row items-center justify-start pt-[17px] pb-[15px] pr-3.5 pl-6 border-b-[1px] border-solid border-foundation-grey-grey-200">
                                        <div className="flex-1 flex flex-row items-center justify-start">
                                            <div className="flex-1 relative text-xs leading-[10px] font-medium font-text-xs-medium text-foundation-grey-grey-900 text-left">
                                                <p className="[margin-block-start:0] [margin-block-end:12px]">{`Repeat `}</p>
                                                <p className="m-0">Order</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[7px]">
                                            1
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[9px]">
                                            5
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[9px]">
                                            2
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start pt-[31px] pb-[29px] pr-[22px] pl-6 border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[36px]">
                                            None
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[9px]">
                                            2
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[9px]">
                                            3
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
                                <div className="w-[129px] flex flex-col items-start justify-start">
                                    {/* changed Input to input */}
                                    <input className="bg-foundation-grey-grey-50 self-stretch h-[66px] box-border flex flex-row items-center justify-start py-7 pr-[67px] pl-6 font-text-xs-medium font-medium text-xs text-foundation-grey-grey-900 border-b-[1px] border-solid border-foundation-grey-grey-200" />
                                    <div className="flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[81px]">
                                            Unapproved
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[64px]">
                                            Approved
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[64px]">
                                            Approved
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[64px]">
                                            Approved
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[64px]">
                                            Approved
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start pt-[31px] px-6 pb-[29px] border-b-[1px] border-solid border-whitesmoke">
                                        <div className="relative text-sm leading-[10px] font-text-xs-medium text-gray1-100 text-left inline-block min-w-[64px]">
                                            Approved
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[141px] flex flex-col items-start justify-start">
                                    <div className="self-stretch bg-foundation-grey-grey-50 flex flex-row items-center justify-start pt-7 px-6 pb-[26px] border-b-[1px] border-solid border-foundation-grey-grey-200">
                                        <div className="flex flex-row items-center justify-start">
                                            <div className="relative text-xs leading-[10px] font-medium font-text-xs-medium text-foundation-grey-grey-900 text-left inline-block min-w-[27px]">
                                                Date
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch h-[72px]">
                                        <DatePicker
                                            value={tableCellDateTimePickerValue}
                                            onChange={(newValue: any) => {
                                                setTableCellDateTimePickerValue(newValue);
                                            }}
                                            sx={{
                                                fieldset: {
                                                    borderColor: '#eaecf0',
                                                    borderTopWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderBottomWidth: 1,
                                                    borderLeftWidth: 0,
                                                },
                                                '&:hover': {
                                                    fieldset: { borderColor: '#eaecf0' },
                                                    '.MuiOutlinedi-notchedOutline': {
                                                        borderColor: '#eaecf0',
                                                    },
                                                },
                                                '& i::placeholder': {
                                                    textColor: '#939292',
                                                    fontSize: 14,
                                                },
                                                i: {
                                                    color: '#939292',
                                                    fontSize: 14,
                                                    textAlign: 'left',
                                                    fontWeight: '400',
                                                },
                                                '& .MuiiBase-root': {
                                                    height: 72,
                                                    gap: '8px',
                                                    flexDirection: { flexDirection: 'row' },
                                                },
                                            }}
                                            slotProps={{
                                                textField: {
                                                    size: 'medium',
                                                    fullWidth: true,
                                                    required: false,
                                                    autoFocus: false,
                                                    error: false,
                                                    placeholder: '06-23-2022',
                                                },
                                                openPickerIcon: {
                                                    component: () => <></>,
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="self-stretch h-[72px]">
                                        <DatePicker
                                            value={tableCellDateTimePicker1Value}
                                            onChange={(newValue: any) => {
                                                setTableCellDateTimePicker1Value(newValue);
                                            }}
                                            sx={{
                                                fieldset: {
                                                    borderColor: '#eaecf0',
                                                    borderTopWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderBottomWidth: 1,
                                                    borderLeftWidth: 0,
                                                },
                                                '&:hover': {
                                                    fieldset: { borderColor: '#eaecf0' },
                                                    '.MuiOutlinedi-notchedOutline': {
                                                        borderColor: '#eaecf0',
                                                    },
                                                },
                                                '& i::placeholder': {
                                                    textColor: '#939292',
                                                    fontSize: 14,
                                                },
                                                i: {
                                                    color: '#939292',
                                                    fontSize: 14,
                                                    textAlign: 'left',
                                                    fontWeight: '400',
                                                },
                                                '& .MuiiBase-root': {
                                                    height: 72,
                                                    gap: '8px',
                                                    flexDirection: { flexDirection: 'row' },
                                                },
                                            }}
                                            slotProps={{
                                                textField: {
                                                    size: 'medium',
                                                    fullWidth: true,
                                                    required: false,
                                                    autoFocus: false,
                                                    error: false,
                                                    placeholder: '06-23-2022',
                                                },
                                                openPickerIcon: {
                                                    component: () => <></>,
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="self-stretch h-[72px]">
                                        <DatePicker
                                            value={tableCellDateTimePicker2Value}
                                            onChange={(newValue: any) => {
                                                setTableCellDateTimePicker2Value(newValue);
                                            }}
                                            sx={{
                                                fieldset: {
                                                    borderColor: '#eaecf0',
                                                    borderTopWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderBottomWidth: 1,
                                                    borderLeftWidth: 0,
                                                },
                                                '&:hover': {
                                                    fieldset: { borderColor: '#eaecf0' },
                                                    '.MuiOutlinedi-notchedOutline': {
                                                        borderColor: '#eaecf0',
                                                    },
                                                },
                                                '& i::placeholder': {
                                                    textColor: '#939292',
                                                    fontSize: 14,
                                                },
                                                i: {
                                                    color: '#939292',
                                                    fontSize: 14,
                                                    textAlign: 'left',
                                                    fontWeight: '400',
                                                },
                                                '& .MuiiBase-root': {
                                                    height: 72,
                                                    gap: '8px',
                                                    flexDirection: { flexDirection: 'row' },
                                                },
                                            }}
                                            slotProps={{
                                                textField: {
                                                    size: 'medium',
                                                    fullWidth: true,
                                                    required: false,
                                                    autoFocus: false,
                                                    error: false,
                                                    placeholder: '06-22-2022',
                                                },
                                                openPickerIcon: {
                                                    component: () => <></>,
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="self-stretch h-[72px]">
                                        <DatePicker
                                            value={tableCellDateTimePicker3Value}
                                            onChange={(newValue: any) => {
                                                setTableCellDateTimePicker3Value(newValue);
                                            }}
                                            sx={{
                                                fieldset: {
                                                    borderColor: '#eaecf0',
                                                    borderTopWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderBottomWidth: 1,
                                                    borderLeftWidth: 0,
                                                },
                                                '&:hover': {
                                                    fieldset: { borderColor: '#eaecf0' },
                                                    '.MuiOutlinedi-notchedOutline': {
                                                        borderColor: '#eaecf0',
                                                    },
                                                },
                                                '& i::placeholder': {
                                                    textColor: '#939292',
                                                    fontSize: 14,
                                                },
                                                i: {
                                                    color: '#939292',
                                                    fontSize: 14,
                                                    textAlign: 'left',
                                                    fontWeight: '400',
                                                },
                                                '& .MuiiBase-root': {
                                                    height: 72,
                                                    gap: '8px',
                                                    flexDirection: { flexDirection: 'row' },
                                                },
                                            }}
                                            slotProps={{
                                                textField: {
                                                    size: 'medium',
                                                    fullWidth: true,
                                                    required: false,
                                                    autoFocus: false,
                                                    error: false,
                                                    placeholder: '06-22-2022',
                                                },
                                                openPickerIcon: {
                                                    component: () => <></>,
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="self-stretch h-[72px]">
                                        <DatePicker
                                            value={tableCellDateTimePicker4Value}
                                            onChange={(newValue: any) => {
                                                setTableCellDateTimePicker4Value(newValue);
                                            }}
                                            sx={{
                                                fieldset: {
                                                    borderColor: '#eaecf0',
                                                    borderTopWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderBottomWidth: 1,
                                                    borderLeftWidth: 0,
                                                },
                                                '&:hover': {
                                                    fieldset: { borderColor: '#eaecf0' },
                                                    '.MuiOutlinedi-notchedOutline': {
                                                        borderColor: '#eaecf0',
                                                    },
                                                },
                                                '& i::placeholder': {
                                                    textColor: '#939292',
                                                    fontSize: 14,
                                                },
                                                i: {
                                                    color: '#939292',
                                                    fontSize: 14,
                                                    textAlign: 'left',
                                                    fontWeight: '400',
                                                },
                                                '& .MuiiBase-root': {
                                                    height: 72,
                                                    gap: '8px',
                                                    flexDirection: { flexDirection: 'row' },
                                                },
                                            }}
                                            slotProps={{
                                                textField: {
                                                    size: 'medium',
                                                    fullWidth: true,
                                                    required: false,
                                                    autoFocus: false,
                                                    error: false,
                                                    placeholder: '06-22-2022',
                                                },
                                                openPickerIcon: {
                                                    component: () => <></>,
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="self-stretch h-[72px]">
                                        <DatePicker
                                            value={tableCellDateTimePicker5Value}
                                            onChange={(newValue: any) => {
                                                setTableCellDateTimePicker5Value(newValue);
                                            }}
                                            sx={{
                                                fieldset: {
                                                    borderColor: '#eaecf0',
                                                    borderTopWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderBottomWidth: 1,
                                                    borderLeftWidth: 0,
                                                },
                                                '&:hover': {
                                                    fieldset: { borderColor: '#eaecf0' },
                                                    '.MuiOutlinedi-notchedOutline': {
                                                        borderColor: '#eaecf0',
                                                    },
                                                },
                                                '& i::placeholder': {
                                                    textColor: '#939292',
                                                    fontSize: 14,
                                                },
                                                i: {
                                                    color: '#939292',
                                                    fontSize: 14,
                                                    textAlign: 'left',
                                                    fontWeight: '400',
                                                },
                                                '& .MuiiBase-root': {
                                                    height: 72,
                                                    gap: '8px',
                                                    flexDirection: { flexDirection: 'row' },
                                                },
                                            }}
                                            slotProps={{
                                                textField: {
                                                    size: 'medium',
                                                    fullWidth: true,
                                                    required: false,
                                                    autoFocus: false,
                                                    error: false,
                                                    placeholder: '06-22-2022',
                                                },
                                                openPickerIcon: {
                                                    component: () => <></>,
                                                },
                                            }}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
		</LocalizationProvider>
	);
};

export default SalesModuleOrderManagement;
