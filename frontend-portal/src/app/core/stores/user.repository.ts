import { Store, createState, withProps, select } from '@ngneat/elf';

export interface UserProps {
	detail: {
		displayName: string | null;
		email: string | null;
		phoneNumber: string | null;
		photoURL: string | null;
		providerId: string;
		/**
		 * The user's unique ID.
		 */
		uid: string;
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