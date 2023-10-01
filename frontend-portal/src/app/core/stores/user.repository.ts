import { Store, createState, withProps, select } from '@ngneat/elf';

export interface UserProps {
	detail: {
		_id: string;
		fullName: string;
		email: string;
		role: string;
		config: {
			url: string;
			apiKey: string;
			secretKey: string;
		} | null;
		createdAt: string;
		updatedAt: string;
		iat: number;
		exp: number;
	} | null;
}

const { state, config } = createState(
	withProps<UserProps>({ detail: null })
);

const store = new Store({ name: 'user', state, config });

export const user$ = store.pipe(select(state => state.detail));
export const userQ = () => store.value.detail;

export function updateUserDetail(data: UserProps['detail']) {
	store.update((state) => ({
		...state,
		detail: data
	}));
}

export function resetUserStore() {
	store.reset();
}