import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Tooltip,
} from '@mui/material';
import {
    QueryClient,
    QueryClientProvider,
    useMutation,
    useQuery,
    useQueryClient,
} from '@tanstack/react-query';
import {
    // createRow,
    type MRT_ColumnDef,
    MRT_EditActionButtons,
    type MRT_Row,
    type MRT_TableOptions,
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import { useMemo, useState } from 'react';
import { type User, fakeData, usStates } from './makeData';

const UserManagementTable = () => {
	const [validationErrors, setValidationErrors] = useState<
		Record<string, string | undefined>
	>({});

    const [toggleAction, setToggleAction] = useState(false)

	const columns = useMemo<MRT_ColumnDef<User>[]>(
		() => [
			// {
			// 	accessorKey: 'id',
			// 	header: 'Id',
			// 	enableEditing: false,
			// 	size: 80,
			// },
			{
				accessorKey: 'fullName',
				header: 'Name',
				muiEditTextFieldProps: {
					required: true,
					error: !!validationErrors?.fullName,
					helperText: validationErrors?.fullName,
					//remove any previous validation errors when user focuses on the input
					onFocus: () =>
						setValidationErrors({
							...validationErrors,
							fullName: undefined,
						}),
					//optionally add validation checking for onBlur or onChange
				},
			},
			{
				accessorKey: 'email',
				header: 'Email',
				muiEditTextFieldProps: {
					type: 'email',
					required: true,
					error: !!validationErrors?.email,
					helperText: validationErrors?.email,
					//remove any previous validation errors when user focuses on the input
					onFocus: () =>
						setValidationErrors({
							...validationErrors,
							email: undefined,
						}),
				},
			},
			{
				accessorKey: 'phoneNumber',
				header: 'Phone Number',
				muiEditTextFieldProps: {
					required: true,
					error: !!validationErrors?.phoneNumber,
					helperText: validationErrors?.phoneNumber,
					// Remove validation errors on focus
					onFocus: () =>
						setValidationErrors({
							...validationErrors,
							phoneNumber: undefined,
						}),
				},
			},
			// {
			// 	accessorKey: 'lastName',
			// 	header: 'Last Name',
			// 	muiEditTextFieldProps: {
			// 		required: true,
			// 		error: !!validationErrors?.lastName,
			// 		helperText: validationErrors?.lastName,
			// 		//remove any previous validation errors when user focuses on the input
			// 		onFocus: () =>
			// 			setValidationErrors({
			// 				...validationErrors,
			// 				lastName: undefined,
			// 			}),
			// 	},
			// },
			{
				accessorKey: 'createdDate',
				header: 'Created Date',
				// Adjust formatting as needed
				cell: ({ value }) => new Date(value).toLocaleDateString(),
			},
			{
				accessorKey: 'status',
				header: 'Status',
				editVariant: 'select',
				editSelectOptions: ['Active', 'Inactive', 'Pending'],
				muiEditTextFieldProps: {
					select: true,
					error: !!validationErrors?.status,
					helperText: validationErrors?.status,
				},
			},
			{
				accessorKey: 'role',
				header: 'Role',
				editVariant: 'select',
				editSelectOptions: ['Admin', 'User', 'Editor'],
				muiEditTextFieldProps: {
					select: true,
					error: !!validationErrors?.role,
					helperText: validationErrors?.role,
				},
			},

			// {
			// 	accessorKey: 'state',
			// 	header: 'State',
			// 	editVariant: 'select',
			// 	editSelectOptions: usStates,
			// 	muiEditTextFieldProps: {
			// 		select: true,
			// 		error: !!validationErrors?.state,
			// 		helperText: validationErrors?.state,
			// 	},
			// },
		],
		[validationErrors]
	);

	//call CREATE hook
	const { mutateAsync: createUser, isPending: isCreatingUser } =
		useCreateUser();
	//call READ hook
	const {
		data: fetchedUsers = [],
		isError: isLoadingUsersError,
		isFetching: isFetchingUsers,
		isLoading: isLoadingUsers,
	} = useGetUsers();
	//call UPDATE hook
	const { mutateAsync: updateUser, isPending: isUpdatingUser } =
		useUpdateUser();
	//call DELETE hook
	const { mutateAsync: deleteUser, isPending: isDeletingUser } =
		useDeleteUser();

	//CREATE action
	const handleCreateUser: MRT_TableOptions<User>['onCreatingRowSave'] = async ({
		values,
		table,
	}) => {
		const newValidationErrors = validateUser(values);
		if (Object.values(newValidationErrors).some((error) => error)) {
			setValidationErrors(newValidationErrors);
			return;
		}
		setValidationErrors({});
		await createUser(values);
		table.setCreatingRow(null); //exit creating mode
	};

	//UPDATE action
	const handleSaveUser: MRT_TableOptions<User>['onEditingRowSave'] = async ({
		values,
		table,
	}) => {
		const newValidationErrors = validateUser(values);
		if (Object.values(newValidationErrors).some((error) => error)) {
			setValidationErrors(newValidationErrors);
			return;
		}
		setValidationErrors({});
		await updateUser(values);
		table.setEditingRow(null); //exit editing mode
	};

	//DELETE action
	const openDeleteConfirmModal = (row: MRT_Row<User>) => {
		if (window.confirm('Are you sure you want to delete this user?')) {
			deleteUser(row.original.id);
		}
	};

	const table = useMaterialReactTable({
		columns,
		data: fetchedUsers,
		createDisplayMode: 'modal', //default ('row', and 'custom' are also available)
		editDisplayMode: 'modal', //default ('row', 'cell', 'table', and 'custom' are also available)
		enableEditing: true,
		getRowId: (row) => row.id,
		muiToolbarAlertBannerProps: isLoadingUsersError
			? {
					color: 'error',
					children: 'Error loading data',
			  }
			: undefined,
		muiTableContainerProps: {
			sx: {
				minHeight: '500px',
			},
		},
		onCreatingRowCancel: () => setValidationErrors({}),
		onCreatingRowSave: handleCreateUser,
		onEditingRowCancel: () => setValidationErrors({}),
		onEditingRowSave: handleSaveUser,
		//optionally customize modal content
		renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
			<>
				<DialogTitle variant="h3">Create New User</DialogTitle>
				<DialogContent
					sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
				>
					{internalEditComponents} {/* or render custom edit components here */}
				</DialogContent>
				<DialogActions>
					<MRT_EditActionButtons variant="text" table={table} row={row} />
				</DialogActions>
			</>
		),
		//optionally customize modal content
		renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
			<>
				<DialogTitle variant="h3">Edit User</DialogTitle>
				<DialogContent
					sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
				>
					{internalEditComponents} {/* or render custom edit components here */}
				</DialogContent>
				<DialogActions>
					<MRT_EditActionButtons variant="text" table={table} row={row} />
				</DialogActions>
			</>
		),
		renderRowActions: ({ row, table }) => (
			<Box sx={{ display: 'flex flex-col align-middle', gap: '0.7rem' }}>
				<div>
					<IconButton onClick={() => setToggleAction((prev) => !prev)}>
						<EditIcon />
					</IconButton>
				</div>
				<div
					className={`border-2 shadow-lg py-2 flex-col ${
						toggleAction ? 'flex' : 'hidden'
					}`}
				>
					<Tooltip title="Edit">
						<IconButton
							className="!text-[14px] !rounded-none"
							onClick={() => table.setEditingRow(row)}
						>
							{/* <EditIcon /> */}
							Edit
						</IconButton>
					</Tooltip>
					<Tooltip title="Delete">
						<IconButton
							className="!text-[14px] !rounded-none"
							color="error"
							onClick={() => openDeleteConfirmModal(row)}
						>
							{/* <DeleteIcon /> */}
							Delete
						</IconButton>
					</Tooltip>
				</div>
			</Box>
		),
		renderTopToolbarCustomActions: ({ table }) => (
			<Button
				variant="contained"
				onClick={() => {
					table.setCreatingRow(true);
					//simplest way to open the create row modal with no default values
					//or you can pass in a row object to set default values with the `createRow` helper function
					// table.setCreatingRow(
					//   createRow(table, {
					//     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
					//   }),
					// );
				}}
			>
				Create New User
			</Button>
		),
		state: {
			isLoading: isLoadingUsers,
			isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
			showAlertBanner: isLoadingUsersError,
			showProgressBars: isFetchingUsers,
		},
	});

	return <MaterialReactTable table={table} />;
};

//CREATE hook (post new user to api)
function useCreateUser() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (user: User) => {
			//send api update request here
			await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
			return Promise.resolve();
		},
		//client side optimistic update
		onMutate: (newUserInfo: User) => {
			queryClient.setQueryData(
				['users'],
				(prevUsers: any) =>
					[
						...prevUsers,
						{
							...newUserInfo,
							id: (Math.random() + 1).toString(36).substring(7),
						},
					] as User[]
			);
		},
		// onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
	});
}

//READ hook (get users from api)
function useGetUsers() {
	return useQuery<User[]>({
		queryKey: ['users'],
		queryFn: async () => {
			//send api request here
			await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
			return Promise.resolve(fakeData);
		},
		refetchOnWindowFocus: false,
	});
}

//UPDATE hook (put user in api)
function useUpdateUser() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (user: User) => {
			//send api update request here
			await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
			return Promise.resolve();
		},
		//client side optimistic update
		onMutate: (newUserInfo: User) => {
			queryClient.setQueryData(['users'], (prevUsers: any) =>
				prevUsers?.map((prevUser: User) =>
					prevUser.id === newUserInfo.id ? newUserInfo : prevUser
				)
			);
		},
		// onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
	});
}

//DELETE hook (delete user in api)
function useDeleteUser() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (userId: string) => {
			//send api update request here
			await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
			return Promise.resolve();
		},
		//client side optimistic update
		onMutate: (userId: string) => {
			queryClient.setQueryData(['users'], (prevUsers: any) =>
				prevUsers?.filter((user: User) => user.id !== userId)
			);
		},
		// onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
	});
}

const queryClient = new QueryClient();

const ExampleWithProviders = () => (
	//Put this with your other react-query providers near root of your app
	<QueryClientProvider client={queryClient}>
		<UserManagementTable />
	</QueryClientProvider>
);

export default ExampleWithProviders;

const validateRequired = (value: string) => !!value.length;
const validateEmail = (email: string) =>
	!!email.length &&
	email
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);

function validateUser(user: User) {
	return {
		fullName: !validateRequired(user.fullName)
			? 'First Name is Required'
			: '',
		lastName: !validateRequired(user.lastName) ? 'Last Name is Required' : '',
		email: !validateEmail(user.email) ? 'Incorrect Email Format' : '',
	};
}
