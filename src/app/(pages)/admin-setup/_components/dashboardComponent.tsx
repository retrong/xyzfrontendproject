import React from 'react';
import DashboardCard from './dashboardCard';
import RecentUpdateTable from './recentUpdateTable';

const dashboardData = [
	{
		id: 1,
		title: 'Sales',
		content:
			'Manage Customers, Sales Orders, Invoices, Sales Receipts, Credit Memos',
		icon: '/percent-circle-outline-white.svg',
		path: '#',
	},
	{
		id: 2,
		title: 'Purchase',
		content:
			'Manage Vendors, Purchase Orders, Vendor Invoices, Purchase Receipts, Debit Memos',
		icon: '/service-white.svg',
		path: '#',
	},
	{
		id: 3,
		title: 'Inventory',
		content:
			'Manage Products, Stock Adjustments, Stock Transfers, Goods Receipts, Goods Returns',
		icon: '/package-variant-closed-white.svg',
		path: '#',
	},
	{
		id: 4,
		title: 'Finance',
		content:
			'Manage Customers, Make Sales, Receive Payment and Reconcile your Sales',
		icon: '/finance-white.svg',
		path: '#',
	},
	{
		id: 5,
		title: 'Account',
		content:
			'Manage Accounts, Journal Entries, General Ledger, Bank Deposits and Withdrawal, Bank Reconcilations',
		icon: '/account-white.svg',
		path: '#',
	},
	{
		id: 6,
		title: 'Payroll',
		content: 'Manage Employees, Salary Payments, Deductions, Payroll Taxes',
		icon: '/payroll-white.svg',
		path: '#',
	},
	{
		id: 7,
		title: 'Product',
		content:
			'Manage Project, Project Creation, Time Tracking, Project Expenses.',
		icon: '/project-white.svg',
		path: '#',
	},
	{
		id: 8,
		title: 'Expenses',
		content:
			'Manage Request, Expense Claims, Reimbursements, Petty Cash, Expenses.',
		icon: '/expenses-white.svg',
		path: '#',
	},
	{
		id: 9,
		title: 'Production',
		content:
			'Manage Customers, Make Sales, Receive Payment and reconcile your sales',
		icon: '/production-white.svg',
		path: '#',
	},
	{
		id: 10,
		title: 'Service',
		content: 'Manage Jobs, Service Orders, Service Invoices, Work Orders',
		icon: '/toolbox-outline-white.svg',
		path: '#',
	},
	{
		id: 11,
		title: 'CRM',
		content:
			'Manage Customers, Customer Interaction, Leeds and Opportunities, Customer Feedback',
		icon: '/crm-white.svg',
		path: '#',
	},
	{
		id: 12,
		title: 'Asset',
		content:
			'Manage Asset, Asset Acquisitions, Depreciation Entries, Asset Dispolsals',
		icon: '/assets-white.svg',
		path: '#',
	},
];

export default function DashboardComponent() {
  return (
		<div className="py-2 flex flex-col">
			<div className="h-[500px] overflow-y-auto scrollbar-thin scrollbar-track-primary scrollbar-thumb-plain scrollbar-thumb-current">
				<div className="w-[100%] flex flex-wrap">
					<div className="grid mq1050:grid-cols-1 mq1125:grid-cols-2 grid-cols-3 gap-4 mq850:pr-3 pr-1 w-full">
						{dashboardData.map((dashboard) => (
							<DashboardCard
								key={dashboard.id}
								title={dashboard.title}
								path={dashboard.path}
								content={dashboard.content}
								icon={dashboard.icon}
							/>
							// <div key={dashboard.id} className="lg:w-full flex-wrap w-[calc(50%-8px)] mq850:w-[calc(33.333%-11px)]">
							// </div>
						))}
					</div>
				</div>
				<div className="w-[100%] flex flex-wrap"></div>
			</div>

			<div className="flex flex-col mt-4">
				<h2 className=" font-medium text-[20px] m-0">Recent Updates</h2>
				<RecentUpdateTable />
			</div>
		</div>
	);
}
