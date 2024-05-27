"use client"

import React, { FC, useEffect, useRef, useState } from "react";

interface Props {}

let currentOTPIndex: number = 0;

const OtpInputField: FC<Props> = (props): JSX.Element => {

    const [otp, setOtp] = useState<string[]>(new Array(5).fill(""));
    const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);

    const inputRef = useRef<HTMLInputElement>(null)

    const handleOnChange = ({
        target,
    }: React.ChangeEvent<HTMLInputElement>):void => {
        const {value} = target
        const newOTP: string[] = [...otp]
        newOTP[currentOTPIndex] = value.substring(value.length - 1);

        if(!value) setActiveOTPIndex(currentOTPIndex - 1)
        else setActiveOTPIndex(currentOTPIndex + 1)

        setOtp(newOTP)  
    };

    const handleOnKeyDown = (
        {key}: React.KeyboardEvent<HTMLInputElement>, 
        index: number) =>
        {
            currentOTPIndex = index
            if(key === 'Backspace') setActiveOTPIndex(currentOTPIndex - 1);
        } 

    useEffect(() => {
        inputRef.current?.focus();
    }, [activeOTPIndex]);

    return (
        <div className="flex justify-between items-center space-x-2">
            {otp.map((_, index) => {
                return (
                    <React.Fragment key={index}>
                        <input 
                            ref={index === activeOTPIndex ? inputRef : null}
                            type="number" 
                            className="w-10 h-12 rounded bg-transparent outline-none text-center font-normal text-base focus:border-foundation-purple-purple-400 border-[1px] border-solid border-[#d0d0d0] focus:text-foundation-grey-grey-700 text-foundation-grey-grey-700 transition spin-button-none"
                            onChange={handleOnChange}
                            onKeyDown={(e) => handleOnKeyDown(e, index)}
                            value={otp[index]}
                        />
                        {index === otp.length - 1 ? null : (
                            <span className="w-2 py-0.5" />
                        )}
                    </React.Fragment>
                )
            })}

        </div>
    )
}

export default OtpInputField;