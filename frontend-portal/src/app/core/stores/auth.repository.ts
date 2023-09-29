import { Store, createState, withProps, select } from '@ngneat/elf';
import { createRequestsCacheOperator, updateRequestCache, withRequestsCache } from '@ngneat/elf-requests';
import { persistState, localStorageStrategy } from '@ngneat/elf-persist-state';

export interface AuthProps {
	details: {
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
	withProps<AuthProps>({ details: null }),
	withRequestsCache<'auth'>()
);

const store = new Store({ name: 'auth', state, config });

export const skipWhileAuthCached = createRequestsCacheOperator(store);

export const auth$ = store.pipe(select(state => state.details));
export const authQ = () => store.value.details;

export const persist = persistState(store, {
	key: 'auth',
	storage: localStorageStrategy,
});

// persist.initialized$.pipe(take(1)).subscribe(x => {
// 	if (x) {
// 		let token = tokenQ();
// 		let user: UserProps['detail'] = null;
// 		if (token) user = helper.decodeToken(token);
// 		updateUserDetail(user);
// 	}
// });

export function updateAuthData(data: AuthProps['details']) {
	store.update(updateRequestCache('auth'), (state) => ({
		...state,
		...data
	}));
}

export function resetAuthStore() {
	store.reset();
}