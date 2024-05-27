import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { LuEye, LuEyeOff } from 'react-icons/lu';

interface PasswordProps {
	placeholder: string;
    id: string;
    register: UseFormRegisterReturn;
    error?: string;
}

export default function PasswordInput({placeholder, id, register, error} : PasswordProps) {

    const [type, setType] = useState('password');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    // const [icon, setIcon] = useState(<LuEyeOff />);

    const handleToggle = () => {
        setIsPasswordVisible(!isPasswordVisible);
        setType(isPasswordVisible ? 'password' : 'text');
    };

    // const handleToggle = () => {
    //     if (type === 'password') {
    //         setIcon(<LuEye />);
    //         setType('text');
    //     } else {
    //         setIcon(<LuEyeOff />);
    //         setType('password');
    //     }
    // };

	return (
		<div className="flex relative">
			<input
                id={id}
				type={type}
				// name="password"
				placeholder={placeholder}
				// value={password}
				// onChange={(e) => setPassword(e.target.value)}
				autoComplete="current-password"
				className="px-4 py-4 mt-2 placeholder:text-foundation-grey-grey-700 w-full rounded-lg border-[1px] border-solid border-[#d0d0d0] active:border-foundation-purple-purple-400 focus:border-foundation-purple-purple-400 focus:border-2 "
				// {...register('confirmPassword', {
				// 	required: true,
				// })}
                aria-invalid={!!error}
                {...register}
			/>
			<span
				className="absolute flex right-3 top-1/2 transform -translate-y-1/2 items-end align-middle justify-end mt-[4.5px]  px-2 py-2 bg-gray-100 border-l-0 rounded-r cursor-pointer"
				onClick={handleToggle}
			>
				{isPasswordVisible ? 
					<LuEye size={20} color="#8a8a8a" />
				 : 
					<LuEyeOff size={20} color="#8a8a8a" />
				}

                {/* {icon} */}
			</span>
		</div>
	);
}
