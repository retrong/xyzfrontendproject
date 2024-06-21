import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import React, { ChangeEvent, useState } from 'react';

interface InputFileUploadProps {
	register: any;
	id: string;
}

const InputFileUpload: React.FC<InputFileUploadProps> = ({ register, id }) => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0];
		setSelectedFile(file || null);
	};

	return (
		<div className="w-full">
			<span className="w-fit h-fit flex font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px]">
				Upload Contract Document
			</span>
			<label
				htmlFor={id}
				className="flex align-middle items-center justify-center w-full h-fit font-inter text-sm font-medium leading-6 text-foundation-grey-grey-800 gap-[1px] rounded-md border border-solid py-2 px-3  shadow-sm outline-none border-foundation-grey-grey-600 placeholder:text-foundation-grey-grey-600 focus:border-2 focus:border-solid focus:border-foundation-purple-purple-100 focus:bg-foundation-grey-grey-50 sm:text-sm sm:leading-6"
			>
				<CloudArrowUpIcon className="h-5 w-5 mr-2" />
				<span>Upload File</span>
				<input
					id={id}
					type="file"
					className="hidden"
					onChange={handleFileChange}
					accept="image/*"
					{...register('file')}
				/>
			</label>
			{selectedFile && (
				<div className="mt-2 text-sm text-gray-600">
					Selected file: {selectedFile.name}
				</div>
			)}
		</div>
	);
};

export default InputFileUpload;
