import { Store, createState, withProps, select } from '@ngneat/elf';
import { createRequestsCacheOperator, updateRequestCache, withRequestsCache } from '@ngneat/elf-requests';
import { persistState, localStorageStrategy } from '@ngneat/elf-persist-state';
import { delay, take } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { updateUserDetail, UserProps } from './user.repository';

const helper = new JwtHelperService();
export interface AuthProps {
	token: string | null;
}

const { state, config } = createState(
	withProps<AuthProps>({ token: null }),
	withRequestsCache<'token'>()
);

const store = new Store({ name: 'auth', state, config });

export const skipWhileAuthCached = createRequestsCacheOperator(store);

export const token$ = store.pipe(select(state => state.token));
export const tokenQ = () => store.value.token;

export const persist = persistState(store, {
	key: 'auth',
	storage: localStorageStrategy,
});

persist.initialized$.pipe(take(1)).subscribe(x => {
	if (x) {
		let token = tokenQ();
		let user: UserProps['detail'] = null;
		if (token) user = helper.decodeToken(token);
		console.log(user);
		updateUserDetail(user);
	}
})

export function updateAuthToken(data: AuthProps) {
	store.update(updateRequestCache('token'), (state) => ({
		...state,
		...data
	}))
}

export function resetAuthStore() {
	store.reset();
}