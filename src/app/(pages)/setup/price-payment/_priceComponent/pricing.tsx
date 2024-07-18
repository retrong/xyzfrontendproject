import React, { useMemo, useState } from 'react';

interface PricingProps {
	id: number;
	name: string;
	monthlyPrice: number;
}

const appsList: PricingProps[] = [
	{ id: 1, name: 'Customer Management ', monthlyPrice: 10 },
	{ id: 2, name: 'Product Management', monthlyPrice: 12 },
	{ id: 3, name: 'Supplier Management', monthlyPrice: 5 },
	{ id: 4, name: 'Warehouse Management', monthlyPrice: 0 },
	{ id: 5, name: 'Sales Management', monthlyPrice: 0 },
	{ id: 6, name: 'Account Management', monthlyPrice: 0 },
	{ id: 7, name: 'Finance Management', monthlyPrice: 5 },
	{ id: 8, name: 'Delivery Management', monthlyPrice: 3 },
	{ id: 9, name: 'HRM Management', monthlyPrice: 0 },
	{ id: 10, name: 'Payroll Management', monthlyPrice: 0 },
	{ id: 11, name: 'Production Management', monthlyPrice: 0 },
	{ id: 12, name: 'Order Management', monthlyPrice: 0 },
];

const Pricing: React.FC = () => {
	const [selectedApps, setSelectedApps] = useState<number[]>([]);

	const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			setSelectedApps(appsList.map((app) => app.id));
		} else {
			setSelectedApps([]);
		}
	};

	const handleSelectApp = (appId: number) => {
		setSelectedApps((prevSelected) => {
			if (prevSelected.includes(appId)) {
				return prevSelected.filter((id) => id !== appId);
			} else {
				return [...prevSelected, appId];
			}
		});
	};

	const isAllSelected = selectedApps.length === appsList.length;

    // calculate the total montly price

    const totalMonthlyPrice = useMemo(() => {
        return appsList
            .filter((app) => selectedApps.includes(app.id))
            .reduce((total, app) => total + app.monthlyPrice, 0);
    }, [selectedApps]);

    // Calculate user fees
    const userFee = selectedApps.length * 3;

    // calculate subtotal
    const subTotal = totalMonthlyPrice + userFee;

    // calculate discount (10% of subtotal)
    const discount = -(subTotal * 0.1);

    // calculate tax (20% of subtotal)
    const vat = subTotal * 0.2;

    const processingFee = 5;

    // Total amount to be charged
    const total = subTotal + discount + vat + processingFee;



	return (
		<div className="container mx-auto pt-4 pb-2 text-[14px] font-normal font-inter">
			<table className="min-w-full bg-white border border-gray-300">
				<thead>
					<tr className="bg-gray-100">
						<th className="py-2 border-b font-[500] text-left">List of Apps</th>
						<th className="py-2 px-4 border-b font-[500] text-right">
							Monthly Price(USD)
						</th>
					</tr>
				</thead>
				<tbody>
					{appsList.map((app) => (
						<tr key={app.id} className="hover:bg-gray-50">
							<td className="py-2 border-b gap-1 text-left flex align-middle items-center">
								<input
									type="checkbox"
									checked={selectedApps.includes(app.id)}
									onChange={() => handleSelectApp(app.id)}
									className="custom-checkbox text-foundation-purple-purple-400"
								/>
								<label>{app.name}</label>
							</td>
							<td className="py-2 px-4 border-b text-right">
								{app.monthlyPrice.toFixed(0)}
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<p className="border border-foundation-grey-grey-300 border-solid rounded-sm"></p>
			<div className="flex flex-col gap-5 pricing-setup mt-5">
				<div className="flex justify-between">
					<p className=" text-foundation-grey-grey-700">
						Total App Subscribed (USD)
					</p>
					<p className="px-2">{totalMonthlyPrice.toFixed(0)}</p>
				</div>
				<div className="flex justify-between">
					<p className=" text-foundation-grey-grey-700">
						User Fee ($3 Per Person)
					</p>
					<p className="px-2">{userFee}</p>
				</div>
				<div className="flex justify-between">
					<p className=" text-foundation-grey-grey-900">SubTotal (USD)</p>
					<p className="px-2">{subTotal}</p>
				</div>
				<div className="flex justify-between">
					<p className=" text-foundation-grey-grey-700">Discount (@ 10%)</p>
					<p className="px-2">{discount.toFixed(0)}</p>
				</div>
				<div className="flex justify-between">
					<p className=" text-foundation-grey-grey-700">VAT (@ 20%)</p>
					<p className="px-2">{vat.toFixed(0)}</p>
				</div>
				<div className="flex justify-between">
					<p className=" text-foundation-grey-grey-700">
						Payment Processing Fee
					</p>
					<p className="px-2">{processingFee}</p>
				</div>
				<div className="flex justify-between">
					<p className=" text-foundation-grey-grey-900">
						Total Amount to be charged (USD)
					</p>
					<p className="px-2">{total.toFixed(1)}</p>
				</div>
			</div>
			<form className="m-0 mt-4">
				<label
					className="flex gap-1 items-center font-normal font-inter text-[14px] text-foundation-purple-purple-400"
				>
					<input type="checkbox" className="custom-checkbox" />
					I agree to the terms & conditions for payment methods
				</label>
			</form>
		</div>
	);
};

export default Pricing;